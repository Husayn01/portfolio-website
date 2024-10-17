import React from 'react';
import cardData from './data';

const MyCard = ({ title, imageUrl, description, tools }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">{description}</p>
        <div className="mb-4">
          {tools.map((tool, index) => (
            <span
              key={index}
              className=" bg-blue-100 dark:bg-blue-950 text-blue-500 dark:text-blue-300 px-2 py-1 rounded-full m-1 inline-block text-xs"
            >
              {tool}
            </span>
          ))}
        </div>
        <button className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600 text-white px-5 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out group">
          Details →
        </button>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      {cardData.map((event, index) => (
        <MyCard key={index} {...event} />
      ))}
    </div>
  );
};

export default Card;
