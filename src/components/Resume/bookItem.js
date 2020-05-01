import React from "react"

export default ({ src, author, children }) => {
    return (
        <div className="m-4 w-32">
            <img className="mb-1 shadow-md" src={src} alt={`${children} cover`} />
            <div className="font-semibold">{children}</div>
            <div className="font-serif italic text-sm text-gray-600">by</div>
            <div className="font-serif italic text-gray-700">{author}</div>
        </div>
    )
}