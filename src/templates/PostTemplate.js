import React from 'react';
import { graphql } from 'gatsby';
import { Template } from './Template';

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
        title
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

  return (
    <Template
      html={html}
      title={title}
      image={image}
      preview={preview}
      create={createdAt}
    />
  );
};

export default PostTemplate;
