import { HiShoppingCart } from "react-icons/hi"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { GiHamburgerMenu } from "react-icons/gi"; 
import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <header className="flex h-16 w-full justify-between  bg-black/70 backdrop-blur-md border-b border-white/10 px-5  "> 
        <div className="flex items-center  gap-3">
          <div>
          <img src="/img/LogoWhite.png" alt="" />
          </div>
          <div>
            <ul className="flex text-white">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Product</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="hidden">
            <AiOutlineSearch />
            <HiShoppingCart />
          </div>
          <div className="hidden">
            <ul>
              <li>
                <Link>SignIn</Link>
              </li>
              <li>
                <Link>SignUp</Link>
              </li>
              
            </ul>
          </div>
          <div>
          <GiHamburgerMenu  className="text-white text-3xl "/>
          </div>
        </div>

      </header>
    </div>
  )
}

export default Navbar