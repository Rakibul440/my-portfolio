import React from 'react'
import aboutImage from "../asset/img/rakibul-about.png"
import "../asset/About.css"
export default function About() {
  return (
    <div className='about container'>
      <img className='about-image' src={aboutImage} alt="Rakibul Islam" />
      <div className='my-about'>
        <h3 className='x-text'>WHO I AM?</h3>
        <h4 className='y-text'>I'm RAKIBUL ISLAM</h4>
        <br />
        <h4 className='about-text'>
        I am a versatile Web Developer and Engineer passionate about creating engaging, efficient, and user-friendly digital experiences. With a solid foundation in both front-end and back-end technologies, I thrive on bridging the gap between design and functionality to deliver seamless web solutions.
        </h4>
      </div>
    </div>
  )
}
