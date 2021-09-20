import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { ContentPreview } from '../components/ContentPreview';

export const PostsPreview = () => {
  const posts = usePosts();
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="pt-14 pb-7 xl:pb-7 xl:pt-16">Przeczytaj również:</h2>
      <div className="grid gap-y-11 md:grid-cols-2 2xl:grid-cols-3 xl:gap-7">
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
