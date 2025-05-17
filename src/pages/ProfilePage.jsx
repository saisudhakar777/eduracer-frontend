
import React from 'react';
import { Trophy, Star, Book, Clock } from 'lucide-react';

const ProfilePage = () => {
  // Mock user data - in a real app this would come from your backend
  const userData = {
    name: "Alex",
    age: 8,
    totalScore: 2450,
    gamesPlayed: 15,
    badges: ["Math Master", "Alphabet Pro", "Number Ninja"],
    recentGames: [
      { mode: "Alphabet", score: 450, date: "2025-05-15" },
      { mode: "Math", score: 300, date: "2025-05-14" },
      { mode: "Numbers", score: 500, date: "2025-05-13" },
    ],
    progress: {
      alphabet: 75,
      numbers: 60,
      math: 45,
      colors: 90
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* User Profile Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:col-span-1">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-eduBlue rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
              {userData.name.charAt(0)}
            </div>
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <p className="text-gray-500">Age: {userData.age}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-500">Total Score</p>
              <p className="font-bold text-lg">{userData.totalScore}</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-500">Games</p>
              <p className="font-bold text-lg">{userData.gamesPlayed}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="font-bold mb-2 flex items-center">
              <Trophy size={18} className="mr-2 text-eduOrange" />
              Badges
            </h3>
            <div className="flex flex-wrap gap-2">
              {userData.badges.map((badge, index) => (
                <span key={index} className="bg-eduYellow text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                  <Star size={12} className="mr-1" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Progress & Recent Games */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Book size={20} className="mr-2 text-eduBlue" />
              Learning Progress
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Alphabet</span>
                  <span>{userData.progress.alphabet}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-eduBlue h-2.5 rounded-full" style={{ width: `${userData.progress.alphabet}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Numbers</span>
                  <span>{userData.progress.numbers}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-eduGreen h-2.5 rounded-full" style={{ width: `${userData.progress.numbers}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Math</span>
                  <span>{userData.progress.math}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-eduOrange h-2.5 rounded-full" style={{ width: `${userData.progress.math}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Colors</span>
                  <span>{userData.progress.colors}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-eduPurple h-2.5 rounded-full" style={{ width: `${userData.progress.colors}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Clock size={20} className="mr-2 text-eduBlue" />
              Recent Games
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 rounded-l-lg">Game Mode</th>
                    <th className="p-3">Score</th>
                    <th className="p-3 rounded-r-lg">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.recentGames.map((game, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-none">
                      <td className="p-3">{game.mode}</td>
                      <td className="p-3 font-bold">{game.score}</td>
                      <td className="p-3 text-gray-500">{game.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
