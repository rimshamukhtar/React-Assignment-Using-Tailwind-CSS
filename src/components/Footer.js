import React from 'react'

const Footer = () => {
  return (
    
      <footer className="bg-slate-300 rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Rimsha</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-sky-950 dark:text-gray-400 sm:mt-0">
    <li>
            <a href="/" className="hover:underline me-4 md:me-6">Home</a>
        </li>
       
        <li>
            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="/services" className="hover:underline me-4 md:me-6">Services</a>
        </li>
     
        <li>
            <a href="/contactus" className="hover:underline">Contact Us</a>
        </li>
    </ul>
    </div>
</footer>
    
  )
}

export default Footer
