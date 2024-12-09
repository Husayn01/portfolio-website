import React, { useState, useEffect } from 'react';
import Navbar from './components/NavBar/Navbar';
import SideMenu from './components/NavBar/Sidebar';
import SocialMedia from './components/SocialMedia';
import SkillsSection from './components/Skill_Section/SkillsSection';
import RecentGis from './components/Recent_Work_GIS/RecentWork';
import RecentData from './components/Recent_Work_Data/RecentWork';
import Footer from './components/Footer';

const App = () => {
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

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <Navbar 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
        
        {/* Main content */}
        <main className="container mx-auto text-center pt-10">
          <div className="flex justify-center items-center mb-4">
            <img
              src={"images/Headshot.jpg"} alt={"Profile Photo"} className="w-52 h-52 rounded-full object-cover"/>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Hello&#128075;, I'm Hussaini Ahmed
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Your friendly neighborhood <span className="text-blue-500">Data Scientist,</span> 
            currently navigating the rocky terrain of a geology degree at the Federal University of Technology, Minna.
            With a strong passion for the oil and gas sector and its integration with machine learning, I combine analytical skills and domain expertise to uncover valuable insights. 
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Think of me as a digital Indiana Jones, but instead of hunting for ancient artifacts, I'm leveraging machine learning and data science to unearth patterns and trends that drive innovation. So, if you need someone to map out the 
            path to your next big discovery or transform complex datasets into actionable insights, you’ve come to the right place. Let's rock and roll! </p>
          <SocialMedia />
        </main> 
      </div>
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SkillsSection />

      {/* Responsive Tab */}
      <div className="container mx-auto px-4 py-8">
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
          {activeTab === 'gis' ? <RecentGis /> : <RecentData />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;