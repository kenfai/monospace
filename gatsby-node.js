const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const artTemplate = path.resolve(`src/templates/art-template.js`)
  const noteTemplate = path.resolve(`src/templates/note-template.js`)
  const notesTemplate = path.resolve(`src/templates/notes-template.js`)
  const tagTemplate = path.resolve("src/templates/tag-template.js")

  const result = await graphql(`
    {
      notesRemark: allMarkdownRemark(
        filter: {frontmatter: {path: {regex: "/notes/"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      artsRemark: allMarkdownRemark(
        filter: {frontmatter: {path: {regex: "/arts/"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create notes list page
  const notes = result.data.notesRemark.edges
  const notesPerPage = 10
  const numPages = Math.ceil(notes.length / notesPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/notes` : `/notes/page/${i + 1}`,
      component: notesTemplate,
      context: {
        limit: notesPerPage,
        skip: i * notesPerPage,
        prevPagePath: i <= 1 ? `/notes` : `/notes/page/${i}`,
        nextPagePath: `/notes/page/${i + 2}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      },
    })
  })

  // Create note details page
  notes.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: noteTemplate,
      context: {
        tags: node.frontmatter.tags
      }, // additional data can be passed via context
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    const notesPerPage = 10
    const numPages = Math.ceil(tag.totalCount / notesPerPage)
    const tagSlug = `/tags/${_.kebabCase(tag.fieldValue)}`
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? tagSlug : `${tagSlug}/page/${i + 1}`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
          limit: notesPerPage,
          skip: i * notesPerPage,
          prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/page/${i}`,
          nextPagePath: `${tagSlug}/page/${i + 2}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1
        },
      })
    })
  })

  // Create art details page
  const arts = result.data.artsRemark.edges
  arts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: artTemplate,
      context: {
      }, // additional data can be passed via context
    })
  })
}