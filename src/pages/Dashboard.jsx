

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MoodSelector from '../components/MoodSelector';

const Dashboard = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Dashboard Section */}
      <div className="min-h-screen bg-blue-50 px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome Back, Darvesh 👋</h2>
          <p className="text-gray-700 mb-6">How are you feeling today? Select your current mood below:</p>

          {/* MoodSelector Component */}
          <MoodSelector />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Dashboard;

