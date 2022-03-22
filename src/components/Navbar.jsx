import React from 'react';
import { useState } from 'react';
import Logo from '../img/logo.png';
import '../styles/navbar.css';
import {Link} from 'react-router-dom';
import {MdReorder} from 'react-icons/md';


function Navbar({favNumber}) {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
        <div className='leftSide' id = {openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className='hiddenLinks'>
              <Link to="/">Home</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/favourites">
                Favourites
                <p className='num'>0</p>
              </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/favourites">
              Favourites
              <p className='num'>{favNumber}</p>
            </Link>
            <button onClick={toggleNavBar}>
              <MdReorder/>
            </button>   
        </div>
    </div>
  )
}

export default Navbar