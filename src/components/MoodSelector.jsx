import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const moods = [
  { label: '😊 Happy', value: 'happy', color: 'bg-yellow-300' },
  { label: '😐 Neutral', value: 'neutral', color: 'bg-gray-300' },
  { label: '😞 Sad', value: 'sad', color: 'bg-blue-300' },
  { label: '😡 Angry', value: 'angry', color: 'bg-red-300' },
];

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const navigate = useNavigate();

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood.value);

    // Save to localStorage
    localStorage.setItem('selectedMood', mood.value);

    // Redirect to journal page after slight delay
    setTimeout(() => {
      navigate('/journal');
    }, 600);
  };

  return (
    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">
      {moods.map((mood) => (
        <div
          key={mood.value}
          onClick={() => handleMoodSelect(mood)}
          className={`cursor-pointer p-4 rounded-lg shadow-md text-center transition-all duration-300 ${mood.color} ${
            selectedMood === mood.value ? 'ring-4 ring-blue-500 scale-105' : ''
          }`}
        >
          {mood.label}
        </div>
      ))}
      {selectedMood && (
        <p className="col-span-2 text-center text-blue-700 font-semibold mt-4 animate-pulse">
          Mood saved: {selectedMood.toUpperCase()} — Redirecting...
        </p>
      )}
    </div>
  );
};

export default MoodSelector;

