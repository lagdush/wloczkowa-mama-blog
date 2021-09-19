import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const InstagramPreview = ({ image = '', slug = '' }) => {
  const imageSrc = getImage(image);
  return (
    <a
      href={slug}
      className="flex flex-col w-80 h-64"
    >
      <GatsbyImage
        image={imageSrc}
        alt="Fotografia z Instagrama włóczkowa mama"
      />
    </a>
  );
};
