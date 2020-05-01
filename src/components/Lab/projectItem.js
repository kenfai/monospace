import React from "react"

export default ({ url, title, imgSrc, children }) => {
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img className="border border-gray-200" src={imgSrc} alt={title} />
            </a>
            <div className="p-4 bg-gray-200">
                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{children}</p>
            </div>
        </div>
    )
}