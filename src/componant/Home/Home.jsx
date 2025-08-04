import React from 'react'
import img from "../../assets/avataaars.svg"
import { MainHeader } from '../../MainHeader/MainHeader'

export default function Home() {
  return (
    <div>
      <img src={img} className='w-1/2 lg:w-1/4 mx-auto p-5' alt="avataaars" />
      <MainHeader>start Framework</MainHeader>
      <p className='text-white text-center my-3 p-5'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
