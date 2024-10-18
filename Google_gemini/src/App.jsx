import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useState, useRef } from "react";
import UserInput from "./components/Login/userInput";
import './components/Login/Login.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [display, setDisplay] = useState(true);
  const [history, setHistory] = useState([]);
  const [login, setLogin] = useState(true);
  const [dynamicName, setDynamicName] = useState('');
  const [dynamicEmail, setDynamicEmail] = useState('');
  
  const inputRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <>
      {login ? (
        <div className="fullscreen-container">
          <UserInput 
            setLogin={setLogin}
            inputRef={inputRef}
            emailRef={emailRef}
            setDynamicName={setDynamicName}
            setDynamicEmail={setDynamicEmail}
          />
        </div>
      ) : (
        <>
          <Sidebar history={history} setHistory={setHistory}
          setInput={setInput}  input={input}/>
          
          <Main
            input={input}
            setInput={setInput}
            output={output}
            setOutput={setOutput}
            display={display}
            setDisplay={setDisplay}
            history={history}
            setHistory={setHistory}
            login={login}
            setLogin={setLogin}
            dynamicName={dynamicName}
            dynamicEmail={dynamicEmail}
            setDynamicEmail={setDynamicEmail}
          />
        </>
      )}
    </>
  );
}

export default App;
