import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MessageBoard from "./components/MessageBoard";

function App() {
  return (
    <div className="App">
      <Header content="Message Board" />
      <hr />
      <Navbar />
      <hr />
      <MessageBoard editMode={true} />
    </div>
  );
}

export default App;
