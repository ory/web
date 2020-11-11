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
  mobile?: ReactNode[]
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

const CompressedHero = ({
  title,
  subtitle,
  cta,
  visual,
  mobile = [],
}: PropTypes) => (
  <div className={cn(styles.compressedHero)}>
    <div className="container-fluid">
      <div
        className={cn('row middle-sm', {
          'hidden-sm': mobile.length > 0,
          'hidden-md': mobile.length > 0,
        })}
      >
        <div className="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          <h3>{title}</h3>
          <h2>{subtitle}</h2>
          <>{cta.map(CallToActionButton)}</>
        </div>
        <div className="col-lg-offset-2 col-lg-5 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          {visual}
        </div>
      </div>
      {mobile.length > 0 && (
        <div className="row middle-sm hidden-lg">
          {mobile.map((node, index) => (
            <div
              key={index}
              className={
                'col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10'
              }
            >
              <h3>{title}</h3>
              {node}
              <p>{subtitle}</p>
              <>{cta.map(CallToActionButton)}</>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)

export default CompressedHero
