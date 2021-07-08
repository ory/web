import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import ContentVisual from '../../freestanding/content/content-visual'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'

import { pb48, pb32, pt48 } from '../../freestanding/utils/padding.module.css'
import { hero } from './hero.module.css'

interface PropTypes {
  title: string
  description: string
  image: React.ReactElement
  buttons?: React.ReactNode
}

const Hero = ({ title, description, image, buttons }: PropTypes) => (
  <div className={cn(hero)}>
    <Container fluid={true} alignItems={'center'}>
      <Grid lg={5} md={6} sm={12} xs={12} className={cn(pb32)}>
        <ContentText>
          <MoleculeTextInteraction>
            <Molecule className={cn(pb48)}>
              <h1 className={cn('font-h1', pb32)}>{title}</h1>
              <p className={cn('font-p-lg')}>{description}</p>
            </Molecule>
            <MoleculeInteraction>{buttons}</MoleculeInteraction>
          </MoleculeTextInteraction>
        </ContentText>
      </Grid>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <ContentVisual>{image}</ContentVisual>
      </Grid>
    </Container>
  </div>
)

export default Hero
