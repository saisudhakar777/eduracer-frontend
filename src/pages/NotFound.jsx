
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md p-8 bg-white rounded-3xl shadow-lg">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-4xl font-bold mb-4 text-eduBlue">Oops!</h1>
        <p className="text-xl text-gray-600 mb-6">This racetrack doesn't exist yet.</p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <Home className="mr-2" size={20} />
          Back to Home Track
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
