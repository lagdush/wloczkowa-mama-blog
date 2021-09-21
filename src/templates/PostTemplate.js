import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import { Layout } from '../components/Layout';
import IconWithEyes from '../../static/assets/iconWithEyes.inline.svg';
import { PostsPreview } from './PostsPreview';
import { post } from './postPreview.style.css';

export const query = graphql`
  query ($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      date
      title
      preview
      meta {
        createdAt
      }
      image {
        gatsbyImageData(placeholder: TRACED_SVG)
        alt
      }
      slug
    }
  }
`;

const PostTemplate = ({ data, pageContext }) => {
  const { html } = data.datoCmsPost.contentNode.childMarkdownRemark;
  const {
    title,
    preview,
    image,
    meta: { createdAt },
  } = data.datoCmsPost;
  const postImage = getImage(image);
  return (
    <Layout>
      <Seo title={title} />
      <section>
        <h1 className="text-center pb-6 xl:pb-20">{title}</h1>
        <p className="text-center w-screen pb-16 xl:pb-12">{preview}</p>
        <GatsbyImage
          className="xl:h-article"
          image={postImage}
          alt={image.alt}
        />

        <article className="px-5 xl:px-72">
          <div className="border-2 border-black my-6 xl:my-8" />
          <p className="font-bold">Karolina Żurawska</p>
          <p className="font-serif text-base">
            Opublikowano: {createdAt.slice(0, 10)}
          </p>
          <div
            className="post xl:pt-14 xl:pb-16"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <p>Dzięki za czytanie 😍</p>
          <button className="mt-16 xl:ml-8">
          {/* TODO:check it */}
            <a
              className="hover:text-black"
              href="https://www.facebook.com/sharer/sharer.php?u=example.org"
              target="_blank"
            >
              Podziel się na facebooku
            </a>
          </button>
        </article>
      </section>
      <section className="pt-24">
        <IconWithEyes className="w-full" />
        <PostsPreview />
      </section>
    </Layout>
  );
};

export default PostTemplate;
