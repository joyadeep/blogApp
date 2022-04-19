import React from 'react'
import Blog from './Blog'

const Bloglist = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>

    </div>
  )
}

export default Bloglist