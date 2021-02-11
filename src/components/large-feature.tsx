import React from 'react'
import cn from 'classnames'
import * as styles from './large-feature.module.css'
import Link from '../components/link'

import Opensource from '../images/illustrations/opensource.svg'
import Standards from '../images/illustrations/standards.svg'
import Developer from '../images/illustrations/developer.svg'
import Integration from '../images/illustrations/integration.svg'
import Support from '../images/illustrations/support.svg'
import Docs from '../images/illustrations/docs.svg'

interface PropTypes {
  title: string
  description: string
  learn: string
  href: string
  visual:
    | 'opensource'
    | 'standards'
    | 'developer'
    | 'integration'
    | 'support'
    | 'docs'
  openInNewWindow?: boolean
  alternate?: boolean
}

const LargeFeature = ({
  title,
  description,
  learn,
  href,
  openInNewWindow,
  visual,
  alternate
}: PropTypes) => (
  <div className={cn(styles.largeFeature)}>
    <div className="container-fluid">
      <div
        className={cn('row middle-lg', styles.divider, {
          [styles.alternate]: alternate
        })}
      >
        <div
          className={
            !alternate
              ? 'col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10'
              : 'col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10'
          }
        >
          <Link
            to={href}
            openInNewWindow={openInNewWindow}
            className="secondary"
          >
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
          <Link
            to={href}
            openInNewWindow={openInNewWindow}
            className={cn('cta', 'primary')}
          >
            {learn}
          </Link>
        </div>
        <div
          className={
            !alternate
              ? 'col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 hidden-md hidden-sm'
              : 'col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 hidden-md hidden-sm'
          }
        >
          <Link to={href} openInNewWindow={openInNewWindow}>
            <img
              loading="lazy"
              src={
                visual === 'opensource'
                  ? Opensource
                  : visual === 'standards'
                  ? Standards
                  : visual === 'developer'
                  ? Developer
                  : visual === 'integration'
                  ? Integration
                  : visual === 'support'
                  ? Support
                  : visual === 'docs'
                  ? Docs
                  : ''
              }
              alt={`${title}`}
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default LargeFeature
