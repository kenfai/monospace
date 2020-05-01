import React from "react"

export default ({ date, title, children }) => {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="sm:w-3/12">
                <div className="px-4 py-2 mx-4 sm:mx-8 bg-red-600 sm:text-right text-white font-medium shadow">{date}</div>
            </div>
            <div className="px-4 sm:px-8 pb-16 sm:w-9/12 sm:border-l border-gray-600">
                <h3 className="py-2 text-lg font-semibold">{title}</h3>
                <div className="text-sm text-gray-700">{children}</div>
            </div>
        </div>
    )
}