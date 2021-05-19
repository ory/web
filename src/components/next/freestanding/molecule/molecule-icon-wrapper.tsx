import React from 'react'
import {
  moleculeIconWrapper,
  moleculePadding
} from './molecule-icon-wrapper.module.css'
import cn from 'classnames'

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
    <div className={cn(moleculeIconWrapper, moleculePadding)}>{children}</div>
  </div>
)

export default MoleculeIconWrapper
