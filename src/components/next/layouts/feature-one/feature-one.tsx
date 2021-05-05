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
import {ArrowRight} from 'phosphor-react'
import Grid from '../../freestanding/containers/grid'

const FeatureOne = () => (
  <div className={cn(styles.featureOne)}>
    <Container fluid={true} flexContainer={'column'}>
      
      <Container>
        <Grid lg={8} md={6} sm={6} xs={12}>
          <Container alignItems={'start'}>
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
                    <ArrowRight/>
                  </Button>
                </MoleculeInteraction>
              </MoleculeTextInteraction>
            </ContentText>
          </Container>
        </Grid>
        <Grid lg={4} md={6} sm={6} xs={12} xsHidden={true}>
          <Container alignItems={'start'}>
            <ContentVisual>
              <img loading="lazy" src={hero} alt="placeholder"/>
            </ContentVisual>
          </Container>
        </Grid>
      </Container>
      
    <Container>
      
      <Grid lg={8} md={8} sm={12} xs={12} smHidden={true} xsHidden={true}>
        <ContentVisual>
          <img loading="lazy" src={hero} alt="placeholder"/>
        </ContentVisual>
      </Grid>
      
      <Grid lg={4} md={4} sm={12} xs={12} smHidden={true} xsHidden={true}>
        <ContentVisual>
          <img loading="lazy" src={hero} alt="placeholder"/>
        </ContentVisual>
      </Grid>
      
    </Container>
    
    <Container>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <ContentVisual>
          <img loading="lazy" src={hero} alt="placeholder"/>
        </ContentVisual>
      </Grid>
    
    </Container>
    </Container>
  </div>
)

export default FeatureOne
