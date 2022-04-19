import React from 'react'
import { isJSDocReadonlyTag } from 'typescript';

interface Iinput{
    placeholder:string;
    type:string;
    value?:string;
    handleChange?:(e:React.FormEvent<HTMLFormElement>)=>void;
    name?:string;
    
}

const Input:React.FC<Iinput> = ({placeholder,type,value,handleChange,name}) => {
  return (
    <input type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange} className='border border-slate-300 rounded-sm outline-none pl-2 h-10 w-11/12 text-xl mb-2 py-5' />
  )
}

export default Input