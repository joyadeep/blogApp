import React from 'react'

const Blog = () => {
  return (
    <div className='bg-slate-200 rounded-md shadow-lg p-2 hover:-translate-y-2 hover:duration-300 duration-300 hover:bg-slate-300'>
        <div className='font-semibold text-xl'>React js : how to start with it ?</div>
        <div className='flex flex-row justify-between items-center my-1'>
            <div className=' text-md text-green-700 font-medium '>Joyadeep</div>
            <div className='text-sm'>{new Date().toDateString()}</div>
            <div className='bg-sky-400 text-white font-semibold text-sm rounded-full px-2 py-1'>technology</div>
        </div>
        <img src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blog title " className='object-cover' />
        <div className='text-justify text-sm'>
            React is one of the most popular UI library in the market developed by facebook. It is a open source project...
        </div>
    </div>
  )
}

export default Blog