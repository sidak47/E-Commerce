import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
// import {ShoppingCart} from "react-icons";
export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to='./'>Shop</Link>
            <Link to='./cart'>
            Cart
            </Link>
        </div>
    </div>
  )
}
