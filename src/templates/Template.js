import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import { Layout } from '../components/Layout';
import IconWithEyes from '../../static/assets/iconWithEyes.inline.svg';
import { PostsPreview } from './PostsPreview';
import { post } from './postPreview.style.css';
export const Template = ({ html, title, preview, image, create }) => {
  const postImage = getImage(image);

  return (
    <Layout>
      <Seo title={title} />
      <section>
        <h1 className="text-center pb-6 xl:pb-20">{title}</h1>
        <p className="text-center w-screen pb-16 xl:pb-12">{preview}</p>
        <GatsbyImage
          className="xl:h-article xl:w-screen"
          image={postImage}
          alt={image.alt}
        />
        <p className="pl-5 text-xs">
          Autor zdjęcia: {image.title.toUpperCase()}
        </p>

        <article className="px-5 xl:px-72">
          <div className="border-2 border-black my-6 xl:my-8" />
          <p className="font-bold">Karolina Żurawska</p>
          <p className="font-serif text-base">
            Opublikowano: {create.slice(0, 10)}
          </p>
          <div
            className="post xl:pt-14 xl:pb-16"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <p>Dzięki za czytanie 😍</p>

          <a
            className="inline-block px-10 py-5 mt-16 border-highlighted border-2 text-highlighted hover:bg-highlighted hover:text-myWhite xl:ml-8"
            href="https://www.facebook.com/sharer/sharer.php?u=example.org"
            target="_blank"
            rel="noreferrer"
          >
            Podziel się na facebooku
          </a>
        </article>
      </section>
      <section className="pt-24">
        <IconWithEyes className="w-full" />
        <PostsPreview />
      </section>
    </Layout>
  );
};
