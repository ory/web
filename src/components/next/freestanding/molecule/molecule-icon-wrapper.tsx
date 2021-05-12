import React from 'react'
import * as styles from './molecule-icon-wrapper.module.css'
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
    <div className={cn(styles.moleculeIconWrapper)}>{children}</div>
  </div>
)

export default MoleculeIconWrapper
