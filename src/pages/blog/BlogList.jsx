import React from 'react'
import { latestBlogs } from './latestBlogs'
import BlogCard from './BlogCard'

const BlogList = () => {
    return (
        <div className='items-center flex flex-col pb-[100px]'>
            <div className='w-[1366px] h-[400px] bg-[#e5eaef] -mt-12 '>
                <div className='flex flex-col items-center py-20'>
                    <div className="relative">
                        <div className='text-[20px] font-bold'>Blog Nhịp Sống Khỏe</div>
                        <div className='w-full h-[2px] bg-[#68737a] opacity-30 absolute -bottom-1'></div>
                    </div>
                    <h1 className='text-[48px]'>Bài viết nổi bật</h1>
                </div>
            </div>
            <div className='grid grid-cols-3 -mt-36 w-fit gap-x-9 gap-y-16'>
                {
                    latestBlogs.map((blog, index) => (
                        <BlogCard key={index} title={blog.title} subTitle={blog.subTitle} img={blog.img} desc={blog.desc} path={blog.path} />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogList