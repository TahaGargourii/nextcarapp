'use client'

import React from 'react'



const handleSearch = ()=> {}
const SearchBar = () => {
  return (
    <form className='SearchBar' onSubmit={handleSearch}> 
    
    <div className='searchbar_  _item'>

      <SearchManufacturer/>
    </div>
    </form>
  )
}

export default SearchBar