import React from 'react';

export const Label = ({ children, id }) => {
  return (
    <label className="block w-full text-center text-base font-bold py-4" htmlFor={id}>
      {children}
    </label>
  );
};
