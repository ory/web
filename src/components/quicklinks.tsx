import React from 'react'
import cn from 'classnames'
import * as styles from './quicklinks.module.css'
import Link from '../components/link'

import Docs from '../images/icon/docs.svg'
import Blog from '../images/icon/blog.svg'
import Jobs from '../images/icon/jobs.svg'

interface PropTypes {
  title: string
  description: string
  quick: Quick[]
  cta: CallToAction[]
}

interface Quick {
  description: string
  learn: string
  href: string
  icon: 'docs' | 'blog' | 'jobs'
  openInNewWindow?: boolean
}

interface CallToAction {
  title: string
  href: string
  style?: 'primary' | 'secondary'
  openInNewWindow?: boolean
}

const CallToActionButton = ({
  title,
  href,
  style = 'secondary',
  openInNewWindow = false
}: CallToAction) => (
  <Link
    key={title}
    to={href}
    className={cn(style, 'cta')}
    openInNewWindow={openInNewWindow}
  >
    {title}
  </Link>
)

const Quicklinks = ({ title, description, quick, cta }: PropTypes) => (
  <div className={cn(styles.quicklinks)}>
    <div className="container-fluid">
      <div className={cn(styles.quicklinksRow, 'row middle-lg')}>
        <div
          className={cn(
            styles.quicklinksContent,
            'col-lg-offset-1 col-lg-3 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10'
          )}
        >
          <h3>{title}</h3>
          <p>{description}</p>
          <>{cta.map(CallToActionButton)}</>
        </div>
        <div
          className={cn(
            styles.quicklinksChildren,
            'col-lg-offset-1 col-lg-6 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10'
          )}
        >
          {quick.map(
            ({ description, learn, href, openInNewWindow, icon }, key) => (
              <div key={key} className={cn(styles.quicklinksChild)}>
                <div>
                  <Link to={href} openInNewWindow={openInNewWindow}>
                    <img
                      key={key}
                      loading="lazy"
                      src={
                        icon === 'docs'
                          ? Docs
                          : icon === 'blog'
                          ? Blog
                          : icon === 'jobs'
                          ? Jobs
                          : ''
                      }
                      alt={`${icon}`}
                    />
                  </Link>
                  <p>{description}</p>
                  <Link
                    className={cn(styles.redirects)}
                    to={href}
                    openInNewWindow={openInNewWindow}
                  >
                    {learn} →
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Quicklinks
