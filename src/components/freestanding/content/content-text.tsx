import cn from 'classnames'
import React from 'react'

import Molecule from '../molecule/molecule'

import * as styles from './content-text.module.css'

export interface PropTypes {
  children: React.ReactNode
  className?: string
  padded?: boolean
}

const ContentText = ({ children, className, padded }: PropTypes) => (
  <div
    className={cn(
      styles.contentText,
      padded && styles.contentPadded,
      className && className
    )}
  >
    <Molecule className={cn(styles.content)}>{children}</Molecule>
  </div>
)

export default ContentText
