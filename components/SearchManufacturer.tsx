'use client'
import { SearchManufacturerProps } from '@/Types'
import { Combobox  } from '@headlessui/react'
import React from 'react'
import Image from 'next/image'

const SearchManufacturer = ({manufacturer,setManufacturer} : SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
      <Combobox> 
        <div className='relative w-full'> 
        <Combobox.Button className='absolute top-[14px]'> 
        <Image 
        src='/car-logo.svg'
        width={20}
        height={20}
        className='ml-4'
        alt='Car Logo' 
        />
         </Combobox.Button>
         <Combobox.Input> 
           
         </Combobox.Input>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer