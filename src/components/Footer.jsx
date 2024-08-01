import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer_content">
                <p className='name'>Al. Jerozolimskie 12</p>
                <p className='nomer'>+48 500 500 500</p>
                <Link>Privacy policy</Link>
                <Link>Delivery</Link>
                <div className="social">
                    <Link><FaFacebookF /></Link>
                    <Link><FaTwitter /></Link>
                    <Link><FaInstagram /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer