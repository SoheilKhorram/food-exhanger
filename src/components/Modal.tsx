import { useEffect } from "react"
import ReactDOM from "react-dom"

import styles from "./Modal.module.css"

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
    className?: string
    width?: string
}

const Modal = ({ children, onClose, className, width }: ModalProps) => {
    useEffect(() => {
        document.body.classList.add("overflow-hidden")

        return () => { document.body.classList.remove("overflow-hidden") }
    }, [])

    return ReactDOM.createPortal(
        <div
            className={`${styles["modal"]} ${className}`}
            onMouseDown={onClose}
            onMouseUp={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={styles["modal__background"]} ></div>
            <div className={styles["modal__content-container"]}>
                <div
                    className={styles["modal__content"]}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    style={{ width: width }}
                >
                    {children}
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container") as Element
    )
}
export default Modal