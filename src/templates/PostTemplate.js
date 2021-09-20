import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import { Layout } from '../components/Layout';
import IconWithEyes from '../../static/assets/iconWithEyes.inline.svg';

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
  const slug = pageContext;
  console.log(data, slug);
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
        <h1>{title}</h1>
        <p>{preview}</p>

        <GatsbyImage image={postImage} alt={image.alt} />
        <div className="border-2 border-black" />
        <p>{createdAt}</p>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <button>Podziel się na facebooku</button>
        <IconWithEyes className="h-20" />
      </section>
    </Layout>
  );
};

export default PostTemplate;
