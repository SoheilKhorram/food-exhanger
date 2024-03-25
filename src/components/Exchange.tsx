import { useState } from "react"
// import axios from "axios"

import styles from "./Exchange.module.css"
import { MainButton } from "@twa-dev/sdk/react"

type FoodTypes = "قیمه" | "مرغ"
type FoodPlaces = "dormitory" | "central"

interface ExchangeProps {
    isMan: boolean | undefined
}

const Exchange = ({ isMan }: ExchangeProps) => {
    const [yourFoodType, setYourFoodType] = useState<FoodTypes | undefined>(undefined)
    const [wantedFoodType, setWantedFoodType] = useState<FoodTypes | undefined>(undefined)
    const [yourFoodPlace, setYourFoodPlace] = useState<FoodPlaces | undefined>(undefined)
    const [wantedFoodPlace, setWantedFoodPlace] = useState<FoodPlaces | undefined>(undefined)
    const [hasYourFoodTypeError, setHasYourFoodTypeError] = useState<boolean>(false)
    const [hasWantedFoodTypeError, setHasWantedFoodTypeError] = useState<boolean>(false)
    const [hasYourFoodPlaceError, setHasYourFoodPlaceError] = useState<boolean>(false)
    const [hasWantedFoodPlaceError, setHasWantedFoodPlaceError] = useState<boolean>(false)
    const [foodCode, setFoodCode] = useState<number | undefined>(undefined)
    const [hasFoodCodeError, setHasFoodCodeError] = useState<boolean>(false)

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
    const handleWantedFoodPlace = (place: FoodPlaces) => {
        switch (place) {
            case 'dormitory':
                setWantedFoodPlace('dormitory')
                break
            case 'central':
                setWantedFoodPlace('central')
                break
            default:
                setWantedFoodPlace(undefined)
        }
    }

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
    const handleWantedFoodType = (type: FoodTypes) => {
        switch (type) {
            case 'قیمه':
                setWantedFoodType('قیمه')
                break
            case 'مرغ':
                setWantedFoodType('مرغ')
                break
            default:
                setWantedFoodType(undefined)
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

        if (wantedFoodType === undefined) {
            setHasWantedFoodTypeError(true)
        } else {
            setHasWantedFoodTypeError(false)
        }

        if (yourFoodPlace === undefined) {
            setHasYourFoodPlaceError(true)
        } else {
            setHasYourFoodPlaceError(false)
        }

        if (wantedFoodPlace === undefined) {
            setHasWantedFoodPlaceError(true)
        } else {
            setHasWantedFoodPlaceError(false)
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
    }

    console.log(isMan)

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
                <div>
                    <span>
                        <p>کدوم غذا رو میخوای ؟</p>
                        {hasWantedFoodTypeError && <p>! یادت رفت انتخاب کنیا</p>}
                    </span>
                    <button onClick={() => handleWantedFoodType('قیمه')} className={`button unselected ${wantedFoodType === "قیمه" ? "selected" : null}`}>قیمه</button>
                    <button onClick={() => handleWantedFoodType('مرغ')} className={`button unselected ${wantedFoodType === "مرغ" ? "selected" : null}`}>مرغ</button>
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
                <div>
                    <span>
                        <p>غذای کجا رو میخوای ؟</p>
                        {hasWantedFoodPlaceError && <p>! یادت رفت انتخاب کنیا</p>}
                    </span>
                    <button onClick={() => handleWantedFoodPlace('central')} className={`button unselected ${wantedFoodPlace === "central" ? "selected" : null}`}>سلف مرکزی</button>
                    <button onClick={() => handleWantedFoodPlace('dormitory')} className={`button unselected ${wantedFoodPlace === "dormitory" ? "selected" : null}`}>سلف خوابگاه</button>
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
export default Exchange