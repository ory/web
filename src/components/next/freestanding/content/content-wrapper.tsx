import React from 'react'
import * as styles from './content-wrapper.module.css'
import cn from 'classnames'
import Molecule from '../molecule/molecule'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const ContentWrapper = ({ children, className }: PropTypes) => (
  <div className={cn(styles.contentWrapper, className && className)}>
    <Molecule>{children}</Molecule>
  </div>
)

export default ContentWrapper
