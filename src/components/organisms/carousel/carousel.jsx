import React from 'react'
import './carousel.css'

const Carousel = () => {

  return (
    <div className="slider">
      <figure>
        <img src={`https://wallpaperaccess.com/full/1895167.jpg`} alt="" className="pic" />
        <img src={`https://wallpaperaccess.com/full/275059.jpg`} alt="" className="pic" />
        <img src={`https://wallpaperaccess.com/full/1916908.jpg`} alt="" className="pic" />
        <img src={`https://wallpaperaccess.com/full/1096890.png`} alt="" className="pic" />
        <img src={`https://images8.alphacoders.com/992/thumb-1920-992724.png`} alt="" className="pic" />
      </figure>
    </div>
  );
};

export default Carousel;
