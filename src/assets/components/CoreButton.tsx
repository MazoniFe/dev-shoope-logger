import { CoreButtonProps } from "../../types/types";

const CoreButton: React.FC<CoreButtonProps> = ({
    type = 'button',
    label,
    onClick,
    variant = 'primary',
    disabled = false,
}) => {
    const baseStyles = 'px-10 py-2 rounded focus:outline-none';
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        orange: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default CoreButton;