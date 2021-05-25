import React from 'react'
import * as styles from './security-features.module.css'
import cn from 'classnames'
import MoleculeFeature from '../../../freestanding/molecule/molecule-feature'
import Molecule from '../../../freestanding/molecule/molecule'
import MoleculeFeatureIcon from '../../../freestanding/molecule/molecule-feature-icon'
import { Fingerprint } from 'phosphor-react'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const SecurityFeatures = ({ children, className }: PropTypes) => (
  <div className={cn(styles.securityFeatures, className && className)}>
    <MoleculeFeature>
      <MoleculeFeatureIcon>
        <Fingerprint></Fingerprint>
      </MoleculeFeatureIcon>
      <Molecule>{children}</Molecule>
    </MoleculeFeature>
  </div>
)

export default SecurityFeatures
