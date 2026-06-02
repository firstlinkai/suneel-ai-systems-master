import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AiSalesPage from './pages/AiSalesPage';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-system" element={<AiSalesPage />} />
        <Route path="/work" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
