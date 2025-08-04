import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <>
   <footer className="bg-slate-800 text-white py-10 ">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left p-20  ">
    
    
    <div className='text-center'>
      <h1 className="text-2xl font-bold mb-2">LOCATION</h1>
      <p>2215 John Daniel Drive</p>
      <br />
      <p>Clark, MO 65243</p>
    </div>

<div className="flex flex-col items-center text-white">
  <h2 className="text-2xl font-bold mb-4">AROUND THE WEB</h2>
  
  <div className="flex gap-4">
    <Link to="#" className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
      <i className="fab fa-facebook-f"></i>
    </Link>
    <Link to="#" className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
      <i className="fab fa-twitter"></i>
    </Link>
    <Link to="#" className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
      <i className="fab fa-linkedin-in"></i>
    </Link>
    <Link to="#" className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
      <i className="fab fa-dribbble"></i>
    </Link>
  </div>
</div>

    
    <div className='text-center'>
      <h1 className="text-2xl font-bold mb-2">ABOUT FREELANCER</h1>
      <p>
        Freelancer is a free to use, licensed Bootstrap theme
        created by Route
      </p>
    </div>
  </div>


 
</footer>
 <div className="text-center  text-sm text-gray-400 bg-slate-600 p-10">
    Copyright © Your Website 2021
  </div>
   </>


  )
}
