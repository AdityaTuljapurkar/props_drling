import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image1 from './assets/resourses/1.jpg'
import {getImageUrl} from './assets/util.js'
function Avatar({person , size}) {

  return (
    <>
  <img
  className='avatar' 
  src={getImageUrl(person)} 
  alt={person.name}
  width = {size}
  height = {100}
   />
  <br />
    </>
  )
}

export default function Profile(){
  return (
    <div>
  <Avatar
   person = {{ name : "Bobby" , imageId : "2"  }}
   size = {100}
  />
  
  <Avatar 
  person={{name : "Chagan" , imageId : "7"}}
size = {100}  
  />
  <Avatar
  person={{name : 'Topu Ustad', imageId : "4"}}
  size = {100}
  />
  </div>
  
  )
}
