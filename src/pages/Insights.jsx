// src/pages/Insights.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InsightCard from '../components/InsightCard';
import MoodChart from '../components/MoodChart';

const moodScores = {
  '😄 Happy': 5,
  '😌 Calm': 4,
  '😐 Neutral': 3,
  '😕 Confused': 2,
  '😢 Sad': 1,
  '😠 Angry': 1,
};

const Insights = () => {
  const [entries, setEntries] = useState([]);
  const [stats, setStats] = useState({
    journalCount: 0,
    mostCommonMood: 'N/A',
    avgMood: '0',
  });

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/journals', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const journals = res.data;
        setEntries(journals);

        const journalCount = journals.length;

        // Mood analysis
        const moodFrequency = {};
        let totalScore = 0;

        journals.forEach((entry) => {
          const mood = entry.mood;
          if (mood) {
            moodFrequency[mood] = (moodFrequency[mood] || 0) + 1;
            totalScore += moodScores[mood] || 0;
          }
        });

        const mostCommonMood =
          Object.entries(moodFrequency).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

        const avgMood = journalCount > 0 ? (totalScore / journalCount).toFixed(1) : '0';

        setStats({
          journalCount,
          mostCommonMood,
          avgMood,
        });
      } catch (err) {
        console.error(' Error fetching insights:', err);
      }
    };

    fetchJournals();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-10">
        <h1 className="text-3xl font-bold text-center text-blue-600">Your Mental Health Insights</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <InsightCard title="Most Common Mood" value={stats.mostCommonMood} />
          <InsightCard title="Avg. Daily Mood Score" value={`${stats.avgMood} / 5`} />
          <InsightCard title="Journals Written" value={`${stats.journalCount} Entries`} />
        </div>

        <MoodChart entries={entries} />
      </div>
      <Footer />
    </div>
  );
};

export default Insights;

