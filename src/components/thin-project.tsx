import React from 'react'
import cn from 'classnames'
import * as styles from './thin-project.module.css'
import { Link } from 'gatsby'

interface PropTypes {
  title: string
  description: string
  learn: string
  theme?: string
  visual: string
  href: string
}

const ThinProject = ({
  title,
  description,
  learn,
  theme,
  href,
  visual,
}: PropTypes) => (
  <div className={cn(`theme-${theme}`, styles.thin)}>
    <div className="container-fluid">
      <div className={cn('row middle-lg')}>
        <div className="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          <Link to={href} className={cn(styles.cap, 'secondary')}>
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
          <Link to={href} className={cn(styles.cap, 'secondary')}>
            {learn}
          </Link>
        </div>
        <div className="col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          <Link to={href}>
            <img src={visual} alt={`${title} visualized`} />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default ThinProject
