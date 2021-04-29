import React from 'react'
import * as styles from './quickstart.module.css'
import cn from 'classnames'
import QuickstartInner from './content/quickstart-inner'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import { ArrowRight, GitDiff } from 'phosphor-react'
import MoleculeFeature from '../../freestanding/molecule/molecule-feature'

const Quickstart = () => (
  <div className={cn(styles.quickstart, styles.quickstartContainer)}>
    <div className="container-fluid--next">
      <QuickstartInner className={cn('col-lg-5--next')}>
        <ContentText>
          <Molecule>
            <p className="font-h3">Ready to get started?</p>
            <p className="font-p">
              Thousands of businesses with billions of network requests trust
              Ory's security to auth and manage users.
            </p>
          </Molecule>
          <MoleculeInteraction>
            <Button style={'filled'} href={''}>
              Get started for free
            </Button>
            <Button style={'text'} href={''}>
              Contact Sales
              <ArrowRight />
            </Button>
          </MoleculeInteraction>
        </ContentText>
      </QuickstartInner>
      <QuickstartInner className={cn('col-lg-3--next')}>
        <MoleculeFeature>
          <Molecule>
            <GitDiff />
            <p className={cn('font-h5')}>Powerful Tools</p>
            <p className={cn('font-p-md')}>
              Ory ships REST APIs, gRPC APIs, SDKs, and CLIs for all operating
              systems and CPUs.
            </p>
          </Molecule>
        </MoleculeFeature>
        <MoleculeFeature>
          <Molecule>
            <GitDiff />
            <p className={cn('font-h5')}>Powerful Tools</p>
            <p className={cn('font-p-md')}>
              Ory ships REST APIs, gRPC APIs, SDKs, and CLIs for all operating
              systems and CPUs.
            </p>
          </Molecule>
        </MoleculeFeature>
      </QuickstartInner>
    </div>
  </div>
)

export default Quickstart
