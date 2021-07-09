import cn from 'classnames'
import React from 'react'

import Molecule from '../../../freestanding/molecule/molecule'
import MoleculeFeature from '../../../freestanding/molecule/molecule-feature'
import MoleculeFeatureIcon from '../../../freestanding/molecule/molecule-feature-icon'

import * as styles from './security-features.module.css'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const SecurityFeatures = ({ children, className }: PropTypes) => (
  <div className={cn(styles.securityFeatures, className && className)}>
    <MoleculeFeature>
      <MoleculeFeatureIcon>
        <i className={'ph-fingerprint size16'} />
      </MoleculeFeatureIcon>
      <Molecule>{children}</Molecule>
    </MoleculeFeature>
  </div>
)

export default SecurityFeatures
