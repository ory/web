import React from 'react'
import * as styles from './container.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: PropTypes) => (
  <div className="container-fluid--next">
    <div className={cn(styles.container, className && className)}>
      {children}
    </div>
  </div>
)

export default Container
