import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center m-4 h-screen'>
        <div className='  m-4 flex flex-col w-96 mb-20'>
            <h1 className='font-serif text-4xl font-bold text-sky-950'>Find Your Dream Car</h1>
            <p className='font-serif font-thin p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nemo quaerat iste laudantium rerum ullam, reprehenderit cupiditate 
            voluptatem pariatur</p>
            <button className='text-center font-serif text-slate-700 border-2 w-28 m-4 rounded-lg font-bold p-1 bg-slate-300 border-sky-900 hover:bg-slate-500'>Read more</button>
        </div>
        <div className=' m-4'>
            <img src='/Home pic 2.webp' alt='Herosection pic' width={400} height={400} className='w-10/12 ml-40 '/>
        </div>
      
    </div>
  )
}

export default Home
