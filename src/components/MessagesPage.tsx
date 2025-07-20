import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  RotateCcw,
  Play,
  Pause,
} from "lucide-react";
import FloatingParticles from "./FloatingParticles";

interface MessagesPageProps {
  musicPlaying: boolean;
  onToggleMusic: () => void;
}

const messages = [
  {
    text: "Suvrota, you light up my world like nobody else!",
    emoji: "✨",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    text: "Your smile is my favorite thing to see every day!",
    emoji: "😊",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    text: "Here's to a year full of love, laughter, and adventures!",
    emoji: "🎉",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    text: "You're my Mayabini, today and always!",
    emoji: "💜",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    text: "Happy Birthday to the most beautiful soul I know!",
    emoji: "🌟",
    gradient: "from-yellow-500 to-pink-500",
  },
  {
    text: "May your dreams soar as high as these balloons!",
    emoji: "🎈",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    text: "Every moment with you feels like a celebration!",
    emoji: "🎊",
    gradient: "from-green-500 to-blue-500",
  },
  {
    text: "Here's to making more unforgettable memories together!",
    emoji: "📸",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    text: "You make every day brighter, my love!",
    emoji: "☀️",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    text: "Cheers to your incredible heart and spirit!",
    emoji: "🥂",
    gradient: "from-pink-500 to-red-500",
  },
  {
    text: "Wishing you all the happiness in the world!",
    emoji: "🌍",
    gradient: "from-teal-500 to-blue-500",
  },
  {
    text: "Happy Birthday, Suvrota – I'm so grateful for you!",
    emoji: "🙏",
    gradient: "from-purple-500 to-pink-500",
  },
];

const MessagesPage: React.FC<MessagesPageProps> = ({
  musicPlaying,
  onToggleMusic,
}) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
      setKey((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextMessage = () => {
    setCurrentMessage((prev) => (prev + 1) % messages.length);
    setKey((prev) => prev + 1);
  };

  const prevMessage = () => {
    setCurrentMessage((prev) => (prev - 1 + messages.length) % messages.length);
    setKey((prev) => prev + 1);
  };

  const restartSequence = () => {
    setCurrentMessage(0);
    setKey((prev) => prev + 1);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentMsg = messages[currentMessage];

  return (
    <div className="min-h-screen animated-gradient flex items-center justify-center relative overflow-hidden">
      <FloatingParticles />

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300 sparkle"
            size={Math.random() * 25 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Created by Jane Alam - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 shadow-lg">
          <p className="text-sm text-gray-700 poppins font-medium">
            Created by{" "}
            <span className="text-purple-600 font-semibold">Jane Alam</span>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
        {/* Header */}
        <div className="mb-8 fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-4 glow">
            Special Messages for You
          </h1>
          <div className="flex justify-center space-x-3 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Heart
                key={i}
                className="text-pink-500 heartbeat"
                style={{ animationDelay: `${i * 0.3}s` }}
                size={24}
              />
            ))}
          </div>
        </div>

        {/* Message Card */}
        <div
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl mb-8 fade-in"
          key={key}
        >
          <div className="mb-6">
            <div className={`text-6xl sm:text-8xl mb-6 bounce`}>
              {currentMsg.emoji}
            </div>
            <p className="text-2xl sm:text-4xl font-semibold text-gray-800 poppins leading-relaxed">
              {currentMsg.text}
            </p>
          </div>

          <div
            className={`w-full h-2 rounded-full bg-gradient-to-r ${currentMsg.gradient} mb-6`}
          />

          <div className="text-lg text-gray-600 poppins">
            Message {currentMessage + 1} of {messages.length}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <button
            onClick={prevMessage}
            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>

          <button
            onClick={toggleAutoPlay}
            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
          >
            {isAutoPlaying ? (
              <Pause className="w-6 h-6 text-purple-600" />
            ) : (
              <Play className="w-6 h-6 text-purple-600" />
            )}
          </button>

          <button
            onClick={restartSequence}
            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
          >
            <RotateCcw className="w-6 h-6 text-purple-600" />
          </button>

          <button
            onClick={nextMessage}
            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentMessage(index);
                setKey((prev) => prev + 1);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentMessage
                  ? "bg-purple-600 scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="mt-6 flex items-center justify-center space-x-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isAutoPlaying ? "bg-green-500" : "bg-gray-400"
            }`}
          />
          <span className="text-sm text-gray-600 poppins">
            {isAutoPlaying ? "Auto-playing" : "Paused"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
