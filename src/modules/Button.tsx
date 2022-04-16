import React from 'react'

interface Ibutton{
    title:string;
}

const Button:React.FC<Ibutton> = ({title}) => {
  return (
    <button type='submit' className='bg-purple-500 text-white px-2 py-1 text-xl rounded'>{title}</button>
  )
}

export default Button