import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Paragrap() {
    const {text} = useTypewriter({
        words: ['Developer','Designer','Programmer'],
        loop : {},
        typeSpeed : 120,
        deleteSpeed : 80
    })
  return (
    <h1>
      Hey I'm
      <span>
        {text}
      </span>
       <span>
        <Cursor cursorStyle ="|"/>
       </span>
    </h1>
  )
}
