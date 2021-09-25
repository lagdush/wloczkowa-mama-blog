import React from 'react';

import { FacebookShareButton, FacebookIcon } from 'react-share';

export const FacebookButton = ({ url }) => {
  return (
    <FacebookShareButton
      url={url}
      className="inline-block px-10 py-5 mt-16 xl:ml-8"
    >
      <FacebookIcon size={40}  />
    </FacebookShareButton>
  );
};
