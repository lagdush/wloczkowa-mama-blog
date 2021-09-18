import { useStaticQuery, graphql } from 'gatsby';

export const usePost = () => {
    const post = useStaticQuery(
        graphql`
            query {
                datoCmsPost {
                    slug
                    title
                    image {
                        alt
                        gatsbyImageData(placeholder: TRACED_SVG)
                    }
                    contentNode {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        `
    );
    return post.datoCmsPost;
};
