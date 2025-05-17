
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-eduBlue text-white py-4 px-6 rounded-t-3xl mt-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">🏎️ EduRacer</h3>
          <p className="text-sm opacity-80">Making learning fun through racing!</p>
        </div>
        
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:text-eduYellow transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-eduYellow transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-eduYellow transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-2">Game Modes</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/game/alphabet" className="hover:text-eduYellow transition-colors">Alphabet</Link></li>
            <li><Link to="/game/numbers" className="hover:text-eduYellow transition-colors">Numbers</Link></li>
            <li><Link to="/game/math" className="hover:text-eduYellow transition-colors">Math</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/20 mt-4 pt-4 text-center text-xs opacity-70">
        <p>© 2025 EduRacer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
