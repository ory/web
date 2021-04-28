import React from 'react'
import * as styles from './feature-three-inner.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FeatureThreeInner = ({ children, className }: PropTypes) => (
  <div className={cn(styles.featureThreeInner)}>{children}</div>
)

export default FeatureThreeInner
