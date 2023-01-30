"use client"

import {useState, ChangeEvent} from 'react'

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(e.target.value);
  }

  return (
    <input
    type="text"
    placeholder="Search here"
    onChange={handleSearchChange}
    value={searchInput} />
    )
  }
  
  export default Searchbar