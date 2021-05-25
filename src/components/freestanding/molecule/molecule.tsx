import React from 'react'
import * as styles from './molecule.module.css'
import cn from 'classnames'

export interface PropTypes {
  className?: string
  children: React.ReactNode
}

const Molecule = ({ children, className }: PropTypes) => (
  <div className={cn(styles.molecule, className && className)}>{children}</div>
)

export default Molecule
