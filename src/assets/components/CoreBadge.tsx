import React from 'react';
import { IBadgeProps } from '../../types/types';

const CoreBadge: React.FC<IBadgeProps> = ({ text, color = 'bg-gray-300', size = 'medium' }) => {
  const sizeClasses = {
    small: 'text-xs px-1.5 py-0.5 md:text-sm md:px-2 md:py-1',
    smedium: 'text-xs px-0.5 py-0.5 md:text-sm md:px-1.5 md:py-1.5',
    medium: 'text-sm px-1.5 py-1.5 md:text-base md:px-2 md:py-2',
    large: 'text-lg px-3 py-1.5 md:text-xl md:px-4 md:py-2',
};
  
    return (
        <span className={`inline-flex items-center justify-center text-center rounded ${color} text-white font-bold text-xl ${sizeClasses[size]} min-w-8`}>
        {text}
      </span>
    );
  };

  export default CoreBadge;