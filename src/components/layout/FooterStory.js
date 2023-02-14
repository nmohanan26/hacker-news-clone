
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
    <div class="flex flex-col p-2 sm:flex-row items-center justify-center">
  <label for="searchstory" class="mb-2 sm:mr-2 justify-center">Search:</label>
  <div class="sm:w-400 lg:w-800 items-center">
    <input
      type="text"
      name="searchstory"
      id="searchstory"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyPress}
      class="w-full border-gray-300 pl-10 pr-12 sm:text-sm"
      style={{ outline: "thin" }}
    />
  </div>
</div>
    </div>
  </footer>
  )
}

export default Footer;