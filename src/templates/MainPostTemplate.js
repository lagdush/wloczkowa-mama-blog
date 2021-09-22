import React from 'react';
import { graphql } from 'gatsby';
import { Template } from './Template';

export const query = graphql`
  query ($slug: String!) {
    datoCmsMainpost(slug: { eq: $slug }) {
      title
      slug
      preview
      image {
        gatsbyImageData(placeholder: TRACED_SVG)
        alt
        title
      }
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      meta {
        createdAt
      }
    }
  }
`;

const MainPostTemplate = ({ data, pageContext }) => {
  const { html } = data.datoCmsMainpost.contentNode.childMarkdownRemark;
  const {
    title,
    preview,
    image,
    meta: { createdAt },
  } = data.datoCmsMainpost;
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

export default MainPostTemplate;
