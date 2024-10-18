import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const LoginPage = ({ login, setLogin, showImage, setShowImage ,dynamicEmail, dynamicName}) => {
    function logOut ()
    {
        window.location.reload();
    
    }
    function startLogin() {
        setLogin(false);
        setShowImage(!showImage); // Toggle the image visibility
    }
console.log(dynamicEmail)
console.log(dynamicName)
    return (
        <>
            <img onClick={startLogin} src={assets.user_icon} alt="User Icon" />
            {showImage && (
                <div className="image-popup">
                    <img src={assets.user_icon} alt="User Icon Enlarged" />
                    <p>{dynamicEmail}</p>
                    <p>{dynamicName}</p>
                    <button className='logout-btn' onClick={logOut}>Log out</button>
                    

                </div>
            )}
        </>
    );
};

export default LoginPage;
