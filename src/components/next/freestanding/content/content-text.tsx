import React from 'react'
import * as styles from './content-text.module.css'
import cn from 'classnames'
import Molecule from '../molecule/molecule'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const ContentText = ({ children, className }: PropTypes) => (
  <div className={cn(styles.contentText, className && className)}>
    <Molecule className={cn(styles.content)}>{children}</Molecule>
  </div>
)

export default ContentText
