import React from 'react'
import * as styles from './feature-three.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import ContentVisual from '../../freestanding/content/content-visual'
import hero from '../../../../images/illustrations/hero.svg'

const FeatureThree = () => (
  <div className={cn(styles.featureThree)}>
    <Container flexContainer={'row'} alignItems={'center'} justify={'center'}>
      <Grid lg={4} md={8} sm={10}>
        <ContentText>
          <Molecule>
            <p className={'font-h3'}>
              Intelligent, integrated, and secure products.
            </p>
            <p className={'font-p'}>
              Ory is a turnkey solution that protects businesses from credential
              thefts and other security threats. It authenticates users, sets
              permissions and enforces rules for applications and data. The
              fully-managed service scales to protect the largest global network
              services.
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

export default FeatureThree
