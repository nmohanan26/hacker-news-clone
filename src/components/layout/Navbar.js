import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="lg:h-6 md:h-10 sm:h-10 flex items-center" style={{backgroundColor: '#FF6600'}}>
        <div className='flex items-center '>
          <img src={require('./logo.png')} alt="Logo" className="w-5 h-5 p-0.01 ml-0.5 mr-2" />
        </div>
        <div className="md:flex items-center sm:flex-row">
        <Link to="/" className="text-black font-bold text-md flex-shrink-0">Hacker News</Link>   
        <div className="lg:items-center text-sm sm:flex-wrap text-xs">
        <ul className="flex items-center">
          <li className="sm:ml-2 sm:mx-2 lg:ml-6">
            <Link to="/newstories" className={`lg:ml-2 ${location.pathname === '/newstories' ? 'text-white' : 'text-black'}`}>
               new&nbsp;
            </Link>
          </li>
          <li>
            <span className="lg:ml-3 sm:mr-2 text-black "> |&nbsp;</span>
            <span className={`lg:ml-3 sm:mr-2 text-black`}>
              past&nbsp;
            </span>
          </li>
          <li>
            <span className="lg:ml-3 sm:ml-2 text-sm text-black"> |&nbsp;</span>
            <span className={`lg:ml-3 sm:ml-2 text-black `}>
              comments&nbsp;
            </span>
          </li>        
          <li>
            <span className="lg:ml-3 sm:ml-2 text-sm text-black "> |&nbsp;</span>
            <span className={`lg:ml-3 sm:ml-2 text-black`}>
              ask&nbsp;
            </span>
          </li>
          <li>
            <span className="lg:ml-3 sm:ml-2 text-sm text-black"> |&nbsp;</span>
            <span className={`lg:ml-3 sm:ml-2 text-black`}>
              show&nbsp;
            </span>
          </li>
          <li>
            <span className="lg:ml-3 sm:ml-2 text-sm text-black"> |&nbsp;</span>
            <span className={`lg:ml-3 sm:ml-2 text-black`}>
              jobs&nbsp;
            </span>
          </li>
          <li>
            <span className="lg:ml-3 sm:ml-2 text-sm text-black"> |&nbsp;</span>
            <span className={`lg:ml-3 sm:ml-2 text-black`}>
            submit
            </span>
          </li>
        </ul>
      </div>        
      </div>
       <div className="justify-between ml-auto text-black text-xs">login</div>
    </nav>
  );
};
export default Navbar;
