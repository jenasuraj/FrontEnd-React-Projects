import './App.css';
import { useState } from 'react';
import ArrayArea from './Component/ArrayArea';
import OutputField from './Component/OutputField';

function App() {
  // Step 1: Move the rate state and setStar function to the parent component
  const [rate, setRate] = useState(0);

  // Step 2: Define the function to update the rating (lifting state)
  function setStar(count) {
    setRate(count); // Update the rate in the parent component
  }

  return (
    <>
      {/* Step 3: Pass rate and setStar to ArrayArea */}
      <ArrayArea rate={rate} setStar={setStar} />
      
      {/* Step 4: Pass rate to OutputField to display the current rating */}
      <OutputField rate={rate} />
    </>
  );
}

export default App;
