import React from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import MessageBoard from "./components/MessageBoard";

const testFunc = function (input: string): string {
  let output = `Button clicked - ${input}`;
  testVar = "MODIFIED";
  return output;
};

let testVar = "Debug text";

function App() {
  return (
    <div className="App">
      <Header content="Property Header" />
      <Button buttonText="HELLO WORLD" testFunc={testFunc} />
      {testVar}
      <MessageBoard />
    </div>
  );
}

export default App;
