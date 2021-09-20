import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { ContentPreview } from './ContentPreview';

export const ContentList = () => {
  const posts = usePosts();
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-full border-b-2 border-black" />
      <h2 className="pt-14 pb-7 xl:pb-10 xl:pt-16">Moje posty</h2>
      <div className="grid gap-y-11 md:grid-cols-2 xl:gap-x-8 xl:gap-y-16">
        {posts.map((nodes) => {
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
