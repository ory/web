import cn from 'classnames'
import React from 'react'

import * as styles from './molecule-logo.module.css'

interface PropTypes {
  className?: string
  children: React.ReactNode
}

const MoleculeLogo = ({ className, children }: PropTypes) => (
  <div className={cn(styles.moleculeLogo, className && className)}>
    {children}
  </div>
)

export default MoleculeLogo
