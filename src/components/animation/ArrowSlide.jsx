import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ArrowSlide = () => {
  return (

    <div
      className='bg-primary overflow-hidden w-[40px] h-[40px] flex items-center justify-center rounded-full text-white transform origin-center'
    >
      <div className='group-hover:translate-x-20 duration-500 transition-all flex flex-row gap-x-16'>
        <FontAwesomeIcon icon={faChevronRight} className='text-white w-4 h-4 ' />
        <FontAwesomeIcon icon={faChevronRight} className='text-white w-4 h-4 ' />
        <FontAwesomeIcon icon={faChevronRight} className='text-white w-4 h-4 ' />
      </div>
    </div>
  )
}

export default ArrowSlide