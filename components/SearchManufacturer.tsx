'use client'
import { SearchManufacturerProps } from '@/Types'
import { Combobox, Transition  } from '@headlessui/react'
import React, { Fragment } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { manufacturers } from '@/constants'

const SearchManufacturer = ({manufacturer,setManufacturer} : SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  return (
    <div className='m-10'>
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
         <Combobox.Input className="search-manufacturer_input"
          placeholder='Volkswagen'
          displayValue={(manufacturer:string)=> {return manufacturer}}
          onChange={(e)=>setQuery(e.target.value)}/> 
          <Transition as= {Fragment} 
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={()=>setQuery('')}> 
          <Combobox.Option> </Combobox.Option>

          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
export default SearchManufacturer