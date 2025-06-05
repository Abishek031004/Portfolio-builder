import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import ExportButton from './components/ExportButton';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
  name: '',
  bio: '',
  skills: '',
  projects: '',
  contact: '',
  experience: '',
  education: '',
});


  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load saved data
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) setFormData(JSON.parse(savedData));

    // Load theme preference
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('portfolioTheme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
      <Form formData={formData} setFormData={setFormData} />
      <Preview formData={formData} />
      <ExportButton />
    </div>
  );
}

export default App;
