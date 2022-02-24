import React from 'react'
import './imageForm.css'

const ImageLinkForm = ({ onInputChange, onButtonClick }) => {
  return (
    <div>
      <p className='f4 pa2  tc black'>
        {'This App will detect faces in your picture. Give it a try.'}
      </p>
      <div className='flex'>
        <div className='form pa4 shadow-5 br3'>
          <input type='text' className='pa2 f4 w-70' onChange={onInputChange} />
          <button
            className=' w-30 grow f4 link white bg-light-purple ph3 pv2 dib'
            onClick={onButtonClick}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
