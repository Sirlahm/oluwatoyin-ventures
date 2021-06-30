import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Shoe } from "../../assets/shoe.svg";
import { ReactComponent as Lock } from "../../assets/lock.svg";
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo'>
        <Shoe />
      </Link>

      <div className='options'>
        <Link className='option'>BOYS</Link>
        <Link className='option' >GIRLS</Link>
        <Link className='option'>SCHOOL</Link>

        <Link className='option'>SNEAKERS</Link>
        <Link className='option'>CONTACT</Link>
      </div>
      <Link className='lock'>
        <Lock />
      </Link>
    </div>
  );
};

export default Header;
