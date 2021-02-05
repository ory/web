import React from 'react'
import { Link } from 'gatsby'
import * as styles from './highlighted-section.module.css'
import cn from 'classnames'

interface PropTypes {
  highlight: Highlight[]
}

interface Highlight {
  title: string
  content: string
  href: string
}

const HighlightedSection = ({ highlight }: PropTypes) => (
  <div className={cn(styles.highlight)}>
    <div className="container-fluid">
      <div className={cn('row middle-lg')}>
        <div
          className={cn(
            'col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10',
            styles.highlightRow
          )}
        >
          {highlight.map(({ title, content, href }) => (
            <Link key={title} to={href} className={cn(styles.highlightBox)}>
              <div className={cn('col-lg-offset-1 col-lg-10')}>
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default HighlightedSection
