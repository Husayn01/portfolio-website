import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar/Navbar';
import SideMenu from '../components/NavBar/Sidebar';
import GISAnalysis from '../components/Projects/GISAnalysis';
import DataAnalysis from '../components/Projects/DataAnalysis';

function Projects() {
  
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
       {/* Responsive Tab */}
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="flex justify-center mb-4 space-x-0">
        <button
            className={`px-6 py-3 flex items-center ${
              activeTab === 'gis'
                ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600 text-white px-5 py-2 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out group'
                : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            }`}
            onClick={() => setActiveTab('gis')}
          >
           <img src={"images/icons/location.png"} alt={"Icon"} className="w-6 h-6"/>
           <span className='px-2'>GIS Analysis Projects</span>
          </button>
          <button
            className={`px-6 py-3 flex items-center ${
              activeTab === 'data'
                ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600 text-white px-5 py-2 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out group'
                : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            }`}
            onClick={() => setActiveTab('data')}
          >
            <img src={"images/icons/exploration.png"} alt={"Icon"} className="w-6 h-6"/>
            <span className='px-2'>Data Analysis Projects</span>
          </button>
        </div>
        <div className="mt-4">
          {activeTab === 'gis' ? <GISAnalysis /> : <DataAnalysis />}
        </div>
      </div>
      </div>
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  )
}

export default Projects
