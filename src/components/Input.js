import React from 'react';

export const Input = ({ placeholder, aria, type = 'text' }) => {
  return (
    <div class="flex items-center border-b border-highlighted py-2">
      <input
        class="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
        type={type}
        placeholder={placeholder}
        aria-label={aria}
      />
    </div>
  );
};
