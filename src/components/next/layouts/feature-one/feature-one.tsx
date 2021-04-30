import React from 'react'
import * as styles from './feature-one.module.css'
import cn from 'classnames'
import ContentText from '../../freestanding/content/content-text'
import ContentVisual from '../../freestanding/content/content-visual'
import Container from '../../freestanding/containers/container'
import ContentWrapper from '../../freestanding/content/content-wrapper'
import hero from '../../../../images/illustrations/hero.svg'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import { ArrowRight } from 'phosphor-react'
import Grid from '../../freestanding/containers/grid'
import FeatureOneInner from './content/feature-one-inner'

const FeatureOne = () => (
  <div className={cn(styles.featureOne)}>
    <Container fluid={true} flexContainer={'column'}>
      <Container flexContainer={'row'} alignItems={'center'} justify={'center'}>
        <Grid lg={5} md={10} sm={10}>
          <ContentText>
            <MoleculeTextInteraction>
              <Molecule>
                <p className={cn('font-h3')}>
                  A fully integrated suite of security products.
                </p>
                <p className={cn('font-p')}>
                  Securing internet services requires more than a username and a
                  password. We bring together everything that’s needed to make
                  websites and internet services secure, regardless of scale or
                  geolocation. Ory is affordable and based on mature open source
                  software and open standards.
                </p>
              </Molecule>
              <MoleculeInteraction>
                <Button style={'filled'} href={''}>
                  Get started for free
                </Button>
                <Button style={'text'} href={''}>
                  Contact sales
                  <ArrowRight />
                </Button>
              </MoleculeInteraction>
            </MoleculeTextInteraction>
          </ContentText>
        </Grid>
        <Grid lg={5} className={cn('hidden-sm hidden-md')}>
          <ContentVisual>
            <img loading="lazy" src={hero} alt="placeholder" />
          </ContentVisual>
        </Grid>
      </Container>

      <Container
        flexContainer={'row'}
        alignItems={'start'}
        justify={'center'}
        className={cn('hidden-sm hidden-md')}
      >
        <Grid lg={5} md={10} sm={4}>
          <ContentVisual>
            <img loading="lazy" src={hero} alt="placeholder" />
          </ContentVisual>
        </Grid>
        <Grid lg={5} md={10} sm={4}>
          <ContentVisual>
            <img loading="lazy" src={hero} alt="placeholder" />
          </ContentVisual>
        </Grid>
      </Container>

      <Container
        flexContainer={'row'}
        alignItems={'center'}
        justify={'center'}
        className={cn('hidden-sm hidden-md')}
      >
        <ContentVisual>
          <img loading="lazy" src={hero} alt="placeholder" />
        </ContentVisual>
      </Container>
    </Container>
  </div>
)

export default FeatureOne
