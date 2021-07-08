import cn from 'classnames'
import React from 'react'

import * as styles from './adopters-logo.module.css'

interface PropTypes {
  children: React.ReactNode
  className?: string
}

const AdoptersLogo = ({ children, className }: PropTypes) => (
  <div className={cn(styles.adoptersLogo, className && className)}>
    {children}
  </div>
)

export default AdoptersLogo
