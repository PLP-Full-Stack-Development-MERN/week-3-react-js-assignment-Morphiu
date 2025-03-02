import React from "react";
import Profile from "./components/profile";
import Counter from "./components/counter";
import Header from "./components/header";
import "../src/App.css";

function App() {
  return (
    <>
      <div>
        <Header title="Welcome to React" />
      </div>

      <div className="card">
        <Profile />
      </div>

      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
