import React from 'react'
import Logo from "../assets/image/logo.png"
import ShopIcon from "../assets/image/shop.icon.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="header_content">
                <div className="logo">
                    <Link to="/"> <img src={Logo} alt="" /></Link>
                </div>
                <div className="nav">
                <ul>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/workshop">Workshop</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <button>
                    <Link to="/modul">
                        <img src={ShopIcon} alt="" />
                    </Link>
                </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header