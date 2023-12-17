import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'

const ButtonZoomShadow = ({ children, icon, onClick, className, iconClassName, ...props }) => {
  return (
    <button
      className={twMerge(
        'flex flex-row items-center justify-center h-[52px] w-fit min-w-[120px] py-0 px-[22px] pt-[10px] pb-[14px] rounded-full font-semibold text-white bg-primary whitespace-nowrap hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out',
        className,
      )}

      onClick={onClick}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} className={twMerge('w-fit', iconClassName)} />}
      {children}
    </button>
  )
}

export default ButtonZoomShadow