import React from 'react';
import navLinks from './navlinks';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    <div className="p-4">
      <button onClick={onClose} className="absolute top-4 right-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav className="mt-8">
      {navLinks.map((item, index) => (
  
       <a key={index}
        href={item.href}
        className="block py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ease-in-out relative group"
      >
        {item.text}
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </a>
      ))}
      </nav>
    </div>
  </div>
  );
};

export default Sidebar;
