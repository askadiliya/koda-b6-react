import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

function LoginPage() {
  return (
    <div className="grid grid-cols-6">
        <div className="col-span-2 w-full h-screen">
            <img className="w-full h-full object-cover" src="/src/assets/img/Register.png" alt="Register" />
        </div>
        <div className="col-span-4 flex flex-col justify-center items-center p-8">
            <div>
                <img src="" alt="" />
            </div>
         <form className="w-full " action="">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="text-white hover:bg-blue-700" text="Register">Login </Button>
         </form>
        </div>
    </div>
  )
}

export default LoginPage