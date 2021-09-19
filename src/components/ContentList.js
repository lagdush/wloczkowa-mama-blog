import React from 'react';
import { ContentPreview } from './ContentPreview';

export const ContentList = ({ sectionTitle, data }) => {
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="w-full border-b-2 border-black" />
            <h2 className="pt-14 pb-7 lg:pb-10 lg:pt-16">{sectionTitle}</h2>
            <div className="grid gap-y-11 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                {data.map((nodes) => {
                    const post = nodes.node;
                    const { image, title, slug } = post;
                    return (
                        <ContentPreview
                            key={nodes.node.id}
                            image={image}
                            title={title}
                            slug={slug}
                        />
                    );
                })}
            </div>
        </section>
    );
};
