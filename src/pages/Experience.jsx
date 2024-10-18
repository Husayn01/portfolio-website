import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar/Navbar';
import SideMenu from '../components/NavBar/Sidebar';

const ExperienceItem = ({ year, title, description, icon, index }) => (
  <div className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${index % 2 === 0 ? 'lg:mr-auto lg:ml-12' : 'lg:ml-auto lg:mr-12'} lg:w-[calc(50%-3rem)]`}>
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 z-10">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
    <div className="lg:hidden absolute left-[-25px] top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700"></div>
  </div>
);

function Experience() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const experiences = [
    {
      year: 2019,
      title: "Web Development",
      description: "Led frontend development for a major e-commerce platform, implementing responsive designs and optimizing performance.",
      icon: "💻"
    },
    {
      year: 2018,
      title: "Web Designing",
      description: "Designed user interfaces for mobile applications, focusing on user experience and accessibility.",
      icon: "🎨"
    },
    {
      year: 2017,
      title: "JavaScript",
      description: "Developed complex JavaScript applications, utilizing modern frameworks and libraries.",
      icon: "🚀"
    },
    {
      year: 2016,
      title: "Web Development",
      description: "Started career as a junior web developer, working on various client websites and internal projects.",
      icon: "🌐"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <Navbar 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
        <main className="container mx-auto py-16">
          <h2 className="text-4xl font-bold text-center mb-16">My Experience</h2>
          <div className="relative max-w-6xl mx-auto pl-8 lg:pl-0">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} index={index} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  )
}

export default Experience;