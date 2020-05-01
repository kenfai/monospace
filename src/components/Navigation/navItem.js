import React from "react"
import { Link } from "gatsby"

export default ({ href, children }) => {
    return (
        <li className="">
            <Link className="inline-block p-4 transition duration-200 ease-in-out text-black hover:no-underline hover:bg-gray-800 hover:text-white" to={href}>{children}</Link>
        </li>
    )
}