import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

import "../styles/global.css"
import "../styles/note.css"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, html } = data.markdownRemark

  return (
    <>
      <Layout pathname={frontmatter.path}>
        <Header />
        <Navigation />
        <div className="mt-16">
          <h1 className="text-4xl font-semibold">{frontmatter.title}</h1>
          <h3 className="text-lg italic text-gray-600 font-serif">{frontmatter.date}</h3>
          <div
              className="note"
              dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export const noteQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
      }
    }
  }
`