import './App.css';
import ButtonChange from './Components/ButtonChange';
import Heading from './Components/Heading';
import Output from './Components/Output';

function App() {
  const arr = ['Blue', 'Red', 'Green', 'Yellow', 'Orange'];
  let name = "Welcome to Colour changing site";
 
  return (
    <>
     <div className='main-one'>
     
       <Heading name={name} />
       <ButtonChange arr={arr}/>

        
     </div>
     
       
    </>
  );
}

export default App;
