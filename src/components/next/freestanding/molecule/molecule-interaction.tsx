import React from 'react'
import * as styles from './molecule-interaction.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const MoleculeInteraction = ({ children, className }: PropTypes) => (
  <div className={cn(styles.moleculeInteraction, className && className)}>
    {children}
  </div>
)

export default MoleculeInteraction
