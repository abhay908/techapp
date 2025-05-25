import React from 'react'

const IconBtn = ({
  text,
  onclick,
  children,
  disabled = false,
  outline = false,
  customClasses = "",
  type = "button",
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      type={type}
      className={`
        flex items-center justify-center gap-x-2 
        rounded-lg py-2.5 px-6 font-medium
        transition-all duration-200 focus:outline-none focus:ring-2 
        focus:ring-purple-500 focus:ring-offset-2
        ${
          outline
            ? "border border-purple-500 bg-transparent text-purple-500 hover:bg-purple-500/10 hover:shadow-sm"
            : disabled
            ? "bg-richblack-500 text-richblack-200 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md hover:from-purple-700 hover:to-blue-600 hover:shadow-lg"
        }
        ${customClasses}
      `}
      aria-disabled={disabled}
    >
      {children && (
        <span className={outline ? "text-purple-500" : disabled ? "text-richblack-200" : "text-white"}>
          {children}
        </span>
      )}
      {text && (
        <span className={outline ? "text-purple-500" : disabled ? "text-richblack-200" : "text-white"}>
          {text}
        </span>
      )}
    </button>
  )
}

export default IconBtn