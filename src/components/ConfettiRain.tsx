import React from 'react';

const ConfettiRain: React.FC = () => {
  const colors = [
    'bg-pink-400',
    'bg-purple-400',
    'bg-yellow-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-red-400',
    'bg-indigo-400',
    'bg-orange-400',
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 ${colors[Math.floor(Math.random() * colors.length)]} confetti`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiRain;