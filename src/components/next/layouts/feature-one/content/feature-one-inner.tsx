import React from 'react'
import * as styles from './feature-one-inner.module.css'
import cn from 'classnames'

interface PropTypes {
  className?: string
  children: React.ReactNode
}

const FeatureOneInner = ({ children, className }: PropTypes) => (
  <div className={cn(styles.featureOneInner, className && className)}>
    {children}
  </div>
)

export default FeatureOneInner
