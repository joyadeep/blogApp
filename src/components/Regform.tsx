import React, { useState } from 'react'
import Button from '../modules/Button'
import Input from '../modules/Input'

const Regform = () => {

  const[form,setForm]=useState({fullname:'',email:'',username:'',password:'',confirmpw:''})

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setForm({fullname:'',email:'',username:'',password:'',confirmpw:''});
  }


  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=event.target;
    setForm({...form,[name]:value})
  }

  return (
    <div className='border pt-2 bg-slate-50 border-slate-100 rounded-md shadow-lg shadow-slate-300 w-1/3 text-center'>
    <h1 className='text-4xl text-slate-700 font-semibold'>Register</h1>
    <form className='py-5' onSubmit={handleSubmit}>
        <Input placeholder='fullname' type="text" value={form.fullname} name="fullname" handleChange={handleChange} />
        <Input placeholder="email" type="text" value={form.email} name="email" handleChange={handleChange} />
        <Input placeholder='username' type='text' value={form.username} name="username" handleChange={handleChange} />
        <Input placeholder='password' type="password" value={form.password} name="password" handleChange={handleChange} />
        <Input placeholder='confirm password' type="password" value={form.confirmpw} name="confirmpw" handleChange={handleChange} />
        <div className='flex flex-row text-center justify-between mb-3 w-11/12 mx-auto'> 
            <div>login</div>
        </div>

        <Button title="Signup" /> 
    </form>
</div>
  )
}

export default Regform