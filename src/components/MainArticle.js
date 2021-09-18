import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { usePost } from '../hooks/usePost';

export const MainArticle = () => {
    const { slug, title, image, contentNode } = usePost();
    const imageSrc = getImage(image);
    return (
        <div
            style={{ width: '804px', minHeight: '858px' }}
            className="lg:mb-16"
        >
            <Link
                to={`/blog/${slug}`}
                className="flex flex-col justify-center items-center"
            >
                <GatsbyImage image={imageSrc} alt={imageSrc.alt} />
                <h1 className="lg:pt-11 lg:pb-20">{title}</h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: `${contentNode.childMarkdownRemark.html.slice(
                            0,
                            40
                        )}...`,
                    }}
                />
            </Link>
        </div>
    );
};
