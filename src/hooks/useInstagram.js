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
                  gatsbyImageData(placeholder: BLURRED, formats: WEBP)
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
