import React from "react";
import CardGisAnalysis from "./CardGisAnalysis";
import {cardGis} from './data';

const GISAnalysis = () => {
   
    return (
      <div className="container mx-auto px-4 py-8">
        <div className='border-gray-300 dark:border-gray-600 border-b-2 mb-4 pb-2'>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
        GIS Analysis Projects
        </h1>
        </div>
        <main className="container mx-auto">
        <CardGisAnalysis events={cardGis} />
        </main>
      </div>
    );
  };
  
  export default GISAnalysis;