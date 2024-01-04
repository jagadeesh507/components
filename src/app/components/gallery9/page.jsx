import React from 'react'

const Gallery9 = () => {
  return (
    <div className='flex flex-col text-center gap-6 mt-24'>
      <div className='flex flex-col gap-10 '>
      <p className='text-5xl font-bold'>Image Gallery</p>
      <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='grid md:grid-cols-2 grid-rows-3 gap-3'>
      <img className=' ' src="../empty_background.svg"/>
      <div className='grid grid-cols-2  gap-3'>
        <img className='h-82' src="../empty_background.svg"/>
        <img className='h-82' src="../empty_background.svg"/>
        <img className='h-82' src="../empty_background.svg"/>
        <img className='h-82' src="../empty_background.svg"/>
      </div>
      </div>
    </div>
  )
}

export default Gallery9
