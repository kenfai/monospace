import React from "react"
import { Helmet } from "react-helmet"

export default ({ children }) => {
    return (
        <h1 className="mt-8 mb-12 text-4xl font-bold">
            <Helmet>
                <title>{children}</title>
                <meta property="og:title" content={children} />
                <meta name="twitter:title" content={children} />
            </Helmet>
            {children}
        </h1>
    )
}