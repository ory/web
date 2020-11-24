import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

interface PropTypes {
  description?: string
  lang?: string
  meta?: any[]
  title: string
}

const author = 'ORY'

const SEO = ({ description, lang = 'en', meta = [], title }: PropTypes) => (
  <Helmet
    htmlAttributes={{
      lang
    }}
    title={title}
    titleTemplate={`%s${
      process.env.GATSBY_DOMAIN === 'ory.sh' || !process.env.GATSBY_DOMAIN
        ? ' - ory.sh'
        : ''
    }`}
    meta={[
      {
        name: `description`,
        content: description
      },
      {
        property: `og:title`,
        content: title
      },
      {
        property: `og:description`,
        content: description
      },
      {
        property: `og:type`,
        content: `website`
      },
      {
        name: `twitter:card`,
        content: `summary`
      },
      {
        name: `twitter:creator`,
        content: author
      },
      {
        name: `twitter:title`,
        content: title
      },
      {
        name: `twitter:description`,
        content: description
      }
    ].concat(meta)}
  />
)

export default SEO
