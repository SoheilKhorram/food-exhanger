import Lottie from 'lottie-react'

import ManAnimation from '../assets/man.json'
import WomanAnimation from '../assets/woman.json'
import styles from './HomePage.module.css'
import { useState } from 'react'

type FoodOptions = 'درخواستی' | 'واگذاری' | 'تبادل'


const HomePage = () => {
  const [isMan, setIsMan] = useState<boolean | undefined>(undefined)
  const [foodOption, setFoodOption] = useState<FoodOptions | undefined>(undefined)

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
    </div>
  )
}
export default HomePage
