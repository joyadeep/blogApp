import React from 'react'

interface Iinput{
    placeholder:string;
    type:string;
}

const Input:React.FC<Iinput> = ({placeholder,type}) => {
  return (
    <input type={type} placeholder={placeholder} className='border border-slate-300 rounded-sm outline-none pl-2 h-10 w-11/12 text-xl mb-2 py-5' />
  )
}

export default Input