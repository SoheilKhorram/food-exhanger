import { useEffect, useRef } from "react"
import styles from "./HomePage.module.css"
import lottie from 'lottie-web';
import GuyAnim from "../guy.json"

const HomePage = () => {
    const container = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (container.current) {
            lottie.loadAnimation({
                animationData: GuyAnim,
                autoplay: true,
                container: container.current,
                loop: true,
                renderer: "svg",
            })
        }
    }, [])
    
    return (
        <div>
            <div className={styles["exchange_food_options__buttons"]}>
                <button>درخواستی</button>
                <button>واگذاری</button>
                <button>تبادل</button>
            </div>
            <div ref={container} id="animation-container"></div>
        </div>
    )
}
export default HomePage