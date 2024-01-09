'use client'
import React from 'react'
import Image from 'next/image'
import {CustomButtonProps }from '@/Types' 

const Button = ({title,containerStyles, handleClick, btnType}:CustomButtonProps) => {
  return (
   <button 
   disabled={false}
   type={btnType ||'button'} 
   className={`custom-btn ${containerStyles}`}
   onClick={handleClick}> 
   <span> {title}</span>
   </button>
  )
}

export default Button