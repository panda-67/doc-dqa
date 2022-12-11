const path = require("path")
const slugify = require(`@sindresorhus/slugify`)
const contentTemplate = path.resolve(`./src/templates/content.jsx`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: 'slug',
      value: slugify(node.frontmatter.title)
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
  }

  // Create blog post pages.
  const content = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  content.forEach((node) => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `/${node.fields.slug}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${contentTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}