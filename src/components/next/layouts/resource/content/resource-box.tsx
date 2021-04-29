import React from 'react'
import * as styles from './resource-box.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const ResourceBox = ({ children, className }: PropTypes) => (
  <div className={cn(styles.resourceBox, className && className)}>
    {children}
  </div>
)

export default ResourceBox
