import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-orange-500 h-6 flex items-center justify-between px-1">
      <div className="flex items-center">
      <img src={require('./logo.png')} alt="Logo" className="h-5 w-5 mr-2" />
        <Link to="/" className="text-black font-bold">Hacker News</Link>
        <Link to="/newstories" className={`ml-16 ${location.pathname === '/newstories' ? 'text-white' : 'text-black'}`}>
          new
        </Link>
        <span className="ml-6 text-black">|</span>
        <Link to="/search" className={`ml-6 ${location.pathname === '/search' ? 'text-white' : 'text-black'}`}>
          search
        </Link>
      </div>
      
    </nav>
  );
};
export default Navbar;
