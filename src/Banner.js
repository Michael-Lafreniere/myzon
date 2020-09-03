import React from 'react';
import './Banner.css';
import BannerImg from './img/banner2.jpg';

function Banner() {
  return (
    <div className="banner">
      <img className="banner__image" src={BannerImg} alt="" />
    </div>
  );
}

export default Banner;
