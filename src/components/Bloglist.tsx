import React from 'react'
import Blog from './Blog'

const Bloglist = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>

    </div>
  )
}

export default Bloglist