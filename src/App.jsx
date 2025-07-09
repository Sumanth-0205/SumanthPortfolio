import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import Resume from './pages/Resume';

function App() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(darkMode ? 'dark' : 'light');
}, [darkMode]);


  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Router>
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          padding: '0.6rem 1rem',
          backgroundColor: '#ffe600',
          border: 'none',
          borderRadius: '6px',
          color: '#6a0572',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <Navbar />
      <main className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
