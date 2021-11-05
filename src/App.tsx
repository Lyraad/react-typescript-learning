import React from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import MessageBoard from "./components/MessageBoard";
import { useState } from "react";

function App() {
  const [testVar, updateTestVar] = useState("Initial value");

  const testFunc = function (input: string): string {
    let output = `Button clicked - ${input}`;
    updateTestVar("Modified");
    return output;
  };

  return (
    <div className="App">
      <Header content="Property Header" />
      <Button buttonText="HELLO WORLD" testFunc={testFunc} />
      {testVar}
      <hr />
      <MessageBoard />
    </div>
  );
}

export default App;
