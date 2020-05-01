import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({ art }) => {
  let coverImgFluid = art.frontmatter.coverImage.childImageSharp.fluid
  return (
    <div>
      <Link to={art.frontmatter.path} className="font-semibold">
        <Img fluid={coverImgFluid} />
      </Link>
    </div>
  )
}