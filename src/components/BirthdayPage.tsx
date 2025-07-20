import React, { useState, useEffect } from "react";
import { Sparkles, Heart, Gift, PartyPopper } from "lucide-react";
import FireworksDisplay from "./FireworksDisplay";

interface BirthdayPageProps {
  onComplete: () => void;
  musicPlaying: boolean;
  onToggleMusic: () => void;
}

const BirthdayPage: React.FC<BirthdayPageProps> = ({
  onComplete,
  musicPlaying,
  onToggleMusic,
}) => {
  const [showFireworks, setShowFireworks] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Sequence of animations
    const timeouts = [
      setTimeout(() => setAnimationPhase(1), 1000),
      setTimeout(() => setAnimationPhase(2), 3000),
      setTimeout(() => setAnimationPhase(3), 5000),
      setTimeout(() => setShowFireworks(false), 6000),
      setTimeout(() => onComplete(), 8000),
    ];

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen animated-gradient flex items-center justify-center relative overflow-hidden">
      {showFireworks && <FireworksDisplay />}

      {/* Floating Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute balloon"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div
              className={`w-8 h-10 rounded-full ${
                [
                  "bg-pink-400",
                  "bg-purple-400",
                  "bg-yellow-400",
                  "bg-blue-400",
                  "bg-green-400",
                ][Math.floor(Math.random() * 5)]
              }`}
            />
          </div>
        ))}
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300 sparkle"
            size={Math.random() * 30 + 15}
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
            Created by{" "}
            <span className="text-purple-600 font-semibold">Jane Alam</span>
          </p>
        </div>
      </div>

      <div className="text-center px-4 sm:px-8 z-10">
        <div
          className={`transition-all duration-1000 ${
            animationPhase >= 1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-full bounce">
              <PartyPopper className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-8xl font-bold dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-6 glow">
            Happy Birthday,
          </h1>
          <h2 className="text-6xl sm:text-9xl font-bold dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-8 glow">
            Suvrota!
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            animationPhase >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-2xl sm:text-4xl text-gray-700 mb-8 poppins font-semibold">
            Let's Celebrate Your Special Day!
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            {Array.from({ length: 7 }).map((_, i) => (
              <Heart
                key={i}
                className="text-pink-500 heartbeat"
                style={{ animationDelay: `${i * 0.2}s` }}
                size={32}
              />
            ))}
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-1000 ${
            animationPhase >= 3
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 poppins">
                The celebration continues...
              </h3>
            </div>

            <p className="text-lg sm:text-xl text-gray-700 poppins">
              Get ready for some special messages crafted just for you! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPage;
