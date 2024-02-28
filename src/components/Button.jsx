export default function Button({style, children, ...props}) {
  const classes = style === "color" ?
    "px-4 py-2 text-xs md:text-base rounded-md border border-purple text-purple hover:border-violet hover:text-violet" :
    "px-4 py-2 text-xs md:text-base rounded-md border border-[#fafaf9aa] text-[#fafaf9aa] hover:text-stone-50 hover:border-stone-50 "

  return <button className={classes} {...props}>{children}</button>
}