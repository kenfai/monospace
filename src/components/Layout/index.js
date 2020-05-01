import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default ({ pathname, children }) => {
    const {
      site: {
        siteMetadata: {
            title,
            siteUrl,
            description,
            locale,
            image,
            twitter
        },
      },
    } = useStaticQuery(graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            siteUrl
            description
            locale
            image
            twitter
          }
        }
      }
    `)

    return (
        <div className="max-w-screen-md mx-auto px-4">
            <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
                <html lang={locale} />
                <link rel="canonical" href={`${siteUrl}${pathname ?? ''}`} />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
                />
                <meta name="description" content={description} />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:locale" content={locale} />
                <meta property="og:site_name" content={title} />
                <meta property="og:image" content={`${siteUrl}${image}`} />
                <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" />
                <meta property="og:description" content={description} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content={twitter} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${siteUrl}${image}`} />
            </Helmet>
            {children}
        </div>
    )
}