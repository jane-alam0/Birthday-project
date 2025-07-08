import React from 'react';

const FireworksDisplay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 firework"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-80" />
          
          {/* Sparks */}
          {Array.from({ length: 8 }).map((_, j) => (
            <div
              key={j}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${j * 45}deg) translateY(-20px)`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FireworksDisplay;