import React from 'react'
import * as styles from './hero-content-left.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const HeroContentLeft = ({ children, className }: PropTypes) => (
  <div className={cn(styles.heroContentLeft, className && className)}>
    <div className={cn(styles.content)}>{children}</div>
  </div>
)

export default HeroContentLeft
