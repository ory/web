import React from 'react'
import * as styles from './feature-inner.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FeatureInner = ({ children, className }: PropTypes) => (
  <div className={cn(styles.featureInner, className && className)}>
    {children}
  </div>
)

export default FeatureInner
