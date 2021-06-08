import React from 'react'
import * as styles from './security-features.module.css'
import cn from 'classnames'
import MoleculeFeature from '../../../freestanding/molecule/molecule-feature'
import Molecule from '../../../freestanding/molecule/molecule'
import MoleculeFeatureIcon from '../../../freestanding/molecule/molecule-feature-icon'
import IconWrapper from '../../../freestanding/icon/icon-wrapper'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const SecurityFeatures = ({ children, className }: PropTypes) => (
  <div className={cn(styles.securityFeatures, className && className)}>
    <MoleculeFeature>
      <MoleculeFeatureIcon>
        <IconWrapper icon={'Fingerprint'} size={'16'} />
      </MoleculeFeatureIcon>
      <Molecule>{children}</Molecule>
    </MoleculeFeature>
  </div>
)

export default SecurityFeatures
