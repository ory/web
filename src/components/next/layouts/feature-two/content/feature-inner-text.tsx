import React from 'react'
import * as styles from './feature-inner-text.module.css'
import cn from 'classnames'
import Molecule from '../../../freestanding/molecule/molecule'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const FeatureInnerText = ({ children, className }: PropTypes) => (
  <div className={cn(styles.featureInnerText, className && className)}>
    <Molecule>{children}</Molecule>
  </div>
)

export default FeatureInnerText
