import React from 'react'
import { hero } from './hero.module.css'
import { pb48, pb32, pt48 } from '../../freestanding/utils/padding.module.css'
import cn from 'classnames'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import { ArrowRight, RocketLaunch } from 'phosphor-react'
import ContentText from '../../freestanding/content/content-text'
import ContentVisual from '../../freestanding/content/content-visual'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'

interface PropTypes {
  title: string
  description: string
  image: React.ReactElement
  buttons?: React.ReactNode
}

const Hero = ({ title, description, image, buttons }: PropTypes) => (
  <div className={cn(hero)}>
    <Container fluid={true} alignItems={'start'}>
      <Grid lg={5} md={5} sm={5} xs={12}>
        <ContentText>
          <MoleculeTextInteraction>
            <Molecule className={cn(pb48)}>
              <div className={cn('font-h1', pb32)}>{title}</div>
              <div className="font-p-lg">{description}</div>
            </Molecule>
            <MoleculeInteraction>{buttons}</MoleculeInteraction>
          </MoleculeTextInteraction>
        </ContentText>
      </Grid>
      <Grid lg={6} md={6} sm={6} xsHidden={true}>
        <ContentVisual>{image}</ContentVisual>
      </Grid>
    </Container>
  </div>
)

export default Hero
