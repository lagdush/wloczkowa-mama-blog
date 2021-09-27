import React from 'react';
import { Label } from './Label';

export const Textarea = ({ label, id }) => {
  return (
    <div className="flex flex-col items-center border-b border-highlighted py-2">
      <Label id={id}>{label}</Label>
      <textarea
        id={id}
        name={id}
        className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
        placeholder="Wiadomość"
        aria-label="Wiadomość"
        rows={5}
      />
    </div>
  );
};
