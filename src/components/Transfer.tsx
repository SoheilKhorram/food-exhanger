import { MainButton } from "@twa-dev/sdk/react"
import styles from "./Transfer.module.css"
import { useState } from "react"
import axios from "axios"

type FoodTypes = "gheymeh" | "morgh"
type FoodPlaces = "dormitory" | "central"

interface TransferProps {
    isMan: boolean | undefined
}

const Transfer = ({ isMan }: TransferProps) => {
    const [yourFoodType, setYourFoodType] = useState<FoodTypes | undefined>(undefined)
    const [yourFoodPlace, setYourFoodPlace] = useState<FoodPlaces | undefined>(undefined)
    const [hasYourFoodTypeError, setHasYourFoodTypeError] = useState<boolean>(false)
    const [hasYourFoodPlaceError, setHasYourFoodPlaceError] = useState<boolean>(false)
    const [foodCode, setFoodCode] = useState<number | undefined>(undefined)
    const [hasFoodCodeError, setHasFoodCodeError] = useState<boolean>(false)


    const handleYourFoodType = (type: FoodTypes) => {
        switch (type) {
            case 'gheymeh':
                setYourFoodType('gheymeh')
                break
            case 'morgh':
                setYourFoodType('morgh')
                break
            default:
                setYourFoodType(undefined)
        }
    }

    const handleYourFoodPlace = (place: FoodPlaces) => {
        switch (place) {
            case 'dormitory':
                setYourFoodPlace('dormitory')
                break
            case 'central':
                setYourFoodPlace('central')
                break
            default:
                setYourFoodPlace(undefined)
        }
    }

    const handleFoodCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const number = parseInt(e.target.value.slice(0, 6))
        setFoodCode(number)
    }

    const checkErrors = () => {
        if (yourFoodType === undefined) {
            setHasYourFoodTypeError(true)
        } else {
            setHasYourFoodTypeError(false)
        }

        if (yourFoodPlace === undefined) {
            setHasYourFoodPlaceError(true)
        } else {
            setHasYourFoodPlaceError(false)
        }

        if (foodCode === undefined || isNaN(foodCode)) {
            setHasFoodCodeError(true)
        } else if (foodCode.toString().length !== 6) {
            setHasFoodCodeError(true)
        } else {
            setHasFoodCodeError(false)
        }
    }

    const handleMainButtonClick = () => {
        checkErrors()

        const name = localStorage.getItem('name')
        const username = localStorage.getItem('username')
        const userId = localStorage.getItem('userId')

        if (!(hasYourFoodPlaceError || hasYourFoodTypeError || hasFoodCodeError)) {
            axios.post('http://localhost:4000/api/transfer', {
                requestedFoodType: yourFoodType,
                requestedFoodPlace: yourFoodPlace,
                isMan,
                name,
                username,
                userId: +userId!,
                code: foodCode
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <>
            <div className={styles['food_options']}>
                <div>
                    <span>
                        <p>غذات چیه ؟</p>
                        {hasYourFoodTypeError && <p>! یادت رفت انتخاب کنیا</p>}
                    </span>
                    <button onClick={() => handleYourFoodType('gheymeh')} className={`button unselected ${yourFoodType === "gheymeh" ? "selected" : null}`}>قیمه</button>
                    <button onClick={() => handleYourFoodType('morgh')} className={`button unselected ${yourFoodType === "morgh" ? "selected" : null}`}>مرغ</button>
                </div>
            </div>
            <div className={styles['place_options']}>
                <div>
                    <span>
                        <p>غذات کجاست ؟</p>
                        {hasYourFoodPlaceError && <p>! یادت رفت انتخاب کنیا</p>}
                    </span>
                    <button onClick={() => handleYourFoodPlace('central')} className={`button unselected ${yourFoodPlace === "central" ? "selected" : null}`}>سلف مرکزی</button>
                    <button onClick={() => handleYourFoodPlace('dormitory')} className={`button unselected ${yourFoodPlace === "dormitory" ? "selected" : null}`}>سلف خوابگاه</button>
                </div>
            </div>
            <div className={styles['code']}>
                <span>
                    <p>کد غذات چیه ؟</p>
                    {hasFoodCodeError && foodCode?.toString().length !== 6 && <p>! کد غذا باید شش رقمی باشه</p>}
                </span>
                <input dir='rtl' min={0} step={1} value={foodCode} onChange={(e) => handleFoodCodeChange(e)} type="number" maxLength={6} />
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

export default Transfer