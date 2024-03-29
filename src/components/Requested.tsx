import { useState } from "react"
import { MainButton } from "@twa-dev/sdk/react"

import styles from "./Requested.module.css"
import axios from "axios"
import Modal from "./Modal"

type FoodTypes = "gheymeh" | "morgh"
type FoodPlaces = "dormitory" | "central"

interface RequestedProps {
    isMan: boolean | undefined
}

const Requested = ({ isMan }: RequestedProps) => {
    const [requestedFoodType, setRequestedFoodType] = useState<FoodTypes | undefined>(undefined)
    const [requestedFoodPlace, setRequestedFoodPlace] = useState<FoodPlaces | undefined>(undefined)
    const [hasRequestedFoodTypeError, setHasRequestedFoodTypeError] = useState<boolean>(false)
    const [hasRequestedFoodPlaceError, setHasRequestedFoodPlaceError] = useState<boolean>(false)
    // const [data, setData] = useState<>({})
    const [isModalOpen, setIsModalOpen] = useState(false)

    const checkErrors = () => {
        if (requestedFoodType === undefined) {
            setHasRequestedFoodTypeError(true)
        } else {
            setHasRequestedFoodTypeError(false)
        }

        if (requestedFoodPlace === undefined) {
            setHasRequestedFoodPlaceError(true)
        } else {
            setHasRequestedFoodPlaceError(false)
        }
    }

    const handleRequestedFoodPlace = (place: FoodPlaces) => {
        switch (place) {
            case 'dormitory':
                setRequestedFoodPlace('dormitory')
                break
            case 'central':
                setRequestedFoodPlace('central')
                break
            default:
                setRequestedFoodPlace(undefined)
        }
    }

    const handleRequestedFoodType = (type: FoodTypes) => {
        switch (type) {
            case 'gheymeh':
                setRequestedFoodType('gheymeh')
                break
            case 'morgh':
                setRequestedFoodType('morgh')
                break
            default:
                setRequestedFoodType(undefined)
        }
    }

    const handleMainButtonClick = async () => {
        checkErrors()

        if (!(hasRequestedFoodPlaceError || hasRequestedFoodTypeError)) {
            setIsModalOpen(true)
            /* const response = */ await axios.get('http://localhost:4000/api/transfer', {
                params: {
                    isMan,
                    requestedFoodType,
                    requestedFoodPlace
                }
            })
            // setData(response.data)
        }
    }

    return (
        <>
            <div className={styles['food_options']}>
                <div>
                    <span>
                        <p>کدوم غذارو میخوای ؟</p>
                        {hasRequestedFoodTypeError && <p>! یادت رفت انتخاب کنیا</p>}
                    </span>
                    <button onClick={() => handleRequestedFoodType('gheymeh')} className={`button unselected ${requestedFoodType === "gheymeh" ? "selected" : null}`}>قیمه</button>
                    <button onClick={() => handleRequestedFoodType('morgh')} className={`button unselected ${requestedFoodType === "morgh" ? "selected" : null}`}>مرغ</button>
                </div>
            </div >
            <div className={styles['place_options']}>
                <div>
                    <span>
                        <p>غذای کجا رو میخوای ؟</p>
                        {hasRequestedFoodPlaceError && <p>! یادت رفت انتخاب کنیا</p>}
                    </span>
                    <button onClick={() => handleRequestedFoodPlace('central')} className={`button unselected ${requestedFoodPlace === "central" ? "selected" : null}`}>سلف مرکزی</button>
                    <button onClick={() => handleRequestedFoodPlace('dormitory')} className={`button unselected ${requestedFoodPlace === "dormitory" ? "selected" : null}`}>سلف خوابگاه</button>
                </div>
            </div>
            <button onClick={handleMainButtonClick}>
                goooooo
            </button>
            <MainButton
                onClick={handleMainButtonClick}
                text='بزن بریم'
            />
            {isModalOpen && <Modal width="50%" onClose={() => setIsModalOpen(false)}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 5, fontSize: "12px" }}>
                    <p style={{ fontSize: "24px" }}>123456</p>
                    {/* <p style={{ fontSize: "24px" }}>{data?.code}</p> */}
                    <a href="tg://user?id=103190680">somehing</a>
                </div>
            </Modal>}
        </>
    )
}
export default Requested