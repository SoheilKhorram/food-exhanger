import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef } from 'react';
import CircleAnim from '../assets/circle.json';
import GuyAnim1 from '../assets/man2.json';
import WomanAnim1 from '../assets/woman2.json';
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
        animationData={GuyAnim1}
        autoPlay={true}
        loop={true}
        initialSegment={[35, 110]}
      />
      <div style={{ position: 'relative' }}>
        <Lottie
          lottieRef={container}
          animationData={WomanAnim1}
          autoPlay={true}
          loop={true}
          initialSegment={[35, 110]}
        />
        <Lottie
          lottieRef={container}
          animationData={CircleAnim}
          autoPlay={true}
          loop={true}
          style={{ position: 'absolute', top: 0, color: 'red' }}
        />
      </div>
    </div>
  );
};
export default HomePage;
