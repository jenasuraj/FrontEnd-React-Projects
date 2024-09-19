import React from 'react';

const ArrayArea = ({ rate, setStar }) => {
  // Step 3: Use rate and setStar received from props to render the stars and handle clicks

  // Create an array for stars
  const starsArray = [...Array(5)].map((star, index) => {
    return (
      <div 
        key={index} 
        className={`star ${index < rate ? 'active' : ''}`} 
        onClick={() => setStar(index + 1)} // Update the rate when a star is clicked
      >
        {index + 1}
      </div>
    );
  });

  return (
    <div className='MainDiv'>
      {starsArray}
    </div>
  );
}

export default ArrayArea;
