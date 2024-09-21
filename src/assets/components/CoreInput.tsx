import React from 'react';
import { ICoreInputProps } from '../../types/types';

const CoreInput: React.FC<ICoreInputProps> = ({
    id,
    type,
    ariaLabel,
    value,
    placeholder,
    className = '',
    onChange,
    formValidation,
    formDafaultMessage,
    formValidationFailedMessage,
    success
}) => {
    const baseClass = 'text-md rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500';

    const inputClass = formValidation && !success
        ? `${baseClass} bg-red-50 border-2 border-red-500 text-red-900 dark:text-red-400 placeholder-red-700 dark:placeholder-red-500`
        : `${baseClass} bg-gray-50 border border-gray-300 text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`;

    const message = formValidation && !success
        ? formValidationFailedMessage
        : formDafaultMessage;



    return (
        <div className={`mb-6 ${className}`}>
            <label htmlFor={id.toString()} className='block mb-2 text-md font-medium text-white dark:text-white'>
                {ariaLabel}
            </label>
            <input
                type={type}
                id={id.toString()}
                className={inputClass}
                placeholder={placeholder}
                value={value}
                aria-label={ariaLabel}
                onChange={onChange}
            />
            <p >
                <span className={`mt-2 text-sm font-medium ${formValidation && !success ? 'text-red-600 dark:text-red-500' : 'text-green-300 dark:text-green-400'}`}>
                    {message}
                </span>
            </p>


        </div>
    );
};

export default CoreInput;
