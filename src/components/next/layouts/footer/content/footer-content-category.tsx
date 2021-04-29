import React from 'react'
import * as styles from './footer-content-category.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FooterContentCategory = ({ children, className }: PropTypes) => (
  <div className={cn(styles.footerContentCategory, className && className)}>
    {children}
  </div>
)

export default FooterContentCategory
