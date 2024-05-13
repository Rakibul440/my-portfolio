import React from 'react'
import logo from "../asset/img/rakibul-logo.png"
import "../asset/Header.css"

export default function Header() {
  return (
    <div className='header'>
      <nav className='navbar container'>
        <div className='logo-img'>
            <img src={logo} alt="logo" />
        </div>
        <div className='contain'>
            <span><a href="#">HOME</a></span>
            <span><a href="#">ABOUT</a></span>
            <span><a href="#">WORKS</a></span>
            <span><a href="#">BLOG</a></span>
            <span><a href="#">CONTACT</a></span>
        </div>
      </nav>
    </div>
  )
}
