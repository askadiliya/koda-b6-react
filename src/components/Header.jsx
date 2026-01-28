import React from "react";

function Header() {
  return (
    <>
      <header className="bg-black flex justify-between items-center py-5 md:px-5 md:h-16">
        <section className="flex items-center px-4 md:px-8">
          <div className="flex items-center gap-5">
            <img src="/images/Logo.svg" alt="Logo" />
            <img src="/images/Frame.svg" alt="Frame" />
          </div>

          <div className="ml-6 md:ml-12">
            <nav>
              <ul className="hidden items-center gap-6">
                <li>
                  <a className="text-white hover:text-gray-300 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 transition">
                    Product
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section className="flex">
          <div className="flex gap-5">
            <img className="hidden md:hidden" src="/images/Search.svg" alt="" />
            <img src="/images/ShoppingCart.svg" alt="" />
            <img src="/images/togel.svg" alt="" />
          </div>
          <div className="ml-6 md:ml-12">
            <nav>
              <ul className="hidden md:hissen items-center gap-6">
                <li>
                  <a className="text-white" href="">
                    SignIn
                  </a>
                </li>
                <li>
                  <a className="text-white" href="">
                    SignUp
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
