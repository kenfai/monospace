import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NoteLink from "./noteLink"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark (
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: {frontmatter: {path: {regex: "/notes/"}, tags: {ne: "Private"}}},
          limit: 3,
          skip: 0
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "DD MMMM YYYY")
                path
                title
                tags
              }
            }
          }
        }
      }
    `
  )

  const Notes = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <NoteLink key={edge.node.id} note={edge.node} />)

  return (
    <div>
      <h1 className="py-4 text-2xl font-semibold border-b border-gray-400">Latest Notes</h1>
      <div>{Notes}</div>
    </div>
  )
}