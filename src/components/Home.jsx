import React from 'react';
import '../styles/home.css';
import BackgroundImg from '../img/background.jpg';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <div className="headerContainer">
        <h1> BEST RECIPES </h1>
        <Link to="/recipes">
          <button> GO TO RECIPES PAGE </button>
        </Link>
      </div>
    </div>
  )
}

export default Home