import React from 'react'
import Link from 'next/link'
import { CustomButton } from '.'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10' >
            <nav className='max-w[1440px] mx-auto flex justify-between items-center sm:p-16x px-6 py-4'>
            <Link href={"/"} className='flex justify-center items-center'>
                <Image
                 src='/logo.svg'
                 alt='Logo'
                 height={18}
                 width={118}
                 className='object-contain'/>

            </Link>
            <CustomButton 
            title='Sign In'
            btnType={'button'}
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
             />

            </nav>



    </header >
  )
}

export default Navbar