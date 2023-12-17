import React, { useState } from 'react'
import BlogCard from './BlogCard';
import { latestBlogs } from './latestBlogs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { twMerge } from 'tailwind-merge';
import useScrollReset from 'hooks/useScrollReset'

const BlogWrapper = ({ children }) => {
    const [startSliceIndex, setStartSliceIndex] = useState(0);

    const handleBlogSwipe = (indexAddition) => {
        const newIndex = startSliceIndex + indexAddition;
        if (newIndex < 0 || newIndex >= latestBlogs.length - 1) return
        setStartSliceIndex(newIndex)
    }


    return (
        <div className='flex flex-col items-center max-w-[1366px]'>
            {children}

            {/* Tu van mien phi */}
            <div>

            </div>

            {/* Bai viet moi nhat */}
            <div className='w-full my-[120px] justify-center items-center flex flex-col'>
                <div className='w-[1200px] justify-center items-center flex flex-col'>
                    <div className="w-full flex flex-row justify-between">
                        <div className='text-[48px] font-light'><span className='font-bold'>Bài viết</span> mới nhất</div>
                        <div>
                            <button
                                onClick={() => handleBlogSwipe(-3)}
                                className=
                                {twMerge('w-[54px] h-[52px] bg-[#1b365d] rounded-l-full text-white  border-r-[2px] border-white border-opacity-40',
                                    startSliceIndex <= 0 ? 'cursor-default text-opacity-20' : 'cursor-pointer'
                                )}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} className={
                                    twMerge('w-4 h-4'
                                    )
                                } />
                            </button>
                            <button
                                onClick={() => handleBlogSwipe(3)}
                                className=
                                {twMerge('w-[54px] h-[52px] bg-[#1b365d] rounded-r-full text-white  border-white border-opacity-40',
                                    startSliceIndex >= latestBlogs.length - 3 ? 'cursor-default text-opacity-20' : 'cursor-pointer'
                                )}>
                                <FontAwesomeIcon icon={faChevronRight} className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                    <div className="w-full mt-[40px] grid grid-cols-3 gap-3">
                        {
                            // take 3 latest blogs
                            latestBlogs.slice(startSliceIndex, startSliceIndex + 3).map((blog, index) => (
                                <div key={index} className='w-fit flex items-center m-auto'>
                                    <BlogCard img={blog.img} title={blog.title} desc={blog.desc} path={blog.path} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogWrapper;