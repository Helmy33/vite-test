import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';




export default function NAvbar() {

  const [isScroll, setisScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleScroll() {
    console.log("test");


    if (window.scrollY > 10) {
      setisScroll(true);
    } else {
      setisScroll(false);
    }

  }
  window.addEventListener("scroll", handleScroll);
  return (
    <nav className={`bg-[#2C3E50] fixed start-0 right-0 top-0 h-20 z-50   transition-[padding] duration-300  text-white ${isScroll ? "py-4" : "py-8"
      }`}
    >
      <div className="container px-2 sm:px-0 flex items-center justify-between mx-auto">
        <div className="logo">
          <NavLink to='' className="text-3xl text-uppercase font-bold rounded-md  px-2 py-1 capitalize">start framework</NavLink>

        </div>
        <div className='hidden sm:block'>
          <ul className='flex item-center justify-center gap-4'>

            <li>
              <NavLink to="About" className="rounded-md font-bold px-2 py-1 capitalize">About</NavLink>
            </li>

            <li>
              <NavLink to="Portfolio" className="rounded-md font-bold  px-2 py-1 capitalize">portfolio</NavLink>
            </li>

            <li>
              <NavLink to="Contant" className="rounded-md font-bold  px-2 py-1 capitalize">contact</NavLink>
            </li>
          </ul>
        </div>
        <div className='block sm:hidden '>
          <button onClick={() => setIsOpen(!isOpen)}className='py-2 rounded-md border-2 border-black text-blue-900 text-3xl'>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`bg-[#2C3E50] sm:hidden transition-[padding] duration-300 px-4 
           ${isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
  }`}
>
          <ul className='flex flex-col gap-4 py-5 '>

            <li>
              <NavLink to="About" className="rounded-md  px-2 py-1 capitalize">About</NavLink>
            </li>

            <li>
              <NavLink to="Portfolio" className="rounded-md   px-2 py-1 capitalize">portfolio</NavLink>
            </li>

            <li>
              <NavLink to="Contant" className="rounded-md  px-2 py-1 capitalize">contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

