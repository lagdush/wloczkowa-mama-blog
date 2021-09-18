import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export const ContentPreview = ({ image, title, slug }) => {
    const imageSrc = getImage(image);
    return (
        <Link to={`/blog/${slug}`} className="flex flex-col w-80 h-64">
            <GatsbyImage image={imageSrc} alt={imageSrc.alt} />
            <p className="pt-5">{title}</p>
        </Link>
    );
};
