import { forwardRef } from "react"

const Input = forwardRef(function Input({label, isTextArea, ...props}, ref) {
  const classes = "w-full p-1 border border-[#c9c9c9] rounded-md focus:outline-none focus:border-[#4801FF]"
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-[#6b6b6b]">{label}</label>
      {isTextArea ? <textarea ref={ref} {...props} className={classes}/> : <input ref={ref} {...props} className={classes}/>}
    </p>
  )
})


export default Input