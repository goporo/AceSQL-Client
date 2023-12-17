import React from 'react'
import { twMerge } from 'tailwind-merge'

const UiLi = ({ children, className, ...props }) => {
    return (
        <div
            className={twMerge('flex flex-row items-start text-primary text-[18px]', className)}
            {...props}
        >
            <div className='flex mr-2 mt-2'>
                <div className='bg-primary w-2 h-2'></div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default UiLi