import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image1 from './assets/resourses/1.jpg'

function Avatar() {

  return (
    <>
  <img
  className='avatar' 
  src={image1} 
  alt="img1"
  width = {100}
  height = {100}
   />

    </>
  )
}

export default function Profile(){
  return (
  <Avatar/>
  )
}
