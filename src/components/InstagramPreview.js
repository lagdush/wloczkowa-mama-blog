import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const InstagramPreview = ({ image = '', slug = '' }) => {
  const imageSrc = getImage(image);
  return (
    <a href={slug} className="flex flex-col w-80 h-64 px-5 xl:px-0">
      <GatsbyImage
        loading="eager"
        className="shadow-md"
        image={imageSrc}
        alt="Fotografia z Instagrama włóczkowa mama"
      />
    </a>
  );
};
