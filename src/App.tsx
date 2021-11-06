import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import MessageBoard from "./components/MessageBoard";

function App() {
  return (
    <div className="App">
      <Header content="Message Board" />
      <hr />
      <MessageBoard />
    </div>
  );
}

export default App;
