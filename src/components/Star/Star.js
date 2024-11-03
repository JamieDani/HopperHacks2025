import React from 'react';
import './Star.css';

const Star = ({ left, top, size }) => {
  return <div 
  className="star" 
  style={{ positin: `absolute`, left: `${left}vw`, top: `${top}vh`, width: `${size}vw`, height: `${size}vw`}} />;
};

export default Star;