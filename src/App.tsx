import React from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import MessageBoard from "./components/MessageBoard";

function App() {
  return (
    <div className="App">
      <Header content="Property Header" />
      <Button buttonText="HELLO WORLD" />
      <header className="App-header">
        <MessageBoard />
      </header>
    </div>
  );
}

export default App;
