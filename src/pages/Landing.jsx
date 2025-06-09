import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';

import { FaBrain, FaSmile, FaLock, FaChartLine } from 'react-icons/fa';

const Landing = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-50 min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
          Welcome to MindMate 💙
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Your personal companion for mental well-being. Track your mood, reflect in journals, and get AI-powered emotional insights.
        </p>
        <a
          href="/signup"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Key Features
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={FaBrain}
              title="Mood Tracker"
              description="Track your emotional patterns daily."
            />
            <FeatureCard
              icon={FaLock}
              title="Private Journals"
              description="Your thoughts are encrypted and secured."
            />
            <FeatureCard
              icon={FaChartLine}
              title="AI Insights"
              description="Get personalized mental health suggestions."
            />
            <FeatureCard
              icon={FaSmile}
              title="Positive Habits"
              description="Form good habits and stay consistent."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landing;
