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
    <Container fluid={true} alignItems={'center'} justify={'center'}>
      <Grid lg={5} md={10} sm={10}>
        <ContentText>
          <Molecule>
            <p className="font-h1">
              Security infrastructure for global internet services.
            </p>
            <p className="font-p-lg">
              Thousands of businesses with billions of network requests trust
              Ory's security infrastructure to authenticate and manage users,
              set and check permissions and to protect APIs, applications and
              data.
            </p>
          </Molecule>
          <MoleculeInteraction>
            <Button href={'/products'} style={'filled'}>
              Get Started for free
            </Button>
            <Button href={'/open-source'} style={'text'}>
              Contact Sales <ArrowRight />
            </Button>
          </MoleculeInteraction>
        </ContentText>
      </Grid>
      <Grid lg={5} md={8} sm={10} className={cn('hidden-sm hidden-md')}>
        <ContentVisual>
          <img loading="lazy" src={hero} alt="placeholder" />
        </ContentVisual>
      </Grid>
    </Container>
  </div>
)

export default Hero
