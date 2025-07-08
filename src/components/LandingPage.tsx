import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Gift } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import myAudio from '../../public/cool_music.mp3';

interface LandingPageProps {
  onPasswordSuccess: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onPasswordSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (password === 'shahrear') {
        onPasswordSuccess();
        const audio = new Audio(myAudio);
        audio.loop = true; 
        audio.play();
        
      } else {
        setError('Oops! Try again, my Fariha!');
        setPassword('');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen animated-gradient flex items-center justify-center relative overflow-hidden">
      <FloatingParticles />
      
      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkles
            key={i}
            className={`absolute text-yellow-300 sparkle`}
            size={Math.random() * 20 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Created by Shahrear - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 shadow-lg">
          <p className="text-sm text-gray-700 poppins font-medium">
            Created by <span className="text-purple-600 font-semibold">Shahrear</span>
          </p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-md w-full mx-4 fade-in">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full bounce">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-4 glow">
            Something Special for You,
          </h1>
          <h2 className="text-5xl sm:text-6xl font-bold dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-6 glow">
            Fariha!
          </h2>
          
          <div className="flex justify-center space-x-2 mb-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Heart
                key={i}
                className="text-pink-500 heartbeat"
                style={{ animationDelay: `${i * 0.5}s` }}
                size={24}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 poppins">
              Enter the secret word to unlock your surprise
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 poppins"
              placeholder="Type your ex bf name..."
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center poppins slide-in">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed poppins"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Unlocking...
              </span>
            ) : (
              'Unlock the Magic ✨'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 poppins">
            Created with 💜 just for Fariha

          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;