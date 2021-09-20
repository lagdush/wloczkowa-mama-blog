const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
const { createPage } = actions;
const pageTemplate = path.resolve(`./src/templates/PostTemplate.js`);
const result = await graphql(`
  query {
    allDatoCmsPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          slug
        }
      }
    }
  }
`);
const posts = result.data.allDatoCmsPost.edges;
posts.forEach(({ node }, index) => {
  const { slug } = node;

  createPage({
    path: `/blog/${slug}`,
    component: pageTemplate,
    context: {
      slug,
    },
  });
});
};
