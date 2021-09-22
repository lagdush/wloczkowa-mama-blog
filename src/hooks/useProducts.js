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
                  layout: FIXED
                  height: 300
                )
                alt
              }
            }
          }
        }
      }
    `
  );
  return products.allDatoCmsProject.edges;
};
