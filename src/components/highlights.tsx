import React from 'react'
import { Link } from 'gatsby'
import * as styles from './highlights.module.css'
import cn from 'classnames'

import Placeholder1 from '../images/icon/GitHub.svg'
import Placeholder2 from '../images/icon/twitter.svg'
import Placeholder3 from '../images/icon/linkedin.svg'
import Integration from '../images/illustrations/integration.svg'

interface PropTypes {
  highlight: Highlight[]
}

interface Highlight {
  visual: 'hydra' | 'keto' | 'kratos' | 'oathkeeper'
  title: string
  content: string
  href: string
  openInNewWindow?: boolean
}

const Highlights = ({ highlight }: PropTypes) => (
  <div className={cn(styles.highlight)}>
    <div className="container-fluid">
      <div className={cn('row middle-lg')}>
        <div
          className={cn(
            'col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10',
            styles.highlightRow
          )}
        >
          {highlight.map(
            ({ visual, title, content, href, openInNewWindow }) => (
              <Link
                key={title}
                to={href}
                rel={openInNewWindow ? 'noopener noreferrer' : ''}
                target={openInNewWindow ? '_blank' : ''}
                className={cn(styles.highlightBox)}
              >
                <div className={cn('col-lg-offset-1 col-lg-10')}>
                  <img
                    src={
                      visual === 'hydra'
                        ? Placeholder1
                        : visual === 'keto'
                        ? Placeholder2
                        : visual === 'kratos'
                        ? Placeholder3
                        : visual === 'oathkeeper'
                        ? Integration
                        : ''
                    }
                  />
                  <h3>{title}</h3>
                  <p className={'secondary'}>{content}</p>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Highlights
