import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JournalEntryCard from '../components/JournalEntryCard';

const Journal = () => {
  const [journalText, setJournalText] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/journals', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setEntries(res.data);
      } catch (err) {
        console.error(' Error fetching journals:', err);
      }
    };

    fetchEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!journalText.trim() || !selectedMood) return;

    try {
      const res = await axios.post(
        'http://localhost:5000/api/journals',
        {
          text: journalText.trim(),
          mood: selectedMood,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      setEntries([res.data.journal, ...entries]);
      setJournalText('');
      setSelectedMood('');
    } catch (err) {
      console.error(' Error saving journal:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/journals/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setEntries(entries.filter((entry) => entry._id !== id));
    } catch (err) {
      console.error(' Error deleting journal:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Your Journal
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 mb-6 space-y-4"
        >
          <textarea
            rows="4"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your thoughts..."
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
          />

          <select
            value={selectedMood}
            onChange={(e) => setSelectedMood(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select your mood</option>
            <option value="😄 Happy">😄 Happy</option>
            <option value="😐 Neutral">😐 Neutral</option>
            <option value="😢 Sad">😢 Sad</option>
            <option value="😠 Angry">😠 Angry</option>
            <option value="😌 Calm">😌 Calm</option>
            <option value="😕 Confused">😕 Confused</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            Save Entry
          </button>
        </form>

        {/*  Added links below the form */}
        <div className="mb-10">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <a
      href="/ai-insights"
      className="text-blue-700 hover:text-blue-900 font-medium underline text-center md:text-left"
    >
      🧠 Get AI Suggestions
    </a>
    <a
      href="/insights"
      className="text-blue-700 hover:text-blue-900 font-medium underline text-center md:text-right"
    >
      📊 See Your Insights
    </a>
  </div>
</div>


        <div className="space-y-4">
          {entries.length === 0 ? (
            <p className="text-gray-600 text-center">
              No entries yet. Start writing!
            </p>
          ) : (
            entries.map((entry) => (
              <JournalEntryCard
                key={entry._id}
                id={entry._id}
                date={entry.date}
                text={entry.text}
                mood={entry.mood}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Journal;


