import React from 'react'
import * as styles from './feature-inner-container.module.css'
import cn from 'classnames'
import ContentWrapper from '../../../freestanding/content/content-wrapper'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FeatureInnerContainer = ({ children, className }: PropTypes) => (
  <div
    className={cn(
      styles.featureInnerContent,
      styles.featureInnerText,
      className && className
    )}
  >
    <ContentWrapper>{children}</ContentWrapper>
  </div>
)

export default FeatureInnerContainer
