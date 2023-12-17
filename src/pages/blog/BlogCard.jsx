import React from 'react'

import { Link } from 'react-router-dom'
import UiImage from 'components/common/ui/UiImage/UiImage'
import ArrowSlide from 'components/animation/ArrowSlide'

const BlogCard = ({ img, title, subTitle, desc, path }) => {
  return (
    <Link
      to={path}
      className='relative group'
    >
      <div className=' w-[366px] h-[546px] overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-200'>
        <UiImage src={img} alt={title} width={366} height={244} />

        {subTitle && <div className='absolute max-w-[200px] overflow-hidden text-ellipsis max-h-[58px] top-0 right-0 font-bold text-[14px] p-[14px] rounded-lg bg-white'>{subTitle}</div>}
        <div className="px-10 pt-[30px] pb-[36px]">
          <div className=' font-semibold text-[24px] leading-8 text-ellipsis overflow-hidden max-h-[66px]'>{title}</div>
          <p className='font-light mt-3 text-ellipsis overflow-hidden h-[120px]'>{desc}</p>
        </div>
      </div>
      <div className=' absolute right-8 -bottom-5'>
        <ArrowSlide />
      </div>
    </Link>
  )
}

export default BlogCard