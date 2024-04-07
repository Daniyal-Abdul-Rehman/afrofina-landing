import React from 'react'
import { Image } from '@/components/atoms'
import { SignInForm } from '@/components/organisms'
export default function SignIn() {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 h-screen bg-white'>
            <SignInForm />
            <div className='w-full lg:block hidden h-screen object-cover rounded-l-[50px]  shadow-md ' style={{ backgroundImage: `url('/auth/signin.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            
            </div>
        </div>
    )
}
