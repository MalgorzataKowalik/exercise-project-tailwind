import { useRef } from "react"

export default function NewTask({onAddTask}) {
  const inputRef = useRef()

  const onAddButton = () => {
    onAddTask(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (
    <div className="flex items-center gap-4">
      <input ref={inputRef} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
      <button onClick={onAddButton} className="text-[#7918F2] hover:text-[#4801FF]">+ Add task</button>
    </div>
  )
}