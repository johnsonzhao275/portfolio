import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import ShoeCollection from "./pages/ShoeCollection";

const App = () => {
  return (
      <Router>
        <NavigationBar />
        <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/shoes" element={<ShoeCollection />} />
        </Routes>
        </main>
      </Router>
  );
}

export default App;
