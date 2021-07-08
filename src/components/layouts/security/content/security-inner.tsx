import cn from 'classnames'
import React from 'react'

import ContentWrapper from '../../../freestanding/content/content-wrapper'

import * as styles from './security-inner.module.css'

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
