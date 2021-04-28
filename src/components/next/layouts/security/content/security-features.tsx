import React from 'react'
import * as styles from './security-features.module.css'
import cn from 'classnames'
import MoleculeFeature from '../../../freestanding/molecule/molecule-feature'
import Molecule from '../../../freestanding/molecule/molecule'
import MoleculeFeatureIcon from '../../../freestanding/molecule/molecule-feature-icon'
import { Fingerprint } from 'phosphor-react'

const SecurityFeatures = () => (
  <div className={cn(styles.securityFeatures)}>
    <MoleculeFeature>
      <MoleculeFeatureIcon>
        <Fingerprint></Fingerprint>
      </MoleculeFeatureIcon>
      <Molecule>
        <p className="font-h5">Feature</p>
        <p className="font-p">
          Thousands of businesses with billions of network requests trust Ory's
          security infrastructure
        </p>
      </Molecule>
    </MoleculeFeature>
  </div>
)
