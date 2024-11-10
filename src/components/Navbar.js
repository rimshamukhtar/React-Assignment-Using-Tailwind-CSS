import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className='flex justify-between items-center p-4 bg-sky-950 text-gray-300 font-serif'>
    <a href='#' className='hover:underline font-bold text-2xl'>DriveHub</a>
    <div className='flex gap-4 font-thin'>
     <Link to="/"><a href='#' className='hover:underline'>Home</a></Link>
     <Link to="/about"><a href='#' className='hover:underline'>About US</a></Link>
     <Link to="/services"><a href='#' className='hover:underline'>Services</a></Link>
     <Link to="/contactus"><a href='#' className='hover:underline'>Contact Us</a> </Link>  
    </div>
      
    </div>
  )
}

export default Navbar