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
    formValidationFailedMessage? : string,
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
    size?: 'small' | 'medium' | 'large';
};

export interface RouteData {
    station: string;
    route: string;
    time: string;
    waiting: boolean;
}

export interface ProcessState {
    data: RouteData[];
}

export interface IStationColorMap {
    [stationNumber: number]: string;
  }
  