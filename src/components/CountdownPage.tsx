import React, { useState, useEffect } from "react";
import { Clock, Calendar, Sparkles, Heart, Gift } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import ConfettiRain from "./ConfettiRain";

interface CountdownPageProps {
  birthdayDate: Date;
  onBirthdayReached: () => void;
  musicPlaying: boolean;
  onToggleMusic: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownPage: React.FC<CountdownPageProps> = ({
  birthdayDate,
  onBirthdayReached,
  musicPlaying,
  onToggleMusic,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthdayDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        onBirthdayReached();
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [birthdayDate, onBirthdayReached]);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen animated-gradient flex items-center justify-center relative overflow-hidden">
      <FloatingParticles />
      <ConfettiRain />

      {/* Twinkling Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
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

      <div className="text-center px-4 sm:px-8 fade-in">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-full bounce">
              <Gift className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-4 glow">
            Happy Birthday in Advance,
          </h1>
          <h2 className="text-5xl sm:text-7xl font-bold dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-6 glow">
            Subrota!
          </h2>

          <p className="text-xl sm:text-2xl text-gray-700 mb-8 poppins">
            Your Special Day is Almost Here!
          </p>

          <div className="flex justify-center space-x-3 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Heart
                key={i}
                className="text-pink-500 heartbeat"
                style={{ animationDelay: `${i * 0.3}s` }}
                size={20}
              />
            ))}
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 poppins">
              Countdown to Magic
            </h3>
          </div>

          <div className="grid grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl p-4 sm:p-6 pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl sm:text-5xl font-bold mb-2 dancing-script">
                  {formatNumber(item.value)}
                </div>
                <div className="text-sm sm:text-base font-medium poppins">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Birthday Date */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-purple-600 mr-2" />
            <h4 className="text-xl font-semibold text-gray-800 poppins">
              The Big Day
            </h4>
          </div>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dancing-script">
            {birthdayDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
