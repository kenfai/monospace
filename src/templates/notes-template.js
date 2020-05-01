import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import NoteItem from "../components/Note/noteItem"
import Pagination from "../components/Note/pagination"
import Title from "../components/Title"
import Footer from "../components/Footer"

import "../styles/global.css"

export default function Template({
  pageContext,
  data // this prop will be injected by the GraphQL query below.
}) {
  const Notes = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <NoteItem key={edge.node.id} note={edge.node} />)
  return (
    <>
      <Layout pathname="/notes">
        <Header />
        <Navigation />
          <Title>Notes</Title>
          {Notes}
          <Pagination pageInfo={pageContext} />
      </Layout>
      <Footer />
    </>
  )
}

export const noteQuery = graphql`
  query notesQuery ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {frontmatter: {path: {regex: "/notes/"}, tags: {ne: "Private"}}},
      limit: $limit,
      skip: $skip
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