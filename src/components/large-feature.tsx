import React from 'react'
import cn from 'classnames'
import * as styles from './large-feature.module.css'
import { Link } from 'gatsby'

interface PropTypes {
  content: Content[]
}

interface Content {
  title: string
  description: string
  learn: string
  href: string
  visual: string
  openInNewWindow?: boolean
}

const LargeFeature = ({ content }: PropTypes) => (
  <div className={cn(styles.thin)}>
    {content.map(
      ({ title, description, learn, href, openInNewWindow, visual }, key) => (
        <div key={key} className="container-fluid">
          <div className={cn('row middle-lg')}>
            <div className="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
              <Link
                to={href}
                rel={openInNewWindow ? 'noopener noreferrer' : ''}
                target={openInNewWindow ? '_blank' : ''}
                className={cn(styles.cap, 'secondary')}
              >
                <h3>{title}</h3>
              </Link>
              <p>{description}</p>
              <Link to={href} className={cn(styles.cap, 'secondary')}>
                {learn}
              </Link>
            </div>
            <div className="col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
              <Link
                to={href}
                rel={openInNewWindow ? 'noopener noreferrer' : ''}
                target={openInNewWindow ? '_blank' : ''}
              >
                <img loading="lazy" src={visual} alt={`${title}`} />
              </Link>
            </div>
          </div>
        </div>
      )
    )}
  </div>
)

export default LargeFeature
