import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export const ProductCard = ({ image, title, slug }) => {
  const imageSrc = getImage(image);
  return (
    <Link to={`/projects/${slug}`}>
      <article className="flex flex-col w-full justify-between items-center mb-8 sm:shadow-md sm:p-5 xl:p-8 xl:shadow-xl">
        <GatsbyImage
          className="w-screen h-mobile sm:w-80 sm:h-96 md:w-aboutWidth lg:w-superLarge lg:h-superLarge"
          image={imageSrc}
          alt={image.alt}
          loading="eager"
        />
        <div className="flex flex-col justify-center items-center gap-y-5">
          <p className="pt-5 text-xl text-center xl:text-4xl font-bold">
            {title}
          </p>

          <p className="underline">Czytaj więcej</p>
        </div>
      </article>
    </Link>
  );
};
