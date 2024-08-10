// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import API from "./API";
import About from "./About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<API />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
