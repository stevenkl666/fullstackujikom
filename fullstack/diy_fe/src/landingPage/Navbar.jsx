import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="bg-white w-full fixed  z-30 top-0 border-gray-200 shadow-lg">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-pink-500">
               JakartaFair
             </Link>          
     </div>
        <div className="hidden md:flex space-x-6">
             <Link to="/" className="text-gray-700 hover:text-pink-500 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-500 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-500 font-medium">
              Contact
            </Link>
         </div>
         <div className="hidden md:flex">
             <Link
               to="/login"
               className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
            >
               Admin Login
             </Link>
         </div>
      </div>
    </nav>
    
  </>
  
  )
}

export default Navbar