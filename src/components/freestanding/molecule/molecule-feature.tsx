import cn from 'classnames'
import React from 'react'

import * as styles from './molecule-feature.module.css'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const MoleculeFeature = ({ children, className }: PropTypes) => (
  <div className={cn(styles.moleculeFeature)}>{children}</div>
)

export default MoleculeFeature
