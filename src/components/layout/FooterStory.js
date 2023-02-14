
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
  <footer className="border-t-2 border-orange-400 py-8">
    <div className="container text-gray-700">
    <ul className="flex text-xs text-gray-700 justify-center">
      <li>Guidelines |&nbsp;</li>
      <li>FAQ |&nbsp;</li>
      <li>Lists |&nbsp;</li>
      <li>API |&nbsp;</li>
      <li>Security |&nbsp;</li>
      <li>Legal |&nbsp;</li>
      <li>Apply to YC |&nbsp;</li>
      <li>Contact |&nbsp;</li>
    </ul>
    <div class="flex flex-col p-4 sm:flex-row items-center justify-center">
  <label for="searchstory" class="mb-2 sm:mr-2 text-sm sm:pb-3">Search:</label>
  <div class="sm:w-400 lg:w-400 h-10 items-center">
    <input
      type="text"
      name="searchstory"
      id="searchstory"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyPress}
      class="lg:w-80 border-gray-500 sm:text-sm"
      style={{ outline:'medium',height:'20px',paddingBottom:0, width:'150px' }}
    />
  </div>
</div>
    </div>
  </footer>
  )
}

export default Footer;