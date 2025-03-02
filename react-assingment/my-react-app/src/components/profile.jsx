import React, { useState } from "react";
import "../App.css";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const inputChange = (event) => {
    setName(event.target.value);
  };

  const inputChange1 = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name: " value={name} onChange={inputChange}/> <br/> <br/>
      <input type="email" placeholder="Enter your email: " value={email} onChange={inputChange1}/> 
      
      <h1>Hello, {name}👋</h1>
      <h2>Your email is : {email}</h2>
      <p>Have a great day!</p>
    </div>
  );
}

export default Profile;
