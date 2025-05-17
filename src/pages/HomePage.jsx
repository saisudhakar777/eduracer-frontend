
import React from 'react';
import { Link } from 'react-router-dom';
import GameModeCard from '../components/GameModeCard';

const HomePage = () => {
  const gameModes = [
    {
      title: 'Alphabet Adventure',
      icon: '🔤',
      description: 'Race to collect letters and learn the alphabet',
      color: 'eduBlue',
      path: '/game/alphabet'
    },
    {
      title: 'Number Speedway',
      icon: '🔢',
      description: 'Zoom through numbers and master counting',
      color: 'eduGreen',
      path: '/game/numbers'
    },
    {
      title: 'Math Racing',
      icon: '➗',
      description: 'Solve math problems while racing',
      color: 'eduOrange',
      path: '/game/math'
    },
    {
      title: 'Color Quest',
      icon: '🌈',
      description: 'Learn colors in this fun racing adventure',
      color: 'eduPurple',
      path: '/game/colors'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row items-center justify-between mb-12 py-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-eduBlue">
            Learn While <span className="text-eduOrange">Racing!</span>
          </h1>
          <p className="text-lg mb-6 text-gray-700 max-w-lg">
            EduRacer makes learning fun through an exciting racing game where kids solve problems by steering to the right answers!
          </p>
          <div className="space-x-4">
            <Link to="/game" className="btn btn-primary">
              Start Racing
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Race Car" 
                className="w-full h-full object-contain animate-car-move"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Choose Your Racing Mode</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameModes.map((mode, index) => (
            <GameModeCard
              key={index}
              title={mode.title}
              icon={mode.icon}
              description={mode.description}
              color={mode.color}
              path={mode.path}
            />
          ))}
        </div>
      </section>

      <section className="bg-eduBlue text-white rounded-3xl p-8 mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">How EduRacer Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white text-eduBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
            <h3 className="text-xl font-bold mb-2">Choose a Mode</h3>
            <p>Select from different educational racing modes based on what you want to learn.</p>
          </div>
          <div className="text-center">
            <div className="bg-white text-eduBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
            <h3 className="text-xl font-bold mb-2">Race & Answer</h3>
            <p>Steer your car to the correct lane that has the right answer to the question.</p>
          </div>
          <div className="text-center">
            <div className="bg-white text-eduBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
            <h3 className="text-xl font-bold mb-2">Earn & Learn</h3>
            <p>Collect points, earn badges, and watch your knowledge grow as you race!</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">What Parents & Teachers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="italic mb-4">"My son used to hate learning his ABCs, but now he asks to play EduRacer every day!"</p>
            <p className="font-bold">- Sarah, Parent</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="italic mb-4">"EduRacer has transformed my classroom. Students are excited about math for the first time!"</p>
            <p className="font-bold">- Mr. Johnson, Teacher</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="italic mb-4">"The progress tracking helps me understand where my daughter needs extra help. It's brilliant!"</p>
            <p className="font-bold">- Michelle, Parent</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
