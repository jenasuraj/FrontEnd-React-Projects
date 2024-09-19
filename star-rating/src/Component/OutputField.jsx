import React from 'react';

const OutputField = ({ rate }) => {
  return (
    <div className='outputField'>
      <h1>{rate} {rate === 1 ? 'star added' : 'stars added'}</h1>
      <p>{'★'.repeat(rate) + '☆'.repeat(5 - rate)}</p>
    </div>
  );
}

export default OutputField;
