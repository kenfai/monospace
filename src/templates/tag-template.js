import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Title from "../components/Title"
import Pagination from "../components/Note/pagination"
import Footer from "../components/Footer"
import NoteItem from "../components/Note/noteItem"

// Utilities
import kebabCase from "lodash/kebabCase"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const Notes = data.allMarkdownRemark.edges.map(({ node }) => <NoteItem key={node.id} note={node} />)

  return (
    <>
      <Layout pathname={`/tags/${kebabCase(tag)}/`}>
        <Header />
        <Navigation />
        <Title>{tag}</Title>
        {Notes}
        {/*
          This links to a page that does not yet exist.
          You'll come back to it!
        */}
        <Pagination pageInfo={pageContext} />
      </Layout>
      <Footer />
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query tagNotesQuery ($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { tags: { in: [$tag] } } },
      limit: $limit,
      skip: $skip
    ) {
      totalCount
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