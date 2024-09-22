import React from 'react';
import { CoreLoadingBarProps } from '../../types/types';

const CoreLoadingBar: React.FC<CoreLoadingBarProps> = ({ size, progress, hidden }) => {
    if (hidden) return null; // Não renderiza se hidden for true

    // Define a altura com base no tamanho
    const heightClass = {
        small: 'h-1.5',
        default: 'h-2.5',
        large: 'h-4',
        'extra-large': 'h-6',
    }[size];

    return (
        <div className="relative w-full mb-4">
            <div className={`w-full bg-gray-200 rounded-full ${heightClass} dark:bg-gray-700`}>
                <div
                    className={`bg-blue-600 rounded-full dark:bg-blue-500`}
                    style={{ width: `${progress}%`, height: '100%' }} // Certifique-se de usar 100% de altura
                ></div>
            </div>
        </div>
    );
};

export default CoreLoadingBar;
