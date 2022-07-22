import React from 'react'
import './carousel.css'

const Carousel = () => {

  return (
    <div className="slider">
      <figure>
        <img src={`https://wallpaperaccess.com/full/4425387.jpg`} alt="" className="pic" />
        <img src={`https://wallpaperaccess.com/full/275059.jpg`} alt="" className="pic" />
        <img src={`https://wallpaperaccess.com/full/1264433.png`} alt="" className="pic" />
        <img src={`https://wallpaperaccess.com/full/1096890.png`} alt="" className="pic" />
        <img src={`https://wallpaperaccess.com/full/4425387.jpg`} alt="" className="pic" />
      </figure>
    </div>
  );
};

export default Carousel;
