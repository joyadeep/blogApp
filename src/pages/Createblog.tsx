import React from 'react'
import Button from '../modules/Button'
import Input from '../modules/Input'

const Createblog = () => {
  return (
    <div className='w-1/3 h-screen text-center flex justify-center items-center flex-col mx-auto'>
      {/* <div> */}
      <form className='bg-slate-100 py-2 rounded'>
        <div className='text-4xl font-semibold mb-2 text-slate-700'>Create Post</div>
        <Input type='text' placeholder='Enter Title...'/>
        <textarea placeholder='enter your description' className='resize-none w-11/12 px-2 py-1 h-40 mb-2 text-lg outline-none rounded-sm border border-slate-300'/>
        <input type="file" accept='image/*' />
        <Button title='Create'/>
      </form>
      {/* </div> */}
    </div>
  )
}

export default Createblog