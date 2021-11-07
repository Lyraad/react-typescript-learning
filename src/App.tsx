import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import AddPost from "./routes/AddPost";
import DelPost from "./routes/DelPost";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <hr />
        <Navbar />
        <hr />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/delPost" element={<DelPost />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
