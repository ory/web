import React from 'react'
import * as styles from './content-visual.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const ContentVisual = ({ children, className }: PropTypes) => (
  <div className={cn(styles.contentVisual, className && className)}>
    {children}
  </div>
)

export default ContentVisual
