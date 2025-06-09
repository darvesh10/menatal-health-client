import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const AiInsights = () => {
  const [entries, setEntries] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🧠 Fetch recent journal entries
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/journals', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const latest = res.data.slice(0, 5); // get last 5
        setEntries(latest);
        console.log(' Journal entries fetched:', latest);
      } catch (err) {
        console.error(' Failed to load journal entries:', err);
      }
    };

    fetchEntries();
  }, []);

  //  Get AI Suggestions
  const generateSuggestions = async () => {
    if (entries.length === 0) {
      alert("No journal entries to analyze.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:5000/api/ai/insights',
        { entries },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setSuggestions(res.data.suggestions);
      console.log(" AI Suggestions:", res.data.suggestions);
    } catch (err) {
      console.error(' Error getting AI suggestions:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          🤖 AI-Powered Mental Health Suggestions
        </h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={generateSuggestions}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
          >
            {loading ? 'Analyzing...' : 'Get AI Suggestions'}
          </button>
        </div>

        <div className="space-y-6">
          {suggestions.length === 0 && !loading && (
            <p className="text-center text-gray-600">No suggestions yet. Click the button above.</p>
          )}

          {suggestions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-blue-100"
            >
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-blue-700">Your Entry:</span>
                <br />
                {item.text}
              </p>
              <p className="text-green-700">
                <span className="font-semibold">AI Suggestion:</span>
                <br />
                {item.suggestion}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiInsights;


