import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { usePost } from '../hooks/usePost';

export const MainArticle = () => {
  const { slug, title, image, preview } = usePost();
  const imageSrc = getImage(image);
  return (
    <div className="pb-8 text-4xl xl:pb-16 xl:w-extraLarge">
      <Link
        to={`/blog/${slug}`}
        className="text-center flex flex-col justify-center items-center"
      >
        <GatsbyImage
          className="w-screen h-mobile sm:h-96 xl:w-superLarge xl:h-superLarge"
          image={imageSrc}
          alt={image.alt}
        />
        <h1 className="px-5 pt-8 pb-20 xl:pt-11 xl:pb-20">{title}</h1>
        <p
          className="px-5 text-xl font-sans text-secondary xl:text-xl"
          dangerouslySetInnerHTML={{
            __html: `${preview}`,
          }}
        />
      </Link>
    </div>
  );
};
