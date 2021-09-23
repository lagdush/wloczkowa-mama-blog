import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout } from '../components/Layout';
import Seo from '../components/seo';

export const query = graphql`
  query ($slug: String!) {
    datoCmsProject(slug: { eq: $slug }) {
      productDescriptionNode {
        childMarkdownRemark {
          html
        }
      }
      productName
      slug
      productPhoto {
        alt
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
`;

const ProductTemplate = ({ data, pageContext }) => {
  const { html } =
    data.datoCmsProject.productDescriptionNode.childMarkdownRemark;
  const { productName, productPhoto } = data.datoCmsProject;
  const postImage = getImage(productPhoto);
  return (
    <Layout>
      <Seo title={productName} />
      <section>
        <h1 className="text-center pb-6 xl:pb-20">{productName}</h1>
        <GatsbyImage
          className="xl:h-article xl:w-screen"
          image={postImage}
          alt={productPhoto.alt}
        />

        <article className="px-5 xl:px-72">
          <div className="border-2 border-black my-6 xl:my-8" />
          <div
            className="post xl:pt-14 xl:pb-16"
            dangerouslySetInnerHTML={{ __html: html }}
          />

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
    </Layout>
  );
};

export default ProductTemplate;
