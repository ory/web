import cn from 'classnames'
import React from 'react'

import * as styles from './molecule-feature-icon.module.css'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const MoleculeFeatureIcon = ({ children, className }: PropTypes) => (
  <div className={cn(styles.moleculeFeatureIcon)}>{children}</div>
)

export default MoleculeFeatureIcon
