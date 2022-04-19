import { useState } from 'react'
import Button from '../modules/Button'
import Input from '../modules/Input'

const Loginform:React.FC = () => {
  const[user,setUser]=useState({username:'',password:''});
  
  const handleChange=(e:React.FormEvent<HTMLFormElement>)=>{
    const name=e.target;
    console.log(name);
    
  }

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("form submitted");
    
  }
  return (
    <div className='border pt-2 bg-slate-50 border-slate-100 rounded-md shadow-lg shadow-slate-300 w-1/3 text-center'>
        <h1 className='text-4xl text-slate-700 font-semibold'>Login</h1>
        <form className='py-5' onSubmit={handleSubmit}>
         
            <Input placeholder="email or username" type="text" value={user.username} handleChange={(e)=>{handleChange(e)}} name="username"  />
            <Input placeholder='password' value={user.password} name="password" type="password"/>
            <div className='flex flex-row text-center justify-between mb-3 w-11/12 mx-auto'> 
                <div>forgot password</div>
                <div>signup</div>
            </div>

            <Button title="Login" />
           
        </form>
    </div>
  )
}

export default Loginform