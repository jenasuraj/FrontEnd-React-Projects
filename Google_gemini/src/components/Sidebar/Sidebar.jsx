import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = ({ history, setInput}) => {
  const [extended, setExtended] = useState(false);
  function PutHistoryIntoInput(index)
  {
    //console.log(history[index]);
    setInput(history[index].input)
  }

  const toggleMenu = () => {
    setExtended((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <div className="top">
        {/* Toggle sidebar menu */}
        <img onClick={toggleMenu} className="menu" src={assets.menu_icon} alt="menu-icon" />
        <br />

        {/* New chat section */}
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus-icon" />
          {extended && <p>New Chat</p>}
        </div>

        {/* Display recent chats if the sidebar is extended */}
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>

            <div className="recent-entry">
              {/* Safeguard history mapping */}
              {history && history.length > 0 ? (
                history.map((entry, index) => (
                  <div key={index} className="recent-entry">
                    <img  onClick={()=>PutHistoryIntoInput(index)} src={assets.message_icon} alt="message-icon" />
                    <p onClick={()=>PutHistoryIntoInput(index)}>{entry.input}</p>
                  </div>
                ))
              ) : (
                <p>No recent chats</p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question-icon" />
          {extended && <p>Help</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings-icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
