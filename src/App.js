import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CyberUnixOS from './CyberUnixOS';
import Documentation from './Documentation';
import Features from './pages/Features';
import Tools from './pages/Tools';
import Teams from './pages/Teams';
import DownloadKit from './pages/DownloadKit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CyberUnixOS />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/features" element={<Features />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/download" element={<DownloadKit />} />
      </Routes>
    </Router>
  );
}

export default App;
