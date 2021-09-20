import { useStaticQuery, graphql } from 'gatsby';

export const usePost = () => {
  const post = useStaticQuery(
    graphql`
      query {
        datoCmsMainpost {
          title
          slug
          preview
          image {
            gatsbyImageData(placeholder: TRACED_SVG)
            alt
            sizes(maxWidth: 854, maxHeight: 533) {
              base64
              width
              height
              tracedSVG
            }
          }
          content
        }
      }
    `
  );
  return post.datoCmsMainpost;
};
