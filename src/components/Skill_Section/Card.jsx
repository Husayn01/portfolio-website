import React from 'react';
import cardData from './data';

const MyCard = ({ title,imageUrl, description}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <div className="flex flex-col items-start">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">{description}
          </p>
          <button className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:-translate-y-1 animate-pulse">
            Details →
          </button>
        </div>
      </div>
    </div>
  );
};

const Card = ({ CardData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      {cardData.map((event, index) => (
        <MyCard key={index} {...event} />
      ))}
    </div>
  );
};

export default Card;