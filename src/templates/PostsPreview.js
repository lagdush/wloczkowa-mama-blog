import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { ContentPreview } from '../components/ContentPreview';
import IconWithEyes from '../../static/assets/iconWithEyes.inline.svg';
import { usePost } from '../hooks/usePost';

export const PostsPreview = ({ postSlug }) => {
  const posts = usePosts();
  const {
    slug: mainArticleSlug,
    title: mainArticleTitle,
    image: mainArticleImage,
  } = usePost();
  //remove from posts array current article
  const filterPosts = posts.filter((nodes) => {
    const post = nodes.node;
    const { slug } = post;
    return slug !== postSlug;
  });

  return (
    <section className="flex flex-col justify-center items-center">
      <IconWithEyes className="w-full" />
      <h2 className="pt-14 pb-7 xl:pb-7 xl:pt-16">Przeczytaj również:</h2>
      <article className="grid gap-y-11 md:grid-cols-2 2xl:grid-cols-3 xl:gap-7">
        {!filterPosts.length && (
          <ContentPreview
            key={mainArticleSlug}
            image={mainArticleImage}
            title={mainArticleTitle}
            slug={mainArticleSlug}
          />
        )}
        {filterPosts.map((nodes) => {
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
      </article>
    </section>
  );
};
