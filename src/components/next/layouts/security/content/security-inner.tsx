import React from 'react'
import * as styles from './security-inner.module.css'
import cn from 'classnames'
import ContentWrapper from '../../../freestanding/content/content-wrapper'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const SecurityInner = ({ children, className }: PropTypes) => (
  <div className={cn(styles.securityInner, className && className)}>
    <ContentWrapper>{children}</ContentWrapper>
  </div>
)

export default SecurityInner
