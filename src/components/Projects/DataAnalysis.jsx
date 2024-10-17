import React from "react";
import CardDataAnalysis from "./CardDataAnalysis";
import {cardData} from "./data";

const DataAnalysis = () => {
   
    return (
      <div className="container mx-auto px-4 py-8">
        <div className='border-gray-300 dark:border-gray-600 border-b-2 mb-4 pb-2'>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
        Data Analysis Projects
        </h1>
        </div>
        <main className="container mx-auto">
        <CardDataAnalysis events={cardData} />
        </main>
      </div>
    );
  };
  
  export default DataAnalysis;