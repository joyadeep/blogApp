import Button from '../modules/Button'
import Input from '../modules/Input'

const Loginform:React.FC = () => {
  return (
    <div className='border pt-2 bg-slate-50 border-slate-100 rounded-md shadow-lg shadow-slate-300 w-1/3 text-center'>
        <h1 className='text-4xl text-slate-700 font-semibold'>Login</h1>
        <form className='py-5'>
         
            <Input placeholder="email or username" type="text"/>
            <Input placeholder='password' type="password"/>
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