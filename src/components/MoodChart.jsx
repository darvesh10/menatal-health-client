// src/components/MoodChart.jsx
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const moodScores = {
  '😄 Happy': 5,
  '😌 Calm': 4,
  '😐 Neutral': 3,
  '😕 Confused': 2,
  '😢 Sad': 1,
  '😠 Angry': 1,
};

const MoodChart = ({ entries }) => {
  const data = entries.map((entry) => ({
    date: new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    mood: moodScores[entry.mood] || 0,
  }));

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Mood Over Time</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis domain={[1, 5]} />
          <Tooltip />
          <Line type="monotone" dataKey="mood" stroke="#3B82F6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodChart;

