import { HiShoppingCart } from "react-icons/hi"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { GiHamburgerMenu } from "react-icons/gi"; 
import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <header className="flex h-16 w-full justify-between  bg-black/70 backdrop-blur-md border-b border-white/10 px-5 md:px-15 "> 
        <div className="flex items-center  gap-3">
          <div>
          <img src="/img/LogoWhite.png" alt="coffe-akh" />
          </div>
          <div>
            <ul className="hidden  md:flex gap-5 text-white">
              <li>
                <Link className="hover:underline hover:decoration-orange-500 decoration-2 underline-offset-4 cursor-pointer">Home</Link>
              </li>
              <li>
                <Link className="hover:underline hover:decoration-orange-500 decoration-2 underline-offset-4 cursor-pointer">Product</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden md:flex md:gap-5">
            <AiOutlineSearch className="text-white text-3xl"/>
            <HiShoppingCart className="text-white text-3xl"/>
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-5">
              <li className="bg-amber-400 px-5 py-3 rounded">
                <Link>SignIn</Link>
              </li>
              <li className="bg-amber-400 px-5 py-3 rounded">
                <Link>SignUp</Link>
              </li>
              
            </ul>
          </div>
          <div>
          <GiHamburgerMenu  className="text-white text-3xl md:hidden"/>
          </div>
        </div>

      </header>
    </div>
  )
}

export default Navbar