import React from 'react';

interface CoreCheckboxProps {
    id: string;
    label: string;
    checked?: boolean;
    readonly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CoreCheckbox: React.FC<CoreCheckboxProps> = ({ id, label, checked = false, readonly = false, onChange }) => {
    return (
        <div className="flex items-center mb-4">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                readOnly={readonly}
                onChange={onChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={id} className="ms-2 text-sm font-medium text-white dark:text-gray-300">
                {label}
            </label>
        </div>
    );
};

export default CoreCheckbox;
