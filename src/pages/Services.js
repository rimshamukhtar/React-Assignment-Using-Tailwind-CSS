import React from 'react'

const Services = () => {
  return (
    <div className="w-1/2 ml-64 mt-9 ">
    <div className='flex  justify-center items-center h-96 flex-wrap gap-3'>
      <div className='w-52 h-44 bg-slate-300 rounded-lg'>
        <h1 className='pl-2 font-serif font-extrabold text-2xl text-sky-950'>Accessories</h1>
        <p className='p-2 font-serif font-thin'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nemo quaerat iste laudantium rerum ullam reprehenderit cupiditate.</p>
      </div>
      <div className='w-72 h-44 '>
      <img src='/service pic1.jpg' alt='services pic' width={300} height={300} className=' h-44 rounded-lg '/>
      </div>
      <div className='w-72 h-44'>
      <img src='/service pic2.jpg' alt='services pic' width={300} height={300} className='h-44 rounded-lg '/>
      </div>
      <div className='w-52 h-44 bg-slate-300 rounded-lg'>
        <h1 className='pl-2 font-serif font-extrabold text-2xl  text-sky-950'>Free Support</h1>
        <p className='p-2 font-serif font-thin '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nemo quaerat iste laudantium rerum ullam reprehenderit cupiditate.</p>
      </div>
    </div>
    </div>
  )
}

export default Services

