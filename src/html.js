import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import icon from './images/icon/apple-touch-icon-57x57.png'
import icon1 from './images/icon/apple-touch-icon-114x114.png'
import icon2 from './images/icon/apple-touch-icon-72x72.png'
import icon3 from './images/icon/apple-touch-icon-144x144.png'
import icon4 from './images/icon/apple-touch-icon-60x60.png'
import icon5 from './images/icon/apple-touch-icon-120x120.png'
import icon6 from './images/icon/apple-touch-icon-76x76.png'
import icon7 from './images/icon/apple-touch-icon-152x152.png'
import icon8 from './images/icon/favicon-196x196.png'
import icon9 from './images/icon/favicon-96x96.png'
import icon10 from './images/icon/favicon-32x32.png'
import icon11 from './images/icon/favicon-16x16.png'
import icon12 from './images/icon/favicon-128x128.png'
import icon13 from './images/icon/mstile-144x144.png'
import icon14 from './images/icon/mstile-70x70.png'
import icon15 from './images/icon/mstile-150x150.png'
import icon16 from './images/icon/mstile-310x150.png'
import icon17 from './images/icon/mstile-310x310.png'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href={icon} />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href={icon1} />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href={icon2} />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href={icon3} />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href={icon4} />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href={icon5} />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href={icon6} />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href={icon7} />
        <link rel="icon" type="image/png" href={icon8} />
        <link rel="icon" type="image/png" href={icon9} />
        <link rel="icon" type="image/png" href={icon10} />
        <link rel="icon" type="image/png" href={icon11} />
        <link rel="icon" type="image/png" href={icon12} />
        <meta name="msapplication-TileImage" content={icon13} />
        <meta name="msapplication-square70x70logo" content={icon14} />
        <meta name="msapplication-square150x150logo" content={icon15} />
        <meta name="msapplication-wide310x150logo" content={icon16} />
        <meta name="msapplication-square310x310logo" content={icon17} />

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
