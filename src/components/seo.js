import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title, image, url }) => {
  const { site } = useStaticQuery(
      graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaImage = image ? `${site.siteMetadata.siteUrl}${image}` : null
  const metaUrl = url || site.siteMetadata.siteUrl

  return (
      <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `article`,
            },
            {
              property: `og:url`,
              content: metaUrl,
            },
            metaImage
                ? {
                  property: `og:image`,
                  content: metaImage,
                }
                : null,
            {
              name: `twitter:card`,
              content: `summary_large_image`,
            },
            {
              name: `twitter:creator`,
              content: site.siteMetadata?.social?.twitter || ``,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
            metaImage
                ? {
                  name: `twitter:image`,
                  content: metaImage,
                }
                : null,
          ]
              .filter(Boolean) // Filters out null/undefined entries
              .concat(meta)}
      />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: null,
  url: null,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string,
}

export default Seo
