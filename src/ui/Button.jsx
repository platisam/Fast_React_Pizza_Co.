const Button = ({children, disabled}) => {
  return (
    <button disabled={disabled} className="bg-yellow-400 uppercase 
    font-semibold tracking-wide text-stone-800 py-3 px-4 inline-block 
    rounded-full hover:bg-yellow-300 transition-colors duration-300 
    focus:outline-none focus:ring focus:ring-yellow-300 
  focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 
    disabled:cursor-not-allowed sm:px-6 sm:py-4">
      {children}
    </button>
  )
}
export default Button