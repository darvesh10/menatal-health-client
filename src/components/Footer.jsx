import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 py-6">
      <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MindMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
