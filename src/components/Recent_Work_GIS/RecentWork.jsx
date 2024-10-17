import React from "react";
import Card from './Card';
import cardData from './data';

const RecentGis = () => {
   
    return (
      <div className="container mx-auto px-4 py-8">
        <div className='flex border-gray-300 dark:border-gray-600 border-b-2 mb-4 pb-2'>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
        GIS Analysis Projects
        </h1>
        </div>
        <main className="container mx-auto">
        <Card events={cardData} />
        </main>
      </div>
    );
  };
  
  export default RecentGis;