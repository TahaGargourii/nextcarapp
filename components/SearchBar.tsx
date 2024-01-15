'use client'

import React from 'react'
import { SearchManufacturer } from '.'
import { useState } from 'react'


const SearchBar = () => {

  const handleSearch = ()=> {}
  const [manufacturer, setManufacturer] =useState('');


  return (
    <form className='SearchBar' onSubmit={handleSearch}> 
    
    <div className='searchbar_  _item'>

      <SearchManufacturer 
      manufacturer={manufacturer} 
      setManufacturer={setManufacturer}/>
    </div>
    </form>
  )
}

export default SearchBar