import Lottie from 'lottie-react'

import ManAnimation from '../assets/man.json'
import WomanAnimation from '../assets/woman.json'
import styles from './HomePage.module.css'
import { useRef, useState } from 'react'

type FoodOptions = 'درخواستی' | 'واگذاری' | 'تبادل'
type FoodTypes = "قیمه" | "مرغ"
type FoodPlaces = "خوابگاه" | "مرکزی"



const HomePage = () => {
  const [isMan, setIsMan] = useState<boolean | undefined>(undefined)
  const [foodOption, setFoodOption] = useState<FoodOptions | undefined>(undefined)
  const [foodType, setFoodType] = useState<FoodTypes | undefined>(undefined)
  const [foodPlace, setFoodPlace] = useState<FoodPlaces | undefined>(undefined)
  const codeRef = useRef(null)

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
      default:
        setFoodOption(undefined)
    }
  }

  const handleFoodPlace = (place: FoodPlaces) => {
    switch (place) {
      case 'خوابگاه':
        setFoodPlace('خوابگاه')
        break
      case 'مرکزی':
        setFoodPlace('مرکزی')
        break
      default:
        setFoodType(undefined)
    }
  }

  const handleFoodType = (type: FoodTypes) => {
    switch (type) {
      case 'قیمه':
        setFoodType('قیمه')
        break
      case 'مرغ':
        setFoodType('مرغ')
        break
      default:
        setFoodType(undefined)
    }
  }

  return (
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
      <div className={styles['exchange_food_options__buttons']}>
        <button onClick={() => handleFoodOptions('تبادل')} className={`button unselected ${foodOption === "تبادل" ? "selected" : null}`}>تبادل</button>
        <button onClick={() => handleFoodOptions('درخواستی')} className={`button unselected ${foodOption === "درخواستی" ? "selected" : null}`}>درخواستی</button>
        <button onClick={() => handleFoodOptions('واگذاری')} className={`button unselected ${foodOption === "واگذاری" ? "selected" : null}`}>واگذاری</button>
      </div>
      <div className={styles['food_options']}>
        <p>غذات چیه؟</p>
        <button onClick={() => handleFoodType('قیمه')} className={`button unselected ${foodType === "قیمه" ? "selected" : null}`}>قیمه</button>
        <button onClick={() => handleFoodType('مرغ')} className={`button unselected ${foodType === "مرغ" ? "selected" : null}`}>مرغ</button>
      </div>
      <div className={styles['place_options']}>
        <p>غذات کجاست؟</p>
        <button onClick={() => handleFoodPlace('مرکزی')} className={`button unselected ${foodPlace === "مرکزی" ? "selected" : null}`}>سلف مرکزی</button>
        <button onClick={() => handleFoodPlace('خوابگاه')} className={`button unselected ${foodPlace === "خوابگاه" ? "selected" : null}`}>سلف خوابگاه</button>
      </div>
      <div className={styles['code']}>
        <p>کد غذات چیه؟</p>
        <input ref={codeRef} type="number" maxLength={6} />
      </div>
    </div>
  )
}
export default HomePage
