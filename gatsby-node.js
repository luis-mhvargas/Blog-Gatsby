const path = require("path")
const { paginate } = require('gatsby-awesome-pagination') 

exports.createPages = async function({ actions, graphql }) {
  const { createPage } = actions;
  const posts = await graphql(`
    query {
      allStrapiPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          title
          url
          content
          createdAt
          miniatura {
            localFile {
              publicURL
            }
          }
          seo_title
          seo_description
        }
      }
    }
  `);

  paginate({
    createPage,
    items:posts.data.allStrapiPost.nodes,
    itemsPerPage:5,
    pathPrefix:"/",
    component: path.resolve(`src/templates/blog.js`),
  })

  posts.data.allStrapiPost.nodes.forEach((post) => {
    createPage({
    path:`/${post.url}`,
    component: path.resolve(`src/templates/post/post.js`),
    context: {
      data:post,
     },
    })
  })

}
   