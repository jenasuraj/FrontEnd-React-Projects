import React, { useState } from 'react';
import LogicArea from './LogicArea';


const Slider = ({ slides }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const imgStyle = {
    width: "1000px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "5px"
  };

  return (
    <div className="slider-container">
      <img
        src={slides[imgIndex].url}
        alt={slides[imgIndex].title}
        style={imgStyle}
      />
      <LogicArea 
        imgIndex={imgIndex} 
        setImgIndex={setImgIndex} 
        slides={slides}
      />
    </div>
  );
};

export default Slider;
