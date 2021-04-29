import React from 'react'
import * as styles from './footer-content-sub.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FooterContentSub = ({ children, className }: PropTypes) => (
  <div
    className={cn(
      styles.footerContentSub,
      styles.footerContentSubText,
      className && className
    )}
  >
    <div className={cn(styles.divider)}></div>
    {children}
  </div>
)

export default FooterContentSub
