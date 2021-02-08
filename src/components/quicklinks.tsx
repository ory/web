import React from 'react'
import cn from 'classnames'
import * as styles from './quicklinks.module.css'
import { Link } from 'gatsby'

import Placeholder1 from '../images/icon/GitHub.svg'
import Placeholder2 from '../images/icon/twitter.svg'
import Placeholder3 from '../images/icon/linkedin.svg'

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
  icon: 'placeholder1' | 'placeholder2' | 'placeholder3'
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
                              openInNewWindow = false,
                            }: CallToAction) => (
  <a
    key={title}
    href={href}
    className={cn(style, 'cta')}
    rel={openInNewWindow ? 'noopener noreferrer' : ''}
    target={openInNewWindow ? '_blank' : ''}
  >
    {title}
  </a>
)

const Quicklinks = ({ title, description, quick, cta}: PropTypes) => (
  <div className={cn(styles.quicklinks)}>
    <div className="container-fluid">
      <div className="row middle-lg">
        <div className={cn(styles.quicklinksContent, "col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10")}>
          <h3>{title}</h3>
          <p>{description}</p>
          <>{cta.map(CallToActionButton)}</>
        </div>
        <div className="col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          {quick.map(
            ({ description, learn, href, openInNewWindow, icon }, key) => (
              <div key={key} className={cn(styles.quicklinksBox)}>
                <div>
                  <img
                    key={key}
                    loading="lazy"
                    src={icon === 'placeholder1' ? Placeholder1 : (icon === 'placeholder2' ? Placeholder2 : (icon === 'placeholder3' ? Placeholder3 : ''))}
                    alt={`${icon}`}
                  />
                </div>
                <div className={cn(styles.quicklinksInner)}>
                  <p>{description}</p>
                  <Link
                    to={href}
                    rel={openInNewWindow ? 'noopener noreferrer' : ''}
                    target={openInNewWindow ? '_blank' : ''}>
                    {learn}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
)

export default Quicklinks
