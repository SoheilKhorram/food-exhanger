import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef } from 'react';

import ManAnimation from '../assets/man.json';
import WomanAnimation from '../assets/woman.json';
import styles from './HomePage.module.css';

const HomePage = () => {
  const container = useRef<LottieRefCurrentProps>(null);

  const handleClick = () => {
    container.current?.goToAndPlay(4);
  };

  useEffect(() => {
    container.current?.setSpeed(0.5);
  }, []);

  return (
    <div>
      <div className={styles['exchange_food_options__buttons']}>
        <button onClick={handleClick}>درخواستی</button>
        <button>واگذاری</button>
        <button>تبادل</button>
      </div>
      <Lottie
        lottieRef={container}
        animationData={ManAnimation}
        autoPlay={true}
        loop={true}
        initialSegment={[35, 110]}
      />
        <Lottie
          lottieRef={container}
          animationData={WomanAnimation}
          autoPlay={true}
          loop={true}
          initialSegment={[35, 110]}
        />
    </div>
  );
};
export default HomePage;
