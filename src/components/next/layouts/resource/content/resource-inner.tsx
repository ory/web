import React from 'react'
import * as styles from './resource-inner.module.css'
import cn from 'classnames'
import { ArrowRight } from 'phosphor-react'
import Molecule from '../../../freestanding/molecule/molecule'
import ContentWrapper from '../../../freestanding/content/content-wrapper'
import MoleculeInteraction from '../../../freestanding/molecule/molecule-interaction'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const ResourceInner = ({ children, className }: PropTypes) => (
  <div className={cn(styles.resourceInner, className && className)}>
    <div className={cn(styles.resourceInnerContent)}>{children}</div>
  </div>
)

export default ResourceInner
