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
        <span className="text-md text-gray-500 dark:text-gray-400">{year}</span>
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
      year: "Shell Nigeria - 2024",
      title: "Production Geologist",
      description: "As a Geoscience Intern at Shell, I conducted detailed geological analyses and \
      contributed to field projects aimed at understanding complex subsurface structures. My key \
      responsibilities included interpreting seismic data, assisting in reservoir modeling, and \
      collaborating with multidisciplinary teams to improve resource exploration techniques. \
      By applying geospatial tools such as ArcGIS and integrating data-driven methodologies, \
      I optimized workflows that contributed to the team's accurate geological interpretations.",
      icon: "💻"
    },
    {
      year: "Humanitarian Openstreetmap Team(HOT) - 2024",
      title: "Mapper",
      description: "As a volunteer with the Humanitarian OpenStreetMap Team \
      (HOT), I contributed to mapping underserved and disaster-prone regions across Africa. \
      I utilized OpenStreetMap to map over 500 km² of terrain, providing crucial geospatial data\
       to assist humanitarian efforts. My contributions enabled better resource allocation during \
       disaster responses and improved planning for NGOs and governmental organizations working in \
       affected areas.",
      icon: "🎨"
    },
    {
      year: "GDSC, FUTMinna",
      title: "Lead Data Analyst",
      description: "As the Lead Data Analyst for GDSC FUTMinna (Y), I led data-driven initiatives \
      that significantly impacted the community's growth and performance. I was responsible for \
      collecting, analyzing, and visualizing data to track club activities, engagement metrics, \
      and project outcomes.",
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