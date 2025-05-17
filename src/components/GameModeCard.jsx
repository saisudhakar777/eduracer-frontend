
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const GameModeCard = ({ title, icon, description, color, path }) => {
  return (
    <div className={`card-game-mode border-l-8 border-${color}`}>
      <div className="flex items-center mb-3">
        <div className={`text-4xl mr-3`}>{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={path}
        className={`btn inline-flex items-center justify-center space-x-2 bg-${color}`}
      >
        <span>Play Now</span>
        <Play size={20} />
      </Link>
    </div>
  );
};

export default GameModeCard;
