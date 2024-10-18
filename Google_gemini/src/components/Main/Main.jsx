import React, { useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import axios from 'axios'; 
import Pages from './Pages';
import FrontText from './FrontText';
import OutputArea from './OutputArea';
import LoginPage from './UserPage';


const Main = ({ input, setInput, output, setOutput, 
    display, setDisplay, setHistory,
     login, setLogin, dynamicName,
    dynamicEmail }) => {
        console.log(input);

    const [showImage, setShowImage] = useState(false); // State to toggle the div

    function TextChange(event) {
        setInput(event.target.value);
        
    }
    

   
    async function generateAnswer(input) {
        setHistory(prev => [...prev, { input }]);
        setInput('');

        try {
           
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDiFQK3lxNwuyQFBD0Kg-gYY4kBehIGeh4",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    contents: [
                        {
                            parts: [
                                {
                                    text: input 
                                }
                            ]
                        }
                    ]
                }
            });

            const generatedText = response['data']['candidates'][0]['content']['parts'][0]['text'];
            setOutput(generatedText); // Set the output to the generated text
            setDisplay(false); // Hide the cards when output is generated
           

        } catch (error) {
            console.error("Error generating answer:", error.response.data); 
        }
    }
    return (
        <>
            <div className='main'>
                <div className="nav">
                    <p>Sykoon.ai</p>
                    <LoginPage 
                        login={login} 
                        setLogin={setLogin} 
                        showImage={showImage} 
                        setShowImage={setShowImage} 
                        dynamicEmail ={dynamicEmail}
                        dynamicName ={dynamicName}
                    />
                </div>

                <div className="main-container">
                    <FrontText dynamicName={dynamicName} />
                    {display && <Pages input={input} setInput={setInput} />}

                    <div className="main-bottom">
                        <div className="search-box">
                            <input type="text" placeholder='Enter a prompt here' value={input} onChange={TextChange} />
                            <div>
                             
                                <img onClick={() => generateAnswer(input)} src={assets.send_icon} alt="" />
                            </div>
                        </div>
                        <div className="final-text">
                            {display && <p>Let’s get back to questioning, we'll be happy to assist you..!!</p>}
                        </div>

                        <OutputArea output={output} display={display} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
