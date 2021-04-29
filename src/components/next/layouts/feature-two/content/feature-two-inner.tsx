import React from 'react'
import cn from 'classnames'

interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FeatureTwoInner = ({ children, className }: PropTypes) => (
  <div className={cn(className)}>{children}</div>
)

export default FeatureTwoInner
