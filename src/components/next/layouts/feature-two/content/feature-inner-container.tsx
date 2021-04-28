import React from 'react'
import * as styles from './feature-inner-container.module.css'
import cn from 'classnames'
import FeatureInnerText from './feature-inner-text'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FeatureInnerContainer = ({ children, className }: PropTypes) => (
  <div className={cn(styles.featureInnerContent, className && className)}>
    <FeatureInnerText>{children}</FeatureInnerText>
  </div>
)

export default FeatureInnerContainer
