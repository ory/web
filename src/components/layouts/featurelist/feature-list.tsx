import React from 'react'
import * as styles from './feature-list.module.css'
import {
  pb32,
  pb48,
  pb64,
  pt32,
  pt64
} from '../../freestanding/utils/padding.module.css'

import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import FeatureListContent, { Features } from './content/feature-list-content'
import { ArrowRight, CheckCircle, Circle, Flag, Triangle } from 'phosphor-react'
import ContentText from '../../freestanding/content/content-text'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Molecule from '../../freestanding/molecule/molecule'
import Button from '../../freestanding/button/button'
import Grid from '../../freestanding/containers/grid'
import MoleculeIconWrapper from '../../freestanding/molecule/molecule-icon-wrapper'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'

interface FeatureSection {
  icon: React.ReactElement
  title: string
  description: string
  button: React.ReactElement
  features: Array<Features>
}

interface PropTypes {
  className?: string
  features: Array<FeatureSection>
}

const FeatureList = ({ className, features }: PropTypes) => (
  <div className={cn(styles.featureList)}>
    <Container fluid={true}>
      {features.map((section) => {
        return (
          <Container
            className={cn(pb64, pt64)}
            alignItems={'start'}
            key={section.title}
          >
            <Grid lg={3} md={3} sm={12} xs={12} className={cn(pb48)}>
              <ContentText>
                <Molecule>
                  <MoleculeIconWrapper>{section.icon}</MoleculeIconWrapper>
                  <h3 className={cn('font-h3', pb32, pt32)}>{section.title}</h3>
                  <p className={cn('font-p', 'mute-85')}>
                    {section.description}
                  </p>
                </Molecule>
              </ContentText>
            </Grid>
            <Grid lg={6} md={8} sm={12} xs={12}>
              <FeatureListContent features={section.features} />
            </Grid>
          </Container>
        )
      })}
    </Container>
  </div>
)

export default FeatureList
