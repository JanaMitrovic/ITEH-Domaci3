import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsInstagram /> <BsFacebook /> <BsTwitter /> <BsLinkedin />
      </div>
    </div>
  )
}

export default Footer