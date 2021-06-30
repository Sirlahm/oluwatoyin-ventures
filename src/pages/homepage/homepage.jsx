import React from "react";
import Header from "../../components/Header/Header";


import { Link } from "react-router-dom";

import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="heading-container">
          <h1 className="heading">Oluwatoyin Ventures</h1>
          
        </div>
        <Link to='/contact' className="link">CONTACT US</Link>
        <div className="bottom">
          <div className='img-container'>
            <img src='../img/shoe1.jpg' className='img' alt='Children-Shoe'></img>
          </div>
          <div className='img-container'>
            <img src='../img/shoe2.jpg' className='img' alt='Children-Shoe'></img>
          </div>
          <div className='img-container'>
            <img src='../img/shoe3.jpg' className='img' alt='Children-Shoe'></img>
          </div>
          <div className='img-container'>
            <img src='../img/shoe4.jpg' className='img' alt='Children-Shoe'></img>
          </div>
          <div className='img-container'>
            <img src='../img/shoe5.jpg' className='img' alt='Children-Shoe'></img>
          </div>
          <div className='img-container'>
            <img src='../img/shoe2.jpg' className='img' alt='Children-Shoe'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
