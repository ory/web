import { Link as GatsbyLink } from 'gatsby'
import React, { ReactNode } from 'react'

interface Proptypes {
  children: ReactNode
  to: string
  className?: string
  openInNewWindow?: boolean
}

const Link = ({
  to,
  className,
  openInNewWindow = false,
  children
}: Proptypes) => {
  if (
    to.startsWith('http') ||
    to.startsWith('/docs') ||
    to.startsWith('mailto:')
  ) {
    return (
      <a
        href={to}
        className={className}
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        target={openInNewWindow ? '_blank' : ''}
      >
        {children}
      </a>
    )
  } else {
    return (
      <GatsbyLink
        to={to}
        className={className}
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        target={openInNewWindow ? '_blank' : ''}
      >
        {children}
      </GatsbyLink>
    )
  }
}

export default Link
