import React from "react";

import "./sidebar.css";
import logo from "../../assets/logo.png";
import plusIcon from "../../assets/plusicon.png";
import messageIcon from '../../assets/messageicon.png'
import homeIcon from '../../assets/homeicon.png'
import savedIcon from '../../assets/savedicon.png'
import upgradeIcon from '../../assets/upgradeicon.png'


const Sidebar = () => {
   
  return (
    <div className="sidebar">

      {/* sidebartop */}
      <div className="sidebartop">
        <div className="logo">
          <img src={logo} alt="logo" className="gptlogo" />
          <p>ChatGPT</p>
        </div>
        <div className="new-chat-btn">
          <button className="chat-btn">
            <img src={plusIcon} alt="" className="plusicon"/>
            <div className="newchat">New Chat</div>
          </button>
        </div>
        <div className="query-btns">
          <button className="query">
            <img src={messageIcon} alt="" className="messageicon"/>
            <div className="query-msg query1">What is Programming? </div>
          </button>
          <button className="query">
            <img src={messageIcon} alt="" className="messageicon"/>
            <div className="query-msg query2">   How to use API?  </div>
          </button>
        </div>
      </div>
      {/* sidebartop */}

      {/* sidebarbottom */}
      <div className="sidebarbottom">
        <div className="content">
          <img src={homeIcon} alt="" className="content-img" />
          <div className="content-msg">Home</div>
        </div>
        <div className="content">
          <img src={savedIcon} alt="" className="content-img" />
          <div className="content-msg">Saved</div>
        </div>
        <div className="content">
          <img src={upgradeIcon} alt="" className="content-img" />
          <div className="content-msg">Upgrade to Pro</div>
        </div>
      </div>
      {/* sidebarbottom */}
    </div>
  );
};

export default Sidebar;
