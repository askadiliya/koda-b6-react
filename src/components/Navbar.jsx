import { GiHamburgerMenu } from "react-icons/gi"; 
import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <header className="flex h-16   bg-black/70 backdrop-blur-md border-b border-white/10  "> 
        <div className="flex items-center p-5 gap-3">
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
          <GiHamburgerMenu  className="text-white text-3xl"/>
        </div>

      </header>
    </div>
  )
}

export default Navbar