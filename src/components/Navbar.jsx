
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Trophy } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-eduBlue text-white px-4 py-3 flex items-center justify-between rounded-b-3xl shadow-lg">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold mr-2">🏎️</div>
          <span className="text-xl font-bold">EduRacer</span>
        </Link>
      </div>
      
      <div className="flex space-x-4">
        <Link to="/" className="flex items-center space-x-1 hover:text-eduYellow transition-colors duration-200">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link to="/profile" className="flex items-center space-x-1 hover:text-eduYellow transition-colors duration-200">
          <User size={20} />
          <span>Profile</span>
        </Link>
        <Link to="/leaderboard" className="flex items-center space-x-1 hover:text-eduYellow transition-colors duration-200">
          <Trophy size={20} />
          <span>Leaderboard</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
