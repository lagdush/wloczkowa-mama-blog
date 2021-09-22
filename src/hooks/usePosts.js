import { useStaticQuery, graphql } from 'gatsby';

export const usePosts = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allDatoCmsPost(sort: { order: DESC, fields: date }) {
          edges {
            node {
              id
              preview
              meta {
                createdAt
              }
              slug
              title
              contentNode {
                childMarkdownRemark {
                  html
                }
              }
              image {
                alt
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `
  );

  return posts.allDatoCmsPost.edges;
};
