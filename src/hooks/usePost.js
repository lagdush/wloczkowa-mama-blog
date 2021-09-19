import { useStaticQuery, graphql } from 'gatsby';

export const usePost = () => {
    const post = useStaticQuery(
        graphql`
            query {
                datoCmsMainpost {
                    title
                    slug
                    preview
                    date
                    image {
                        gatsbyImageData(placeholder: TRACED_SVG)
                        alt
                    }
                    content
                }
            }
        `
    );
    return post.datoCmsMainpost;
};
