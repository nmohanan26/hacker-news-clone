
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Footer = () => {

  return(
  <footer className="py-8">
    <div className="container text-gray-700">
    <ul className="flex flex-wrap text-xs mr-2 text-black justify-center">
      <li>● About</li>
      <li className='ml-2'>● Setting</li>
      <li className='ml-2'>● Help</li>
      <li className='ml-2'>● API Documentation</li>
      <li className='ml-2'><Link to="/">● Hacker News</Link></li>
      <li className='ml-2'>● Fork/Contribute</li>
      <li className='ml-2'>● Cool Apps</li>
      <li className='ml-2'>● Contact</li>
    </ul>
    
    </div>
  </footer>
  )
}

export default Footer;