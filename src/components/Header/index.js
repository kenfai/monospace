import React from "react"
import { Link } from "gatsby"

import "../../styles/global.css"
import "../../styles/note.css"

export default () => {
    return (
        <div className="">
            <Link to="/" className="hover:no-underline">
                <h1 className="text-4xl sm:text-5xl"><span className="font-bold text-red-600">mono</span><span className="font-thin text-gray-800">space</span></h1>
            </Link>
        </div>
    )
}