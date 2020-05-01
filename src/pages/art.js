import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Title from "../components/Title"
import Footer from "../components/Footer"

import ArtLink from "../components/Art/artLink"

export default ({ data }) => {
    const Arts = data.allMarkdownRemark.edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge, index) => (
            <ArtLink key={index} art={edge.node}></ArtLink>
        ))

    return (
        <>
            <Layout pathname="/art">
                <Header />
                <Navigation />
                <Title>Art</Title>
                <div className="grid grid-cols-1 sm:grid-cols-3">
                    {Arts}
                </div>
            </Layout>
            <Footer />
        </>
    )
}


export const artsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {frontmatter: {path: {regex: "/arts/"}}},
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            path
            title
            coverImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`