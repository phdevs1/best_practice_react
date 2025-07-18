import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "./Context/UseModalContext" 
import "./Modal.css"

interface Props {
  children: React.ReactNode
}

export const Modal = ({ children }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null)
    // const { state, setState } = useState(false)
    const { state, setState } = useModalContext()

    const closeModal = () => {setState(false)}

    const modalRoot = document.getElementById("modal")

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
    }
    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setState(false)
        }
      }
      if (state) {
        document.addEventListener("keydown", handleEsc)
      }
      return () => {
        document.removeEventListener("keydown", handleEsc)
      }
    }, [state, setState])

    if (!state || !modalRoot) {
      return null
    }
    // children: what is rendered
    // container: where the children is rendered
    // createPortal(children, container)
    // return createPortal(children, container)
    return createPortal(
      <div className="overlay" onClick={closeModal}>
        <div className="modal" onClick={handleContentClick} ref={modalRef}>
          {children}
          <button className="close-button" onClick={closeModal}>
            close
          </button>
        </div>
      </div>,
      modalRoot
    )
}