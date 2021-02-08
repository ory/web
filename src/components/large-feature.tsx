import React from 'react'
import cn from 'classnames'
import * as styles from './large-feature.module.css'
import { Link } from 'gatsby'

import Placeholder1 from '../images/icon/GitHub.svg'
import Placeholder2 from '../images/icon/twitter.svg'
import Placeholder3 from '../images/icon/linkedin.svg'
import Placeholder4 from '../images/icon/GitHub.svg'


interface PropTypes {
  title: string
  description: string
  learn: string
  href: string
  visual: 'Placeholder1' | 'Placeholder2' | 'Placeholder3' | 'Placeholder4'
  openInNewWindow?: boolean
  alternate?: boolean
}

const LargeFeature = ({ title, description, learn, href, openInNewWindow, visual, alternate }: PropTypes) => (
  <div className={cn(styles.largeFeature)}>
    <div className="container-fluid">
      <div className={cn('row middle-lg', { [styles.alternate]: alternate })}>
        <div
          className={!alternate ? 'col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10' : 'col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10'}
        >
          <Link
            to={href}
            rel={openInNewWindow ? 'noopener noreferrer' : ''}
            target={openInNewWindow ? '_blank' : ''}
            className="secondary">
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
          <Link
            to={href}
            className={cn('cta', 'primary')}>
            {learn}
          </Link>
        </div>
        <div
          className={!alternate ? 'col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 hidden-md hidden-sm' : 'col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 hidden-md hidden-sm'}>
          <Link
            to={href}
            rel={openInNewWindow ? 'noopener noreferrer' : ''}
            target={openInNewWindow ? '_blank' : ''}
          >
            <img loading="lazy"
                 src={visual === 'Placeholder1' ? Placeholder1 : (visual === 'Placeholder2' ? Placeholder2 : (visual === 'Placeholder3' ? Placeholder3 : (visual === 'Placeholder4' ? Placeholder4 : '')))}
                 alt={`${title}`}/>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default LargeFeature
