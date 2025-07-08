import React from 'react';
import { Heart, Star, Sparkles, Gift } from 'lucide-react';

const FloatingParticles: React.FC = () => {
  const particles = [
    { Icon: Heart, color: 'text-pink-400', size: 16 },
    { Icon: Star, color: 'text-yellow-400', size: 14 },
    { Icon: Sparkles, color: 'text-purple-400', size: 18 },
    { Icon: Gift, color: 'text-blue-400', size: 16 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => {
        const particle = particles[Math.floor(Math.random() * particles.length)];
        return (
          <div
            key={i}
            className="absolute float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <particle.Icon
              className={`${particle.color} opacity-60`}
              size={particle.size}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingParticles;