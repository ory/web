import React from 'react'
import * as styles from './stats-box.module.css'
import cn from 'classnames'
import Molecule from '../../../freestanding/molecule/molecule'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const StatsBox = ({ children, className }: PropTypes) => (
  <Molecule className={cn(styles.statsBox)}>{children}</Molecule>
)

export default StatsBox
