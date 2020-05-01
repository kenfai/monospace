import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Title from "../components/Title"
import Footer from "../components/Footer"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <>
    <Layout pathname="/tags">
        <Header />
        <Navigation />
        <Title>Topics</Title>
        <div>
          <ul className="">
            {group.map(tag => (
              <li key={tag.fieldValue} className="my-4 mx-2 inline-block">
                <Link
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  className="py-3 px-6 border border-gray-400 rounded-full font-mono text-gray-800 hover:border-red-600 hover:bg-red-600 hover:text-white hover:no-underline">
                    {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
      <Footer />
  </>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`