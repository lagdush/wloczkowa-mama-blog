import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export const ContentPreview = ({ image, title, slug }) => {
  const imageSrc = getImage(image);
  return (
    <Link to={`/blog/${slug}`} className="flex flex-col px-5 w-80 xl:px-0 ">
      <GatsbyImage className="h-44" image={imageSrc} alt={image.alt} />
      <p className="pt-5 text-center">{title}</p>
    </Link>
  );
};
