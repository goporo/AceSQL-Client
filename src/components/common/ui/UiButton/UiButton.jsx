import React from 'react'

const UiButton = ({ children,
  size = 'medium',
  icon,
  onClick,
  type = 'primary',
  buttonClassName,
  ...props }) => {
  return (
    <button
      className={`flex min-w-[120px] flex-row items-center justify-center py-0 px-[16px] text-[14px] font-bold ${buttonClassName}
      ${size === 'medium'
          ? 'min-w-[160px]'
          : size === 'big'
            ? 'w-full'
            : 'w-fit'
        }  
      ${type === 'primary'
          ? 'h-[40px] bg-blue-primary text-white'
          : type === 'secondary'
            ? 'h-[40px] bg-gray-300'
            : 'h-[32px] bg-blue-primary text-white'
        } 
      hover:opacity-[93%]`}
      onClick={onClick}
      {...props}
    >
      {icon && (
        <span className="mr-[8px] max-h-[20px] max-w-[20px]">{icon}</span>
      )}
      {children && <span className="">{children}</span>}
    </button>
  );
}

export default UiButton