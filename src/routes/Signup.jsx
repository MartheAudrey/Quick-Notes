import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Notebook } from 'lucide-react'

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  return (
    <div className='max-w-md mx-auto mt-10'>
      <div className='bg-white rounded-lg shadow-md p-8'>
        <div className='flex flex-col items-center mb-6'>
          <Notebook className='h-12 w-12 text-indigo-600 mb-2'/>
          <h1 className='text-2xl font-bold text-gray-900'>Welcome back!</h1>
          <p className='text-gray-600'>
            Sign in to access your notes.
          </p>
          <form>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
              <input id='email' type='email' value={email} className='' onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo500" placeholder="you@example.com" required/>
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
              <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo500"  placeholder="*********" required/>
            </div>
            <div className='mb-4'>
              <label htmlFor='password-confirm' className='block text-sm font-medium text-gray-700 mb-1'>Confirm password</label>
              <input id='password-confirm' type='password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo500"  placeholder="*********" required/>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed" type='submit'>Create Account</button>
          </form>
          <div className='mt-6 text-center text-sm'>
            <p className='text-gray-600'>Already have an account yet? <Link to="/login" className='text-indigo-600 hover:text-indigo-800 font-medium'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup