import React, { useState } from 'react'

export const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler =(e)=>{
        e.preventDefault();
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='py-8 px-12 border-emerald-400 border-2 w-1/3 rounded-lg'>
            <form className='flex flex-col gap-10' onSubmit={(e)=>{submitHandler(e)}} >
            <h1 className='text-xl font-semibold'>Login</h1>
                <input required type="email" placeholder='Enter your email...' autoFocus className='border-2 border-emerald-600 bg-transparent rounded-full py-2 px-5 text-l'
                   value={email} onChange={(e) => { setEmail(e.target.value)}}
                />
                <input type="password" placeholder='Enter your password...' className='border-2 border-emerald-600 bg-transparent rounded-full py-2 px-5 text-l'
                    value={password} onChange={ (e) => {setPassword(e.target.value)}}
                />
                <button className='border-2 border-emerald-600 rounded-full py-2 hover:bg-emerald-600 transition-all duration-200 font-semibold mb-3'>Login</button>
            </form>
        </div>
    </div>
  )
}
