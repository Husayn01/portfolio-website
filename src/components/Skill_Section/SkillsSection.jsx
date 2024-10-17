import React from 'react';

const SkillCard = ({ title, description,  imageurl, experiences}) => {
  return (
    <div>
       <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg transition-colors duration-300">
      <div className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full p-4 mb-4'>
      <img src={imageurl} alt={"Icon"} className="w-8 h-8 object-cover"/>
      </div>
      <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h2>
      <p className="text-center mb-4 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-auto w-full">
        <h3 className="text-lg text-center font-semibold mb-2 text-gray-800 dark:text-white">Experiences:</h3>
        <div className="flex flex-wrap justify-center">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center mx-2 mb-2">
              <span className="text-xs bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded-lg text-blue-500 dark:text-blue-300">{exp.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      title: "GIS Analysis",
      description: "I can transform complex spatial data into visually stunning maps that reveal the hidden treasures of our Earth. Whether it's analyzing terrain, plotting geospatial patterns, or making sense of spatial data, I bring a sense of adventure and precision to every project. Who needs a fedora and a whip when you've got GIS?",
      imageurl: "/images/icons/location.png",
      experiences: [
        { 
          name: "ArcGIS Pro",
        },
        { 
          name: "QGIS",
        },
        { 
          name: "Rockworks",
        },
        { 
          name: "Georose",
        },
        { 
          name: "Python",
        },
        { 
          name: "Pandas",
        },
        { 
          name: "SQL",
        }
      ]
    },
    {
      title: "Data Analysis",
      description: "I dive deep into data sets, uncovering trends, correlations, and anomalies that others might miss. From crunching numbers to crafting dashboards, I bring clarity to chaos and help businesses make data-driven decisions with confidence. Who knew number-crunching could be so exciting? Elementary, my dear Watson!",
      imageurl: "/images/icons/exploration.png",
      experiences: [
        { 
          name: "Excel",
        },
        { 
          name: "Power BI",
        },
        { 
          name: "Tableau",
        },
        { 
          name: "Python",
        },
        { 
          name: "Matlibplot",
        },
        { 
          name: "SQL",
        },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
        <div className='border-gray-300 dark:border-gray-600 border-b-2 mb-8 pb-2'>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
            What I Do
          </h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;