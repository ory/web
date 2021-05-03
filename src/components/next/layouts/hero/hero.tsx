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
      <Grid lg={5} md={5} sm={5} xs={12}>
        <Container alignItems={'start'}>
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
        </Container>
      </Grid>
      <Grid lg={6} md={6} sm={6} xsHidden={true}>
        <Container alignItems={'start'}>
          <ContentVisual>
            <img loading="lazy" src={hero} alt="placeholder" />
          </ContentVisual>
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Hero
