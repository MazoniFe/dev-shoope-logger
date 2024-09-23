export interface ICoreInput {
    id: number | string;
    type: string;
    ariaLabel: string;
    value: string;
};

export interface ICoreInputProps extends ICoreInput {
    placeholder?: string;
    className?: string;
    success?: boolean;
    formDafaultMessage?: string,
    formValidationFailedMessage?: string,
    onChange: (prop?: any) => void;
    formValidation: boolean;
};

export interface CoreCheckboxProps {
    id: string;
    label: string;
    checked?: boolean;
    readonly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface CoreButtonProps {
    type?: 'button' | 'submit' | 'reset';
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger' | 'orange'
    disabled?: boolean;
};

export interface IBadgeProps {
    text: string;
    color?: string;
    size?: 'small' | 'medium' |'smedium' | 'large';
};

export interface IRouteData {
    id?: number | null;
    station: string;
    route: string;
    time: string;
    waiting: boolean;
}

export interface IAPIResponse {
    status: number;
    message: string;
}

export interface ProcessState {
    data: IRouteData[];
}

export interface AccessState {
    isAdmin: boolean;
}

export interface IStationColorMap {
    [stationNumber: number]: string;
}

export interface CoreSpinnerProps {
    size?: 'small' | 'medium' | 'large'; // Define os tamanhos possíveis
}

export interface CoreLoadingBarProps {
    size: 'small' | 'default' | 'large' | 'extra-large';
    progress: number;
    hidden: boolean;
}

export interface LoginFormState {
    isVisible: boolean;
}

export interface RootState {
    loginForm: LoginFormState 
}
