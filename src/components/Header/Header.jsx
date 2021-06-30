import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Shoe } from "../../assets/shoe.svg";
import { ReactComponent as Lock } from "../../assets/lock.svg";
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-shoe'>
        <Shoe className='logo' />
      </Link>

      <div className='options'>
        <Link  className='option'>BOYS</Link>
        <Link className='option' >GIRLS</Link>
        <Link className='option'>SCHOOL</Link>

        <Link className='option'>SNEAKERS</Link>
        <Link to='/contact' className='option'>CONTACT</Link>
      </div>
      <Link className='logo-lock'>
        <Lock className='logo' />
      </Link>
    </div>
  );
};

export default Header;
