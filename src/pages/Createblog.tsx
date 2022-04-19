import React, { useState } from 'react'
import Button from '../modules/Button'
import Input from '../modules/Input'
import Textarea from '../modules/Textarea'

const Createblog = () => {
  const[create,setCreate]=useState({
    title:'',
    description:''
  })

  const handleChanges=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    const{name,value}=e.target;
    setCreate({...create,[name]:value})    
  }

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=e.target;
    setCreate({...create,[name]:value})    
  }

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(create);
    
    setCreate({ title:'',description:''});
  }

  return (
    <div className='w-1/3 h-screen text-center flex justify-center items-center flex-col mx-auto'>
      
      <form className='bg-slate-100 py-2 rounded shadow-xl' onSubmit={handleSubmit}>
        <div className='text-4xl font-semibold mb-2 text-slate-700'>Create Post</div>
        <Input type='text' placeholder='Enter Title...' value={create.title} name="title" handleChange={handleChange} />
        <Textarea placeholder='enter description ...' name="description" value={create.description} handleChanges={handleChanges} />
       <input type="file" accept='image/*' />
        <Button title='Create'/>
      </form>
    </div>
  )
}

export default Createblog