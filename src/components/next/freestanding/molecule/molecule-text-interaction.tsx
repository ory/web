import React from 'react'
import * as styles from './molecule-text-interaction.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const MoleculeTextInteraction = ({ children, className }: PropTypes) => (
  <div className={cn(styles.moleculeTextInteraction, className && className)}>
    {children}
  </div>
)

export default MoleculeTextInteraction
