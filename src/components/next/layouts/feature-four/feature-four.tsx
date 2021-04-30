import React from 'react'
import * as styles from './feature-four.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import ContentVisual from '../../freestanding/content/content-visual'
import hero from '../../../../images/illustrations/hero.svg'

const FeatureFour = () => (
  <div className={cn(styles.featureFour)}>
    
    <Container flexContainer={'row'} alignItems={'center'} justify={'center'}>
    
        <Grid lg={4} md={8} sm={10}>
          <ContentText>
            <Molecule>
              <p className={'font-h3'}>A fully integrated suite of security products.</p>
              <p className={'font-p'}>Securing internet services requires more than a username and a password.
                We bring together everything that’s needed to make websites and internet services secure,
                regardless of scale or geolocation. Ory is affordable and based on mature <a href={''} className={cn('font-link font-link-md link-news')}>open source</a> software
                and <a href={''} className={cn('font-link font-link-md link-news')}>open standards</a>.
              </p>
            </Molecule>
          </ContentText>
        </Grid>
        <Grid lg={4} md={8} className={cn('hidden-sm')}>
          <ContentVisual>
            <img loading="lazy" src={hero} alt="placeholder" />
          </ContentVisual>
        </Grid>
  
      </Container>
    
  </div>
)

export default FeatureFour
