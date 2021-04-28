import React from 'react'
import * as styles from './feature-four-inner.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FeatureFourInner = ({ children, className }: PropTypes) => (
  <div className={cn(styles.featureFourInner)}>{children}</div>
)

export default FeatureFourInner
