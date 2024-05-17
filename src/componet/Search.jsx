import React, { useState } from 'react'
import "./Search.css"
const Search = ({ title }) => {
  const [filter, setFilter] = useState('');
  return (
    <div className='search'>
      <h1>Search-Item</h1>
      <input 
        type="text" 
        className='ipt' 
        placeholder='search here...' 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
      />
    </div>
  )
}

export default Search