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
                gatsbyImageData(placeholder: TRACED_SVG)
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
