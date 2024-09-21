import React from 'react';
import { IBadgeProps } from '../../types/types';

const CoreBadge: React.FC<IBadgeProps> = ({ text, color = 'bg-gray-300', size = 'medium' }) => {
    const sizeClasses = {
      small: 'text-xs px-1 py-0.5',
      medium: 'text-sm px-2 py-1',
      large: 'text-lg px-3 py-1.5',
    };
  
    return (
        <span className={`inline-flex items-center justify-center rounded ${color} text-white font-bold text-xl ${sizeClasses[size]} min-w-8`}>
        {text}
      </span>
    );
  };

  export default CoreBadge;