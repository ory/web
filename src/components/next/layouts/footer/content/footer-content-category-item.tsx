import React from 'react'
import * as styles from './footer-content-category-item.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FooterContentCategoryItem = ({ children, className }: PropTypes) => (
  <div
    className={cn(
      styles.footerContentCategoryItem,
      styles.footerContentCategoryItemRow,
      className && className
    )}
  >
    {children}
  </div>
)

export default FooterContentCategoryItem
