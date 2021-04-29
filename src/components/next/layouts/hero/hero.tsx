import React from 'react'
import * as styles from './hero.module.css'
import cn from 'classnames'
import HeroContentLeft from './content/hero-content-left'
import HeroContentRight from './content/hero-content-right'
import hero from '../../../../images/illustrations/hero.svg'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import { ArrowRight } from 'phosphor-react'
import ContentText from '../../freestanding/content/content-text'
import ContentVisual from '../../freestanding/content/content-visual'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

const Hero = () => (
  <div className={cn(styles.hero)}>
    <Container>
      <ContentText>
        <Grid lg={6} md={8} sm={8} xs={4}>
          <Molecule>
            <p className="font-h1">
              Security infrastructure for global internet services.
            </p>
            <p className="font-p-lg">
              Thousands of businesses with billions of network requests trust
              Ory's security infrastructure to authenticate and manage users, set
              and check permissions and to protect APIs, applications and data.
            </p>
          </Molecule>
          <MoleculeInteraction>
            <Button
              href={'/products'}
              style={'filled'}
            >
              Get Started for free
            </Button>
            <Button
              href={'/open-source'}
              style={'text'}
            >
              Contact Sales <ArrowRight />
            </Button>
          </MoleculeInteraction>
        </Grid>
      </ContentText>
      <ContentVisual className={cn('hidden-xs--next')}>
        <Grid lg={6} md={4} sm={8} xs={4}>
          <img loading="lazy" src={hero} alt="placeholder" />
        </Grid>
      </ContentVisual>
    </Container>
  </div>
)

export default Hero
