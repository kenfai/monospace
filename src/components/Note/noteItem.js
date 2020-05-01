import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

export default ({ note }) => {
    const Tags = note.frontmatter.tags.map((tag, index) => {
        return (
            <div className="inline" key={index}>
                <Link
                    to={`/tags/${kebabCase(tag)}/`}
                    className="text-red-600 italic font-serif">
                    {tag}
                </Link>
                <span>{index < note.frontmatter.tags.length - 1 ? ',\u00A0' : ''}</span>
            </div>
        )
    })
    
    return (
        <div>
            <div className="mb-2">
                <div className="inline-block mr-1 text-gray-600">{note.frontmatter.date}</div>
                <div className="inline-block"><span className="italic font-serif text-gray-600">in</span> {Tags}</div>
            </div>
            <div className="mb-4">
                <Link to={note.frontmatter.path} className="text-3xl text-black font-semibold">
                    {note.frontmatter.title}
                </Link>
            </div>
            <div className="my-4">
                <p>{note.excerpt}</p>
            </div>
            <div className="mt-4 mb-20">
                <Link to={note.frontmatter.path} className="text-sm font-semibold text-red-600">
                    READ
                </Link>
            </div>
        </div>
    )
}