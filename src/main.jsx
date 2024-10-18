import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import './index.css';
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/ErrorPage" element={<Projects />} /> */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);