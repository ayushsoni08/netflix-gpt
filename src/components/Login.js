import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="backgroud"
            />
        </div>
        <form className='absolute w-4/12 my-36 mx-auto right-0 left-0 p-12 bg-black bg-opacity-70 text-white'>
            <h1 className='font-bold text-3xl py-4'>Sign In</h1>
            <input 
                type="text" 
                placeholder='Email or mobile number' 
                className='p-5 my-2 w-full bg-gray bg-transparent border rounded-md' 
            />
            <input 
                type="password" 
                placeholder='Password' 
                className='p-5 my-2 w-full bg-gray bg-transparent border rounded-md' 
            />
            <button className='p-3 my-4 font-semibold bg-red-600 w-full rounded-md'>Sign In</button>
            <p className='py-4 font-semibold'>New to Netflix? Sign up now</p>
        </form>
    </div>
  )
}

export default Login