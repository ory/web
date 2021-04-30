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
            <p className={'font-h3'}>Stay on top of security!</p>
            <p className={'font-p'}>
              Ory secures the most demanding internet services, regardless of
              scale. We will get you up and running with Ory in minutes. Our
              service is based on mature open source software and open
              standards. And it’s affordable to everyone.
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
