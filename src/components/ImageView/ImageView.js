import React from 'react'
import logo from './logo192.png'
import './imageView.css'

const ImageView = ({imageUrl}) => {
  return (
<div className='flex pv4'>
      <div className='imgView shadow-4'>
        <img src={logo} alt='img' />
      </div>
    </div>
  )
}

export default ImageView

