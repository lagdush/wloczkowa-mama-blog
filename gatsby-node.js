const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/PostTemplate.js`);
  const articleTemplate = path.resolve(`./src/templates/MainPostTemplate.js`);
  const productPageTemplate = path.resolve(
    './src/templates/ProductTemplate.js'
  );

  const result = await graphql(`
    {
      allDatoCmsPost {
        edges {
          node {
            slug
          }
        }
      }
      allDatoCmsMainpost {
        edges {
          node {
            slug
          }
        }
      }
      allDatoCmsProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.error) {
    reporter.panicOnBuild('Build Problem', result.error);
  }

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

  const article = result.data.allDatoCmsMainpost.edges;
  article.forEach(({ node }) => {
    const { slug } = node;
    createPage({
      path: `/blog/${slug}`,
      component: articleTemplate,
      context: {
        slug,
      },
    });
  });

  const products = result.data.allDatoCmsProject.edges;
  products.forEach(({ node }) => {
    const { slug } = node;
    createPage({
      path: `/projects/${slug}`,
      component: productPageTemplate,
      context: {
        slug,
      },
    });
  });
};
