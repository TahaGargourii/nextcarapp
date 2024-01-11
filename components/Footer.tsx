import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks, manufacturers } from '@/constants'



const  Footer = () => {
  return (
    <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'> 
    <div className='flex max-md: flex-col flex-wrap justify-between gap-5 s:px-16 px-6  py-10 '> 
    <div className='flex flex-col justify-start items-start gap-6'> 
    <Image src='/logo.svg' alt='logo' width= {180} height={18} className='object-contain'
/>
<p className='text-base text-gray-700'> Car Hub 2023 | All Rights Reserved</p>
    </div>
    </div>

    <div className='footer__links'>

      {footerLinks.map((link)=> (
        <div key={link.links} className='footer__link'> 
        <h3> {link.title}</h3>
        {link.links.map((item)=>
        <Link key={item.title} href={item.url} className='gray-500'> 
        {item.title}
        </Link>
        )}
        </div>
      ) )}

    </div>

    </footer>
  )
}

export default Footer