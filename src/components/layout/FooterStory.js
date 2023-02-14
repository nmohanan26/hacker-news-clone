
import React, { useState } from 'react';
import SearchPage from '../pages/SearchPage';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate();

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      navigate(`/search/${search}`);
    }
  }
  return(
  <footer className="border-t-2 border-orange-400 pt-3">
    <div className="container text-black">
    <ul className="flex text-xs text-black justify-center">
      <li>Guidelines <span className='text-gray-500'>|&nbsp;</span></li>
      <li>FAQ <span className='text-gray-500'>|&nbsp;</span></li>
      <li>Lists <span className='text-gray-500'>|&nbsp;</span></li>
      <li>API <span className='text-gray-500'>|&nbsp;</span></li>
      <li>Security <span className='text-gray-500'>|&nbsp;</span></li>
      <li>Legal <span className='text-gray-500'>|&nbsp;</span></li>
      <li>Apply to YC <span className='text-gray-500'>|&nbsp;</span></li>
      <li>Contact</li>
    </ul>
    <div class="flex flex-col pt-2 sm:flex-row items-center justify-center">
  <label for="searchstory" class="mb-2 text-gray-500 sm:mr-2 text-sm sm:pb-2">Search:</label>
  <div class="sm:w-400 lg:w-400 h-10 items-center">
    <input
      type="text"
      name="searchstory"
      id="searchstory"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyPress}
      class="lg:w-80 border-gray-500 sm:text-sm"
      style={{ outline:'medium',height:'20px',padding:'1px', width:'150px' }}
    />
  </div>
</div>
    </div>
  </footer>
  )
}

export default Footer;