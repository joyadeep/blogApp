import React from 'react'
// import { isJSDocReadonlyTag } from 'typescript';

interface Iinput{
    placeholder?:string;
    type?:string;
    value?:string;
    handleChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
    name?:string;
    isComplete?:string;
    
}

const Input:React.FC<Iinput> = ({placeholder,type,value,handleChange,name,isComplete}) => {
  return (
    <input type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange}  className='border border-slate-300 rounded-sm outline-none pl-2 h-10 w-11/12 text-xl mb-2 py-5' autoComplete={isComplete} />
  )
}

export default Input