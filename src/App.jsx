import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AiSalesPage from './pages/AiSalesPage';
import Projects from './pages/Projects';
import DevLab from './pages/DevLab';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-system" element={<AiSalesPage />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/dev-lab" element={<DevLab />} />
      </Routes>
    </Router>
  );
}

export default App;
