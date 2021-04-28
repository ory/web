import React from 'react'
import * as styles from './feature-inner.module.css'
import cn from 'classnames'
import FeatureInnerText from '../../feature-two/content/feature-inner-text'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FeatureInner = ({ children, className }: PropTypes) => (
  <div className={cn(styles.featureInner, className && className)}>
    <FeatureInnerText>{children}</FeatureInnerText>
  </div>
)

export default FeatureInner
