import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <FaGraduationCap className="text-4xl text-blue-500 mr-4" />
        <h1 className="text-2xl font-bold text-gray-800">Knowledge Hub</h1>
      </div>
    </header>
  );
};

export default Header;

