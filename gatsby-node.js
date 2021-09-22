const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/PostTemplate.js`);
  const articleTemplate = path.resolve(`./src/templates/MainPostTemplate.js`);

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

  const article = result.data.allDatoCmsMainpost.edges;
  article.forEach(({ node }) => {
    const { slug } = node;
    reporter.panicOnBuild(slug);
    createPage({
      path: `/blog/${slug}`,
      component: articleTemplate,
      context: {
        slug,
      },
    });
  });
};

// const path = require('path');

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;
//   const pageTemplate = path.resolve(`./src/templates/PostTemplate.js`);
//   const result = await graphql(`
//     query {
//       allDatoCmsPost(sort: { order: DESC, fields: date }) {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `);
//   const posts = result.data.allDatoCmsPost.edges;
//   posts.forEach(({ node }, index) => {
//     const { slug } = node;

//     createPage({
//       path: `/blog/${slug}`,
//       component: pageTemplate,
//       context: {
//         slug,
//       },
//     });
//   });

//   const MainPostTemplate = path.resolve(`./src/templates/MainPostTemplate.js`);
//   const mainArticle = await graphql(`
//     query {
//       datoCmsMainpost {
//         slug
//       }
//     }
//   `);

//   createPage({
//     path: `/blog/${mainArticle.data.datoCmsPost.slug}`,
//     component: MainPostTemplate,
//     context: {
//       slug: mainArticle.data.datoCmsPost.slug,
//     },
//   });
// };
