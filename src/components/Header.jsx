import React from 'react'

function Header() {
  return (
    <div>
      <header className="flex bg-black ">
        <div className="flex">
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Product</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="">SignIn</a>
                    </li>
                    <li>
                        <a href="">SignUp</a>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
