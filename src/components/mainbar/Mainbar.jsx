import React, { useState } from "react";

import "./mainbar.css";
import sendIcon from "../../assets/sendicon.png";
import chatIcon from "../../assets/logo.png";
import profile from "../../assets/profile.jpg";

const Mainbar = () => {
  let arr =[];
  const user = document.querySelector(".chats");
  const userChild = document.createElement("ul");
  const chatChild = document.createElement("ul");

  let [aiGeneratedMessage, setAiGeneratedMessage] = useState(
    "Hello, How may i assist you today?"
  );
  let [userQuestion, setUserQuestion] = useState("Vinita Israni");

  const getMessage = async () => {

    // user.style.display = "flex";
    try {
    const message = document.querySelector(".text").value;
    const API_KEY = "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";
    const url = "https://api.openai.com/v1/chat/completions";
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    };
   
      const res = await fetch(url, req);
      const data = await res.json();

      setUserQuestion(message);
      setAiGeneratedMessage(data.choices[0].message.content);

      userChild.classList.add("user-question");
      userChild.innerHTML = ` <li className="profile" >
        <img src=${profile} alt="" style="width:3rem; height:3rem; margin-right: 1rem; border-radius: 10px; object-fit: cover" />
              <p className="user-ques">${userQuestion}</p>
        </li>`;
      chatChild.classList.add("ai-generated-message");
      chatChild.innerHTML = ` <li className="message">
        <img src=${chatIcon} alt=""  style="width:4rem; height:4rem;"/>
              <p className="txt">${aiGeneratedMessage}</p>
      </li>`;

     
  
       
                
      setTimeout(()=>{user.appendChild(userChild);
        user.appendChild(chatChild);
    },4000)

    

      console.log(data);
    } catch (e) {
      console.log(e.message);
    }

  
  };

  return (
    <div className="mainbar-container">
      <div className="chats">
       
        <ul className="user-question">
          <li className="profile">
            <img src={profile} alt="" className="profile-icon" />
            <p className="user-ques">Vinita Israni</p>
          </li>
        </ul>
        <ul className="ai-generated-message">
          <li className="message">
            <img src={chatIcon} alt="" className="chat-icon" />
            <p className="txt">Hello, How may I assist you today?</p>
          </li>
        </ul>
      </div>

      <div className="chat-footer">
        <div className="inp">
          <input type="text" className="text" placeholder="Search..." />
          <button className="send-btn" onClick={getMessage}>
            <img src={sendIcon} alt="" className="send-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
