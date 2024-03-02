export default function Task({taskData, onDelete}) {
  return (
    <li className="py-1">
      <p className="inline px-1 text-wrap w-1">{taskData.text}</p>
      <button
        onClick={() => {onDelete(taskData)}}
        className="text-[12px] p-0.5 rounded-md border border-purple text-purple hover:border-violet hover:text-violet">
        delete
      </button>
    </li>
  )
}