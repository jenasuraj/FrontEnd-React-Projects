import React from 'react';

const LogicArea = ({ imgIndex, setImgIndex, slides }) => {
  const Right = () => {
    if (imgIndex < slides.length - 1) {
      setImgIndex(imgIndex + 1);
    } else {
      setImgIndex(0);
    }
  };

  const Left = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    } else {
      setImgIndex(slides.length - 1);
    }
  };

  return (
    <div className="logic-area">
      <div className="arrow left" onClick={Left}>
        &#9664;
      </div>
      <div className="arrow right" onClick={Right}>
        &#9654;
      </div>
    </div>
  );
};

export default LogicArea;
