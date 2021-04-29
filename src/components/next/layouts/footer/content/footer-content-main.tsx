import React from 'react'
import * as styles from './footer-content-main.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FooterContentMain = ({ children, className }: PropTypes) => (
  <div className={cn(styles.footerContentMain, className && className)}>
    {children}
  </div>
)

export default FooterContentMain
