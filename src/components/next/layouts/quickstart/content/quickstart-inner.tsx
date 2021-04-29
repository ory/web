import React from 'react'
import * as styles from './quickstart-inner.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const QuickstartInner = ({ children, className }: PropTypes) => (
  <div
    className={cn(
      styles.quickstartInner,
      styles.quickstartInnerContainer,
      className && className
    )}
  >
    {children}
  </div>
)

export default QuickstartInner
