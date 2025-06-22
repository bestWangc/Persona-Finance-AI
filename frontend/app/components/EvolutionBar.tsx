'use client';

import React from 'react';

interface EvolutionBarProps {
  level: number;
  currentXP: number;
  maxXP: number;
  className?: string;
}

const EvolutionBar: React.FC<EvolutionBarProps> = ({
  level,
  currentXP,
  maxXP,
  className = ''
}) => {
  const percentage = Math.min((currentXP / maxXP) * 100, 100);

  return (
    <div className={`evolution-bar ${className}`}>
      <div className="level text-sm text-[#00ff9d] mb-2 font-mono">
        Level {level} • {currentXP}/{maxXP} XP
      </div>
      <div className="xp-bar h-2.5 bg-blue-900/40 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#bd00ff] to-[#00ff9d] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default EvolutionBar;
