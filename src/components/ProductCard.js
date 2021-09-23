import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export const ProductCard = ({ image, title, slug }) => {
  const imageSrc = getImage(image);
  return (
    <Link to={`/projects/${slug}`}>
      <article className="flex flex-col w-full justify-between items-center p-8 mb-8 xl:shadow-xl">
        <GatsbyImage
          className="w-screen h-mobile sm:h-96 xl:w-superLarge xl:h-superLarge"
          image={imageSrc}
          alt={image.alt}
        />
        <div className="flex flex-col justify-center items-center gap-y-5">
          <p className="pt-5 text-xl text-center xl:text-4xl font-bold">
            {title}
          </p>

          <p className='underline'>Czytaj więcej</p>
        </div>
      </article>
    </Link>
  );
};
