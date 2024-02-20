import { MainButton } from "@twa-dev/sdk/react"
import styles from "./Transfer.module.css"
import { useState } from "react"
import axios from "axios"

type FoodTypes = "قیمه" | "مرغ"
type FoodPlaces = "dormitory" | "central"

const Transfer = () => {
    const [yourFoodType, setYourFoodType] = useState<FoodTypes | undefined>(undefined)
    const [yourFoodPlace, setYourFoodPlace] = useState<FoodPlaces | undefined>(undefined)
    const [hasYourFoodTypeError, setHasYourFoodTypeError] = useState<boolean>(false)
    const [hasYourFoodPlaceError, setHasYourFoodPlaceError] = useState<boolean>(false)
    const [foodCode, setFoodCode] = useState<number | undefined>(undefined)
    const [hasFoodCodeError, setHasFoodCodeError] = useState<boolean>(false)


    const handleYourFoodType = (type: FoodTypes) => {
        switch (type) {
            case 'قیمه':
                setYourFoodType('قیمه')
                break
            case 'مرغ':
                setYourFoodType('مرغ')
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

        if (!(hasYourFoodPlaceError || hasYourFoodTypeError || hasFoodCodeError)) {
            axios.post('http://localhost:4000/api/transfer', {
                requestedFoodType: "morgh",
                requestedFoodPlace: "dorm",
                code: 123456
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
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
                    <button onClick={() => handleYourFoodType('قیمه')} className={`button unselected ${yourFoodType === "قیمه" ? "selected" : null}`}>قیمه</button>
                    <button onClick={() => handleYourFoodType('مرغ')} className={`button unselected ${yourFoodType === "مرغ" ? "selected" : null}`}>مرغ</button>
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