import React from 'react';

type InputFieldProps = {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} type={type} value={value} onChange={onChange} />
    </div>
);
