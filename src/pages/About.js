import React from 'react'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='flex justify-center items-center m-4 h-screen'>
      <div className=' w-1/2 mb-56'>
      <img src='/About pic.webp' alt='Herosection pic' width={300} height={300} className='w-96 ml-24 bg-transparent shadow-md shadow-slate-400 rounded-lg '/>
      
      </div>
      <div className="w-96 flex flex-col bg-slate-300 p-4 rounded-lg ">
        <h1 className='font-serif text-2xl font-bold pb-2 text-sky-950'>What People say About Us</h1>
        <p className='font-serif font-thin text-gray-600 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nemo quaerat iste laudantium rerum ullam, reprehenderit cupiditate 
        voluptatem pariatur laudantium rerum ullam, reprehenderit cupiditate 
        voluptatem pariatur</p>
        <button className='text-center text-slate-700 border-2 w-28 m-4 rounded-md font-bold p-1 bg-slate-300 border-sky-900 hover:bg-slate-500 font-serif'>Learn more</button>
        
      </div>
    </div>

  )
}

export default About
