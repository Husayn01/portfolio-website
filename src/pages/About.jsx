import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar/Navbar';
import SideMenu from '../components/NavBar/Sidebar';


function About() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('gis');
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <Navbar 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
        {/* Main content */}
        <main className="container mx-auto py-16">

        </main>
      </div>
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  )
}

export default About
