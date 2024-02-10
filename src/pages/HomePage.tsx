import Lottie from 'lottie-react'

import ManAnimation from '../assets/man.json'
import WomanAnimation from '../assets/woman.json'
import styles from './HomePage.module.css'
import { useState } from 'react'
import { MainButton } from '@twa-dev/sdk/react'

type FoodOptions = 'درخواستی' | 'واگذاری' | 'تبادل'
type FoodTypes = "قیمه" | "مرغ"
type FoodPlaces = "خوابگاه" | "مرکزی"


const HomePage = () => {
  const [isMan, setIsMan] = useState<boolean | undefined>(undefined)
  const [foodOption, setFoodOption] = useState<FoodOptions>('تبادل')
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

  const handleFoodOptions = (option: FoodOptions) => {
    switch (option) {
      case 'درخواستی':
        setFoodOption('درخواستی')
        break
      case 'واگذاری':
        setFoodOption('واگذاری')
        break
      case 'تبادل':
        setFoodOption('تبادل')
        break
    }
  }

  const handleYourFoodPlace = (place: FoodPlaces) => {
    switch (place) {
      case 'خوابگاه':
        setYourFoodPlace('خوابگاه')
        break
      case 'مرکزی':
        setYourFoodPlace('مرکزی')
        break
      default:
        setYourFoodPlace(undefined)
    }
  }
  const handleWantedFoodPlace = (place: FoodPlaces) => {
    switch (place) {
      case 'خوابگاه':
        setWantedFoodPlace('خوابگاه')
        break
      case 'مرکزی':
        setWantedFoodPlace('مرکزی')
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

  const renderedFoodOptions = () => {
    if (foodOption === "تبادل") {
      return (
        <>
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
        </>
      )
    }

    if (foodOption === 'درخواستی') {
      return (
        <div>
          <span>
            <p>کدوم غذارو میخوای ؟</p>
            {hasWantedFoodTypeError && <p>! یادت رفت انتخاب کنیا</p>}
          </span>
          <button onClick={() => handleWantedFoodType('قیمه')} className={`button unselected ${wantedFoodType === "قیمه" ? "selected" : null}`}>قیمه</button>
          <button onClick={() => handleWantedFoodType('مرغ')} className={`button unselected ${wantedFoodType === "مرغ" ? "selected" : null}`}>مرغ</button>
        </div>
      )
    }

    if (foodOption === "واگذاری") {
      return (
        <div>
          <span>
            <p>غذات چیه ؟</p>
            {hasYourFoodTypeError && <p>! یادت رفت انتخاب کنیا</p>}
          </span>
          <button onClick={() => handleYourFoodType('قیمه')} className={`button unselected ${yourFoodType === "قیمه" ? "selected" : null}`}>قیمه</button>
          <button onClick={() => handleYourFoodType('مرغ')} className={`button unselected ${yourFoodType === "مرغ" ? "selected" : null}`}>مرغ</button>
        </div>
      )
    }
  }

  const renderedPlaceOptions = () => {
    if (foodOption === "تبادل") {
      return (
        <>
          <div>
            <span>
              <p>غذات کجاست ؟</p>
              {hasYourFoodPlaceError && <p>! یادت رفت انتخاب کنیا</p>}
            </span>
            <button onClick={() => handleYourFoodPlace('مرکزی')} className={`button unselected ${yourFoodPlace === "مرکزی" ? "selected" : null}`}>سلف مرکزی</button>
            <button onClick={() => handleYourFoodPlace('خوابگاه')} className={`button unselected ${yourFoodPlace === "خوابگاه" ? "selected" : null}`}>سلف خوابگاه</button>
          </div>
          <div>
            <span>
              <p>غذای کجا رو میخوای ؟</p>
              {hasWantedFoodPlaceError && <p>! یادت رفت انتخاب کنیا</p>}
            </span>
            <button onClick={() => handleWantedFoodPlace('مرکزی')} className={`button unselected ${wantedFoodPlace === "مرکزی" ? "selected" : null}`}>سلف مرکزی</button>
            <button onClick={() => handleWantedFoodPlace('خوابگاه')} className={`button unselected ${wantedFoodPlace === "خوابگاه" ? "selected" : null}`}>سلف خوابگاه</button>
          </div>
        </>
      )
    }

    if (foodOption === "واگذاری") {
      return (
        <div>
          <span>
            <p>غذات کجاست ؟</p>
            {hasYourFoodPlaceError && <p>! یادت رفت انتخاب کنیا</p>}
          </span>
          <button onClick={() => handleYourFoodPlace('مرکزی')} className={`button unselected ${yourFoodPlace === "مرکزی" ? "selected" : null}`}>سلف مرکزی</button>
          <button onClick={() => handleYourFoodPlace('خوابگاه')} className={`button unselected ${yourFoodPlace === "خوابگاه" ? "selected" : null}`}>سلف خوابگاه</button>
        </div>
      )
    }

    if (foodOption === 'درخواستی') {
      return (
        <div>
          <span>
            <p>غذای کجا رو میخوای ؟</p>
            {hasWantedFoodPlaceError && <p>! یادت رفت انتخاب کنیا</p>}
          </span>
          <button onClick={() => handleWantedFoodPlace('مرکزی')} className={`button unselected ${wantedFoodPlace === "مرکزی" ? "selected" : null}`}>سلف مرکزی</button>
          <button onClick={() => handleWantedFoodPlace('خوابگاه')} className={`button unselected ${wantedFoodPlace === "خوابگاه" ? "selected" : null}`}>سلف خوابگاه</button>
        </div>
      )
    }
  }

  const handleMainButtonClick = () => {
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

  const handleFoodCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value.slice(0, 6))
    setFoodCode(number)
  }

  return (
    <>
      <div className={styles['home-page']}>
        <section className={styles["man_or_woman"]}>
          <div
            className={styles["man_or_woman--man"]}
            onClick={() => setIsMan(true)}
          >
            <Lottie
              animationData={ManAnimation}
              autoPlay={true}
              loop={true}
              initialSegment={[35, 110]}
              style={{ zIndex: 10, position: "relative" }}
            />
            <div className={`${styles["man_or_woman--woman-border"]} ${isMan === false ? styles["woman-border-color"] : null} `} />
          </div>
          <div
            className={styles["man_or_woman--woman"]}
            onClick={() => setIsMan(false)}
          >
            <Lottie
              animationData={WomanAnimation}
              autoPlay={true}
              loop={true}
              initialSegment={[35, 110]}
            />
            <div className={`${styles["man_or_woman--man-border"]} ${isMan === true ? styles["man-border-color"] : null} `} />
          </div>
        </section>
        <div className={styles['code_options']}>
          <button onClick={() => handleFoodOptions('تبادل')} className={`button unselected ${foodOption === "تبادل" ? "selected" : null}`}>تبادل</button>
          <button onClick={() => handleFoodOptions('درخواستی')} className={`button unselected ${foodOption === "درخواستی" ? "selected" : null}`}>درخواستی</button>
          <button onClick={() => handleFoodOptions('واگذاری')} className={`button unselected ${foodOption === "واگذاری" ? "selected" : null}`}>واگذاری</button>
        </div>
        <div className={styles['food_options']}>
          {renderedFoodOptions()}
        </div>
        <div className={styles['place_options']}>
          {renderedPlaceOptions()}
        </div>
        {foodOption !== 'درخواستی' &&
          <div className={styles['code']}>
            <span>
              <p>کد غذات چیه ؟</p>
              {hasFoodCodeError && foodCode?.toString().length !== 6 && <p>! کد غذا باید شش رقمی باشه</p>}
            </span>
            <input dir='rtl' min={0} step={1} value={foodCode} onChange={(e) => handleFoodCodeChange(e)} type="number" maxLength={6} />
          </div>
        }
      </div>
      <MainButton
        onClick={handleMainButtonClick}
        text='بزن بریم'
      />
    </>
  )
}
export default HomePage
