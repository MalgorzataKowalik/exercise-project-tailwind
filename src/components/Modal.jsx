import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = forwardRef(function Modal({children, buttonCaption}, ref) {
  const dialogRef = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal()
      }
    }
  })

  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog">
        <button className="mb-2 mt-4 px-6 py-2 rounded-md bg-[#7918F2] text-stone-50 hover:bg-[#4801FF]">{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"))
})

export default Modal