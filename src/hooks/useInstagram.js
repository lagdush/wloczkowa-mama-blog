import { useStaticQuery, graphql } from 'gatsby';

export const useInstagram = () => {
  const instagram = useStaticQuery(
    graphql`
      query {
        allInstagramContent {
          edges {
            node {
              localImage {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG, height: 256)
                }
              }
              permalink
            }
          }
        }
      }
    `
  );
  return instagram.allInstagramContent.edges;
};
