import React from 'react'
import cn from 'classnames'
import * as styles from './thin-project.module.css'
import Link from '../components/link'

interface PropTypes {
  title: string
  description: string
  learn: string
  theme?: string
  visual: string
  href: string
  alternate?: boolean
  openInNewWindow?: boolean
}

const ThinProject = ({
  title,
  description,
  learn,
  theme,
  href,
  visual,
  alternate,
  openInNewWindow
}: PropTypes) => (
  <div className={cn(`theme-${theme}`, styles.thinProject)}>
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
            className={cn(styles.capital, 'cta', 'primary')}
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
            <img loading="lazy" src={visual} alt={`${title} visualized`} />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default ThinProject
