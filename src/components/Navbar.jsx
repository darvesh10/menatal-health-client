import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MindMate</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link to="/signup" className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
