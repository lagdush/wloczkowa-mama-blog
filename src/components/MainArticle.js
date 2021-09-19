import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { usePost } from '../hooks/usePost';

export const MainArticle = () => {
    const { slug, title, image, preview } = usePost();
    const imageSrc = getImage(image);
    return (
        <div
            style={{ width: '804px', minHeight: '858px' }}
            className="lg:mb-16"
        >
            <Link
                to={`/blog/${slug}`}
                className=" text-center flex flex-col justify-center items-center"
            >
                <GatsbyImage image={imageSrc} alt={image.alt} />
                <h1 className="lg:pt-11 lg:pb-20">{title}</h1>
                <p
                    className="text-base font-sans text-secondary lg:text-xl"
                    dangerouslySetInnerHTML={{
                        __html: `${preview}`,
                    }}
                />
            </Link>
        </div>
    );
};
