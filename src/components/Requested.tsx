import { useState } from "react"
import { MainButton } from "@twa-dev/sdk/react"

import styles from "./Requested.module.css"
import axios from "axios"

type FoodTypes = "قیمه" | "مرغ"
type FoodPlaces = "dormitory" | "central"

const Requested = () => {
    const [requestedFoodType, setRequestedFoodType] = useState<FoodTypes | undefined>(undefined)
    const [requestedFoodPlace, setRequestedFoodPlace] = useState<FoodPlaces | undefined>(undefined)
    const [hasRequestedFoodTypeError, setHasRequestedFoodTypeError] = useState<boolean>(false)
    const [hasRequestedFoodPlaceError, setHasRequestedFoodPlaceError] = useState<boolean>(false)

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
            case 'قیمه':
                setRequestedFoodType('قیمه')
                break
            case 'مرغ':
                setRequestedFoodType('مرغ')
                break
            default:
                setRequestedFoodType(undefined)
        }
    }

    const handleMainButtonClick = async () => {
        checkErrors()

        if (!(hasRequestedFoodPlaceError || hasRequestedFoodTypeError)) {
            const response = await axios.get('http://localhost:4000/api/transfer', {
                params: {
                    requestedFoodType: "morgh",
                    requestedFoodPlace: "dorm"
                }
            })
            console.log(response)
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
                    <button onClick={() => handleRequestedFoodType('قیمه')} className={`button unselected ${requestedFoodType === "قیمه" ? "selected" : null}`}>قیمه</button>
                    <button onClick={() => handleRequestedFoodType('مرغ')} className={`button unselected ${requestedFoodType === "مرغ" ? "selected" : null}`}>مرغ</button>
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
        </>
    )
}
export default Requested