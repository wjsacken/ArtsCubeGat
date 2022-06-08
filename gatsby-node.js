/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/data": path.resolve(__dirname, "src/data/index"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/context": path.resolve(__dirname, "src/context/"),
        "@/css": path.resolve(__dirname, "src/assets/css/"),
        "@/images": path.resolve(__dirname, "src/assets/images/"),
      },
    },
  });
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFeedGatsbyBlog {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  result.data.allFeedGatsbyBlog.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.id,
      },
    })
  })
}
