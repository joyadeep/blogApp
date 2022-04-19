import React from 'react'

interface Itextarea{
    placeholder?:string;
    value?:string;
    name?:string;
    handleChanges?:(event:React.ChangeEvent<HTMLTextAreaElement>)=>void;
}

const Textarea:React.FC<Itextarea> = ({placeholder,handleChanges,name,value}) => {
  return (
    <textarea placeholder={placeholder} name={name} value={value} onChange={handleChanges} className='resize-none w-11/12 px-2 py-1 h-40 mb-2 text-lg outline-none rounded-sm border border-slate-300'/>
        
  )
}

export default Textarea