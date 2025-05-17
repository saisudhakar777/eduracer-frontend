import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';

// Game data for different modes
const gameData = {
  alphabet: {
    title: 'Alphabet Adventure',
    questions: [
      { question: "Which letter comes after A?", options: ["B", "C", "D"], correctAnswer: 0 },
      { question: "Which letter comes before D?", options: ["A", "B", "C"], correctAnswer: 2 },
      { question: "Which letter is a vowel?", options: ["B", "E", "T"], correctAnswer: 1 }
    ]
  },
  numbers: {
    title: 'Number Speedway',
    questions: [
      { question: "Which number comes after 5?", options: ["4", "6", "7"], correctAnswer: 1 },
      { question: "Which is the smallest number?", options: ["9", "3", "6"], correctAnswer: 1 },
      { question: "How many fingers on one hand?", options: ["4", "5", "6"], correctAnswer: 1 }
    ]
  },
  math: {
    title: 'Math Racing',
    questions: [
      { question: "What is 2 + 3?", options: ["4", "5", "6"], correctAnswer: 1 },
      { question: "What is 7 - 2?", options: ["3", "4", "5"], correctAnswer: 2 },
      { question: "What is 2 × 2?", options: ["2", "3", "4"], correctAnswer: 2 }
    ]
  }
};

const GamePage = () => {
  const { mode } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [carPosition, setCarPosition] = useState(1); // 0, 1, 2 for left, middle, right lanes
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  
  const currentGameMode = gameData[mode] || gameData.alphabet;
  const currentQuestionData = currentGameMode.questions[currentQuestion];
  
  // Handle keyboard controls
  const handleKeyDown = useCallback((e) => {
    if (!gameActive) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        setCarPosition(prev => Math.max(0, prev - 1));
        break;
      case 'ArrowRight':
        setCarPosition(prev => Math.min(2, prev + 1));
        break;
      case 'Enter':
        // Check answer when Enter is pressed
        checkAnswer();
        break;
      default:
        break;
    }
  }, [gameActive, carPosition]);
  
  // Check if answer is correct
  const checkAnswer = () => {
    if (carPosition === currentQuestionData.correctAnswer) {
      setScore(prev => prev + 100);
    }
    
    // Move to next question or end game
    if (currentQuestion < currentGameMode.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      endGame();
    }
  };
  
  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setCurrentQuestion(0);
    setTimeLeft(60);
    setGameOver(false);
  };
  
  const endGame = () => {
    setGameActive(false);
    setGameOver(true);
  };
  
  useEffect(() => {
    // Add keyboard event listener
    window.addEventListener('keydown', handleKeyDown);
    
    // Timer countdown
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(timer);
    };
  }, [gameActive, handleKeyDown, timeLeft]);
  
  // Touch controls for mobile
  const moveLeft = () => {
    if (!gameActive) return;
    setCarPosition(prev => Math.max(0, prev - 1));
  };
  
  const moveRight = () => {
    if (!gameActive) return;
    setCarPosition(prev => Math.min(2, prev + 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">{currentGameMode.title}</h1>
      
      <div className="mb-4 flex justify-between items-center">
        <div className="bg-eduBlue text-white px-4 py-2 rounded-lg">
          Score: {score}
        </div>
        <div className="bg-eduOrange text-white px-4 py-2 rounded-lg">
          Time: {timeLeft}s
        </div>
      </div>
      
      {!gameActive && !gameOver && (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold mb-4">Ready to Race?</h2>
          <p className="mb-6">Use left and right arrow keys to move your car to the correct lane!</p>
          <button 
            onClick={startGame}
            className="btn btn-primary flex items-center justify-center mx-auto space-x-2"
          >
            <Play size={20} />
            <span>Start Game</span>
          </button>
        </div>
      )}
      
      {gameActive && (
        <div className="mb-8">
          <div className="bg-eduBlue text-white p-4 rounded-xl mb-4 text-center">
            <h3 className="text-xl font-bold">{currentQuestionData.question}</h3>
          </div>
          
          {/* Game road */}
          <div className="road h-80 rounded-lg flex">
            <div className="w-1/3 lane relative flex items-end justify-center pb-4">
              <div className="absolute top-0 w-full h-full flex items-center justify-center">
                <div className="bg-white p-4 rounded-full text-2xl">
                  {currentQuestionData.options[0]}
                </div>
              </div>
              {carPosition === 0 && (
                <div className="car w-24 h-24 text-4xl bg-eduRed transform transition-all duration-200">
                  🏎️
                </div>
              )}
            </div>
            
            <div className="w-1/3 lane relative flex items-end justify-center pb-4">
              <div className="absolute top-0 w-full h-full flex items-center justify-center">
                <div className="bg-white p-4 rounded-full text-2xl">
                  {currentQuestionData.options[1]}
                </div>
              </div>
              {carPosition === 1 && (
                <div className="car w-24 h-24 text-4xl bg-eduRed transform transition-all duration-200">
                  🏎️
                </div>
              )}
            </div>
            
            <div className="w-1/3 lane relative flex items-end justify-center pb-4">
              <div className="absolute top-0 w-full h-full flex items-center justify-center">
                <div className="bg-white p-4 rounded-full text-2xl">
                  {currentQuestionData.options[2]}
                </div>
              </div>
              {carPosition === 2 && (
                <div className="car w-24 h-24 text-4xl bg-eduRed transform transition-all duration-200">
                  🏎️
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile controls */}
          <div className="flex justify-between mt-4 md:hidden">
            <button 
              onClick={moveLeft}
              className="bg-eduBlue text-white p-4 rounded-full"
            >
              ←
            </button>
            <button 
              onClick={checkAnswer}
              className="bg-eduGreen text-white px-8 py-4 rounded-xl font-bold"
            >
              SELECT
            </button>
            <button 
              onClick={moveRight}
              className="bg-eduBlue text-white p-4 rounded-full"
            >
              →
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            <button 
              onClick={checkAnswer}
              className="btn btn-success hidden md:flex"
            >
              Submit Answer
            </button>
          </div>
        </div>
      )}
      
      {gameOver && (
        <div className="text-center py-10 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
          <p className="text-2xl mb-4">Your Score: <span className="text-eduBlue font-bold">{score}</span></p>
          <div className="space-x-4">
            <button 
              onClick={startGame}
              className="btn btn-primary"
            >
              Play Again
            </button>
            <button 
              onClick={() => navigate('/')}
              className="btn btn-secondary"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
