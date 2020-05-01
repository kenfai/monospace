import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const NoteLink = ({ note }) => {
  const Tags = note.frontmatter.tags.map((tag, index) => {
      return (
        <div className="inline" key={index}>
          <Link
            to={`/tags/${kebabCase(tag)}/`}
            className="text-red-600">
              {tag}
          </Link>
          <span>{index < note.frontmatter.tags.length - 1 ? ',\u00A0' : ''}</span>
        </div>
      )
  })
  
  return (
    <div className="py-4 border-b border-gray-400">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div>
          <Link to={note.frontmatter.path} className="font-semibold text-black">
            {note.frontmatter.title}
          </Link>
          <span className="italic font-serif text-gray-600"> - in {Tags}</span>
        </div>
        <div className="text-sm text-gray-700">{note.frontmatter.date}</div>
      </div>
    </div>
  )
}

export default NoteLink