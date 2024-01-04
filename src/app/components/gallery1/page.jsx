import React from 'react'

const Gallery1 = () => {
  return (
    <div className='flex flex-col text-center gap-6 mt-24'>
      <div className='flex flex-col gap-10 '>
      <p className='text-5xl font-bold'>Image Gallery</p>
      <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
      <div className='place-self-center mb-96 mx-10 md:mx-0'>
      <img className='h-82' src="../empty_background.svg"/>
      </div>
    </div>
  )
}

export default Gallery1
