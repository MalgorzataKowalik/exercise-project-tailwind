import { useRef, useState } from "react";
import Input from "./Input";
import { isNotEmptyString, isDateFromPast } from "./utils/utils";
import Modal from "./Modal";

export default function NewProject({onAddNewProject, onCancelAddProject, ...props}) {

  const modalRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const dateRef = useRef()

  const [modalMessage, setModalMessage] = useState('')

  const onSaveProject = () => {
    const enteredTitle = titleRef.current.value
    const enteredDescription = descriptionRef.current.value
    const enteredDate = dateRef.current.value

    if (!isNotEmptyString(enteredTitle) || !isNotEmptyString(enteredDescription) || !isNotEmptyString(enteredDate)) {
      setModalMessage('Please make sure you provide a valid value for every input field')
      modalRef.current.open()
      return
    }

    if (isDateFromPast(enteredDate)) {
      setModalMessage('Please make sure you provide a valid due date')
      modalRef.current.open()
      return
    }

    onAddNewProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate
    })
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-gray-700 text-xl font-bold mt-2">Invalid input</h2>
        <p className="my-4">{modalMessage}</p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button 
              onClick={onCancelAddProject}
              className="text-[#7918F2] hover:text-[#4801FF]">
                Cancel
            </button>
          </li>

          <li>
            <button
              onClick={onSaveProject}
              className="px-6 py-2 rounded-md bg-[#7918F2] text-stone-50 hover:bg-[#4801FF]">
                Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={titleRef} isTextArea={false} type="text"/>
          <Input label="Description" ref={descriptionRef} isTextArea={true}/>
          <Input label="Due Date" ref={dateRef} isTextArea={false} type="date"/>
        </div>
      </div>
    </>

  )
}