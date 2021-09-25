import React from 'react';
import { Label } from './Label';

export const Input = ({
  placeholder,
  label,
  aria,
  id,
  type = 'text',
  disabled = false,
}) => {
  return (
    <div className="flex items-start justify-center flex-col border-b border-highlighted py-2">
      <Label id={id}>{label}</Label>
      <input
        id={id}
        className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 leading-tight focus:outline-none"
        type={type}
        placeholder={placeholder}
        aria-label={aria}
        disabled={disabled}
      />
    </div>
  );
};
