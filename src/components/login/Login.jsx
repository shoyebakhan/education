import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.render(1)
  }

  return (
    <div className='w-[500px] py-10 px-4 rounded-lg shadow-xl shadow-gray-900 flex flex-col items-center justify-center min-w-[290px] gap-2'>
      <form action='/api/auth/login' onSubmit={handleSubmit} className='w-[90%] flex flex-col gap-4'>
        <Input label="Username" placeholder="Enter your username" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} autoFocus='true' />
        <Input label='Password' placeholder='Enter your password' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {/* <div className='text-right text-sm'>
          <p>Don't have an account? <span className='text-fuchsia-500 font-medium underline underline-offset-2 hover:text-fuchsia-600 transition-all duration-150'><Link to="/signup">Sign Up</Link></span></p>
        </div> */}
        {/* <div className='w-full'>
          <Button type='submit' className='login-btn bg-sky-500 rounded-lg w-full p-2 hover:bg-sky-600 text-gray-300' btnName={'login'} />
        </div> */}
      </form>
    </div>
  )
}

export default Login
