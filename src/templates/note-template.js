import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

import "../styles/global.css"
import "../styles/note.css"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, html, timeToRead } = data.markdownRemark

  const Tags = frontmatter.tags.map((tag, index) => {
    return (
      <div className="inline mr-4" key={index}>
        <Link
          to={`/tags/${kebabCase(tag)}/`}
          className="py-3 px-6 border border-gray-400 rounded-full font-mono text-gray-800 hover:border-red-600 hover:bg-red-600 hover:text-white hover:no-underline">
          {tag}
        </Link>
      </div>
    )
  })

  return (
    <>
      <Layout pathname={frontmatter.path}>
        <Header />
        <Navigation />
        <div className="mt-16">
          <h1 className="text-4xl font-semibold">{frontmatter.title}</h1>
          <h3 className="text-lg italic text-gray-600 font-serif">{frontmatter.date} • {timeToRead} min read</h3>
          <div
              className="note"
              dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="my-4">
            {Tags}
          </div>
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
      timeToRead
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
        tags
      }
    }
  }
`