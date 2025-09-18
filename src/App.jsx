import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Basketball from "./pages/Basketball";
import Volleyball from "./pages/Volleyball";
import LionDance from "./pages/LionDance";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

const App = () => {
  return (
      <Router>
        <NavigationBar />
        <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/volleyball" element={<Volleyball />} />
          <Route path="/lion-dance" element={<LionDance />} />
        </Routes>
        </main>
      </Router>
  );
}

export default App;
