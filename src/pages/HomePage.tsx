import Lottie from 'lottie-react'

import { useEffect, useState } from 'react'
import ManAnimation from '../assets/man.json'
import WomanAnimation from '../assets/woman.json'
import Exchange from '../components/Exchange'
import Requested from '../components/Requested'
import Transfer from '../components/Transfer'
import styles from './HomePage.module.css'

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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const userId = urlParams.get('userId')
    const name = urlParams.get('name')
    const username = urlParams.get('username')

    localStorage.setItem('userId', userId as string)
    localStorage.setItem('name', name as string)
    localStorage.setItem('username', username as string)
  }, [])


  return (
    <>
      <div className={styles['home-page']}>
        <section className={styles['man_or_woman']}>
          <div
            className={styles['man_or_woman--man']}
            onClick={() => setIsMan(true)}
          >
            <Lottie
              animationData={ManAnimation}
              autoPlay={true}
              loop={true}
              initialSegment={[35, 110]}
              style={{ zIndex: 10, position: 'relative' }}
            />
            <div
              className={`${styles['man_or_woman--woman-border']} ${isMan === false ? styles['woman-border-color'] : null
                } `}
            />
          </div>
          <div
            className={styles['man_or_woman--woman']}
            onClick={() => setIsMan(false)}
          >
            <Lottie
              animationData={WomanAnimation}
              autoPlay={true}
              loop={true}
              initialSegment={[35, 110]}
            />
            <div
              className={`${styles['man_or_woman--man-border']} ${isMan === true ? styles['man-border-color'] : null
                } `}
            />
          </div>
        </section>
        <div className={styles['code_options']}>
          <button
            onClick={() => handleFoodOptions('exchange')}
            className={`button unselected ${foodOption === 'exchange' ? 'selected' : null
              }`}
          >
            تبادل
          </button>
          <button
            onClick={() => handleFoodOptions('requested')}
            className={`button unselected ${foodOption === 'requested' ? 'selected' : null
              }`}
          >
            درخواستی
          </button>
          <button
            onClick={() => handleFoodOptions('transfer')}
            className={`button unselected ${foodOption === 'transfer' ? 'selected' : null
              }`}
          >
            واگذاری
          </button>
        </div>
        {foodOption === 'exchange' && <Exchange isMan={isMan} />}
        {foodOption === 'requested' && <Requested isMan={isMan} />}
        {foodOption === 'transfer' && <Transfer isMan={isMan} />}
        {/* <Modal onClose={() => { }}>
          somthing
        </Modal> */}
      </div>
    </>
  )
}
export default HomePage
