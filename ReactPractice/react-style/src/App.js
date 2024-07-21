import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Sch = styled.div`
  color: red;
`;

function App() {
  return (
    <Sch>
      <div className='hero'>
        <h1>My name is Suraj Jena</h1>
      </div>
    </Sch>
  );
}

export default App;
