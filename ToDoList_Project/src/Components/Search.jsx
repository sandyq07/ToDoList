import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <div id="Search">
      <input 
      id='input' 
      placeholder='Search' 
      type="text" 
      autoFocus
      value={search} 
      onChange={(ele)=>setSearch(ele.target.value)}/>
    </div>
  )
}

export default Search