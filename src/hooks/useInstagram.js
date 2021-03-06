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
                  gatsbyImageData(
                    placeholder: TRACED_SVG
                    layout: CONSTRAINED
                    transformOptions: { fit: CONTAIN, cropFocus: CENTER }
                    quality: 70
                    width: 256
                    height: 320
                  )
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
