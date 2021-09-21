import React from 'react';

export const Textarea = () => {
  return (
    <div className="flex items-center border-b border-highlighted py-2">
      <textarea
        className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
        placeholder="Wiadomość"
        aria-label="Wiadomość"
        rows={5}
      />
    </div>
  );
};
