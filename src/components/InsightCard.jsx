// src/components/InsightCard.jsx
import React from 'react';

const InsightCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default InsightCard;
