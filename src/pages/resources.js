import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Title from "../components/Title"
import Footer from "../components/Footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

// Utilities
import kebabCase from "lodash/kebabCase"

export default ({ data }) => {
    return (
        <>
            <Layout pathname="/resources/">
                <Header />
                <Navigation />
                <Title>Resources</Title>
                <div className="">
                    <p className="pb-4">The Web is the greatest thing that happened since the discovery of electricity. It has lead to the explosion of information distribution at an unprecedented scale.</p>
                    <p className="pb-4">I'm hereby sharing the most interesting links from my stash of bookmarks that I have collected throughout the years for your indulgence.</p>
                    <p className="pb-4">Due to link rot, some of the links may not be accessible anymore. For such cases, an archived link will be presented instead.</p>
                    <h2 className="font-semibold">Enjoy getting lost :)</h2>
                    <div className="py-16">
                      <h2 className="text-lg font-semibold pb-4">Categories</h2>
                      {data.allSitesYaml.group.map(({ fieldValue }, index) => (
                        <div className="inline-block mr-6 mb-2" key={index}>
                          <a href={`/resources/#${kebabCase(fieldValue)}`}>{fieldValue}</a>
                        </div>
                      ))}
                      {data.allSitesYaml.group.map(({ fieldValue, edges }, index) => (
                        <div id={kebabCase(fieldValue)} key={index}>
                          <h3 className="text-3xl font-semibold py-8" key={index}>{fieldValue}</h3>
                          {edges.map(({ node }, index) => (
                            <div className="flex items-center py-8 border-b border-gray-400" key={index}>
                                <div className="w-2/5 mr-4">
                                    <a href={node.url} target="_blank" rel="noopener noreferrer">
                                        <Img
                                            fluid={
                                              node.childScreenshot ? node.childScreenshot.screenshotFile.childImageSharp.fluid : data.placeholderImage.childImageSharp.fluid
                                            }
                                            alt={node.name}
                                            className="border border-gray-200 hover:border-red-600 w-auto shadow"
                                        />
                                    </a>
                                </div>
                                <div className="w-3/5">
                                    <a href={node.url} target="_blank" rel="noopener noreferrer">{node.url}<FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 text-xs" /></a>
                                    <h4 className="font-semibold">{node.name}</h4>
                                    <p className="text-sm">{node.description}</p>
                                </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                </div>
            </Layout>
            <Footer />
        </>
    )
}

export const websitesQuert = graphql`
  query {
    allSitesYaml {
      group(field: category) {
        fieldValue
        edges {
          node {
            url
            name
            description
            childScreenshot {
              screenshotFile {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    },
    placeholderImage: file(relativePath: { eq: "no-preview.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`