import React, { ReactNode } from 'react'
import cn from 'classnames'
import * as styles from './compressed-hero.module.css'

interface CallToAction {
  title: string
  href: string
  style?: 'primary' | 'secondary'
  openInNewWindow?: boolean
}

interface PropTypes {
  title: string
  subtitle: string
  cta: CallToAction[]
  visual: ReactNode
}

const CallToActionButton = ({
  title,
  href,
  style = 'secondary',
  openInNewWindow = false
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

const CompressedHero = ({ title, subtitle, cta, visual }: PropTypes) => (
  <div className={cn(styles.compressedHero)}>
    <div className="container-fluid">
      <div className={cn('row middle-sm')}>
        <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <>{cta.map(CallToActionButton)}</>
        </div>
        <div className="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10  hidden-sm hidden-md">
          {visual}
        </div>
      </div>
    </div>
  </div>
)

export default CompressedHero
