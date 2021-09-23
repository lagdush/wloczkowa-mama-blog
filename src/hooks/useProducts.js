import { useStaticQuery, graphql } from 'gatsby';

export const useProducts = () => {
  const products = useStaticQuery(
    graphql`
      query {
        allDatoCmsProject {
          edges {
            node {
              productDescriptionNode {
                childMarkdownRemark {
                  html
                }
              }
              productName
              productPhoto {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  layout: CONSTRAINED
                  aspectRatio: 1.5
                )
                alt
              }
              slug
            }
          }
        }
      }
    `
  );
  return products.allDatoCmsProject.edges;
};
