import cn from 'classnames'
import React from 'react'

import { moleculeIconWrapper } from './molecule-icon-wrapper.module.css'

interface PropTypes {
  children: React.ReactNode
  className?: string
  padded?: boolean
}

const MoleculeIconWrapper = ({
  children,
  className,
  padded = false
}: PropTypes) => (
  <div className={cn(className && className)}>
    <div className={cn(moleculeIconWrapper)}>{children}</div>
  </div>
)

export default MoleculeIconWrapper
