
import React, { useState } from 'react';
import { Trophy } from 'lucide-react';

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock leaderboard data - in a real app this would come from your backend
  const leaderboardData = {
    all: [
      { name: "Emily", score: 3250, badge: "👑" },
      { name: "Jackson", score: 2980, badge: "🥈" },
      { name: "Sophia", score: 2740, badge: "🥉" },
      { name: "Liam", score: 2450, badge: null },
      { name: "Olivia", score: 2380, badge: null },
      { name: "Noah", score: 2210, badge: null },
      { name: "Ava", score: 2150, badge: null },
      { name: "Lucas", score: 1950, badge: null },
      { name: "Isabella", score: 1820, badge: null },
      { name: "Mason", score: 1740, badge: null },
    ],
    alphabet: [
      { name: "Sophia", score: 1500, badge: "👑" },
      { name: "Emily", score: 1320, badge: "🥈" },
      { name: "Liam", score: 1180, badge: "🥉" },
    ],
    numbers: [
      { name: "Jackson", score: 1420, badge: "👑" },
      { name: "Noah", score: 1250, badge: "🥈" },
      { name: "Olivia", score: 1100, badge: "🥉" },
    ],
    math: [
      { name: "Emily", score: 980, badge: "👑" },
      { name: "Liam", score: 860, badge: "🥈" },
      { name: "Lucas", score: 740, badge: "🥉" },
    ],
  };
  
  const tabs = [
    { id: 'all', label: 'All Games' },
    { id: 'alphabet', label: 'Alphabet' },
    { id: 'numbers', label: 'Numbers' },
    { id: 'math', label: 'Math' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <Trophy size={32} className="text-eduOrange mr-3" />
        <h1 className="text-3xl font-bold">Top Racers</h1>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex border-b">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`flex-1 py-3 px-4 font-medium transition-colors duration-200 focus:outline-none ${
                activeTab === tab.id 
                  ? 'bg-eduBlue text-white' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4">#</th>
                <th className="p-4">Racer</th>
                <th className="p-4">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData[activeTab].map((player, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-100 last:border-none ${
                    index < 3 ? 'bg-gray-50' : ''
                  }`}
                >
                  <td className="p-4 font-bold text-center">
                    {index === 0 && <span className="text-2xl">🥇</span>}
                    {index === 1 && <span className="text-2xl">🥈</span>}
                    {index === 2 && <span className="text-2xl">🥉</span>}
                    {index > 2 && <span>{index + 1}</span>}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-eduBlue rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {player.name.charAt(0)}
                      </div>
                      <span>{player.name}</span>
                      {player.badge && (
                        <span className="ml-2">{player.badge}</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 font-bold">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
