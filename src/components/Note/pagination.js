import React from "react"
import { Link } from "gatsby"

export default ({ pageInfo }) => {
    const {
        prevPagePath,
        nextPagePath,
        hasPrevPage,
        hasNextPage
    } = pageInfo
    
    return (
        <div className="text-2xl font-semibold">
            <div className="my-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                    {!hasPrevPage &&
                        <span className="text-gray-400">← PREV</span>
                    }
                    {hasPrevPage &&
                        <Link to={prevPagePath}>← PREV</Link>
                    }
                </div>
                <div className="hidden sm:text-center sm:block">
                    <Link to="/tags">All topics</Link>
                </div>
                <div className="text-right">
                    {!hasNextPage &&
                        <span className="text-gray-400">NEXT →</span>
                    }
                    {hasNextPage &&
                        <Link to={nextPagePath}>NEXT →</Link>
                    }
                </div>
            </div>
            <div className="text-center sm:hidden">
                <Link to="/tags">All tags</Link>
            </div>
        </div>
    )
}