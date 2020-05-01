import React from "react"

export default ({ year, title, children }) => {
    return (
        <div className="py-4 border-b border-gray-400 text-left">
            <div className="flex flex-col sm:flex-row sm:justify-start">
                <div className="mr-4 sm:w-1/4">
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-gray-800">{year}</p>
                </div>
                <div className="text-gray-700 sm:w-3/4">
                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}