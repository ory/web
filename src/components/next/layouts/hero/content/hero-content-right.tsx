import React from 'react'
import * as styles from './hero-content-right.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const HeroContentRight = ({ children, className }: PropTypes) => (
  <div
    className={cn(
      styles.heroContentRight,
      styles.image,
      className && className
    )}
  >
    {children}
  </div>
)

export default HeroContentRight
