import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const ProductCard = ({ image, title, description }) => {
  const imageSrc = getImage(image);
  return (
    <article className=" flex flex-col w-full justify-between items-center p-8 mb-8 border-2 border-highlighted xl:grid xl:grid-cols-2 xl:place-items-center xl:gap-8 xl:mt-8 xl:h-96 xl:p-5 xl:mb-0">
      <GatsbyImage
        className="h-mobile sm:h-96"
        image={imageSrc}
        alt={image.alt}
      />
      <div className="flex flex-col gap-y-5 place-self-start">
        <p className="pt-5 text-left  text-xl xl:text-4xl font-bold">{title}</p>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </article>
  );
};
