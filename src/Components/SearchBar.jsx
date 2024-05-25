import '../CSS/SearchBar.css'
import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchForm () {
  return (
    <form className='SerachForm'>
      <input type="search" placeholder="Search..." className='Search-input'/>
      <button className='Search-btn'> <FaMagnifyingGlass className='searchBar-icon'/> </button>
    </form>
  );
}

export default SearchForm;
