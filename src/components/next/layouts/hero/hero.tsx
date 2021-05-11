import React from 'react'
import * as styles from './hero.module.css'
import { mb48, mb32 } from '../../freestanding/utils/padding.module.css'
import cn from 'classnames'
import HeroContentLeft from './content/hero-content-left'
import HeroContentRight from './content/hero-content-right'
import hero from '../../../../images/illustrations/hero.svg'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import { ArrowRight, RocketLaunch } from 'phosphor-react'
import ContentText from '../../freestanding/content/content-text'
import ContentVisual from '../../freestanding/content/content-visual'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'

const Hero = () => (
  <div className={cn(styles.hero)}>
    <Container fluid={true} alignItems={'start'}>
      <Grid lg={5} md={5} sm={5} xs={12}>
        <ContentText>
          <MoleculeTextInteraction>
            <Molecule className={cn(mb48)}>
              <p className={cn('font-h1', mb32)}>
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
              <Button
                to={'/products'}
                style={'filled'}
                iconLeft={<RocketLaunch size={24} />}
              >
                Sign up for early access
              </Button>
            </MoleculeInteraction>
          </MoleculeTextInteraction>
        </ContentText>
      </Grid>
      <Grid lg={6} md={6} sm={6} xsHidden={true}>
        <img width={'100%'} loading="lazy" src={hero} alt="placeholder" />
      </Grid>
    </Container>
  </div>
)

export default Hero
