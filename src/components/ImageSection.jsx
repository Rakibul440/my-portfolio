import React from 'react'
import "../asset/ImageSection.css"
import img from "../asset/img/image.png"
export default function ImageSection() {
  return (
    <>
    
    <div className='image-section'>
      <div className='text container'>
        <h1 className='text-about'>WEB DESIGNER <br /><span className='txt'>&PROGRAMMER</span></h1>
      </div>
      <div className='container image-r'>
        {/* <h3 className='name'>My Name is <br /> RAKIBUL ISLAM</h3> */}
        <img className='front-image container' src={img}  alt="Rakibul" />
      </div>
    
    </div>
    <div className='contact container'>
            <button className='btn-contact btn-1'>You need a Designer</button>
            <button  className='btn-contact btn-2 '>You need a Programmer</button>
      </div>
    </>
  )
}
