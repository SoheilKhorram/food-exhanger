import Lottie from 'lottie-react'

import ManAnimation from '../assets/man.json'
import WomanAnimation from '../assets/woman.json'
import styles from './HomePage.module.css'
import { useState } from 'react'
import Exchange from '../components/Exchange'
import Requested from '../components/Requested'
import Transfer from '../components/Transfer'
// import Modal from '../components/Modal'
import WebApp from '@twa-dev/sdk'

type FoodOptions = 'requested' | 'transfer' | 'exchange'

const HomePage = () => {
  const [isMan, setIsMan] = useState<boolean | undefined>(undefined)
  const [foodOption, setFoodOption] = useState<FoodOptions>('exchange')

  const handleFoodOptions = (option: FoodOptions) => {
    switch (option) {
      case 'requested':
        setFoodOption('requested')
        break
      case 'transfer':
        setFoodOption('transfer')
        break
      case 'exchange':
        setFoodOption('exchange')
        break
    }
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
          <button onClick={() => handleFoodOptions('exchange')} className={`button unselected ${foodOption === "exchange" ? "selected" : null}`}>تبادل</button>
          <button onClick={() => handleFoodOptions('requested')} className={`button unselected ${foodOption === "requested" ? "selected" : null}`}>درخواستی</button>
          <button onClick={() => handleFoodOptions('transfer')} className={`button unselected ${foodOption === "transfer" ? "selected" : null}`}>واگذاری</button>
        </div>
        {foodOption === 'exchange' && <Exchange />}
        {foodOption === 'requested' && <Requested />}
        {foodOption === 'transfer' && <Transfer />}
        {/* <Modal onClose={() => { }}>
          somthing
        </Modal> */}
        <div>Eruda is here</div>
        <div>{WebApp.initData.first_name || "soheil"}</div>
        <div>{WebApp.initData.photo_url || "URL"}</div>
      </div>
    </>
  )
}
export default HomePage
