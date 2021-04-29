import React from 'react'
import * as styles from './feature-one.module.css'
import cn from 'classnames'
import ContentText from '../../freestanding/content/content-text'
import ContentVisual from '../../freestanding/content/content-visual'
import FeatureInner from './content/feature-inner'
import Container from '../../freestanding/containers/container'
import ContentWrapper from '../../freestanding/content/content-wrapper'
import hero from '../../../../images/illustrations/hero.svg'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import { ArrowRight } from 'phosphor-react'

const FeatureOne = () => (
  <div className={cn(styles.featureOne)}>
    <Container>
      <div className={cn(styles.featureOneContainer)}>
        <FeatureInner className={cn(styles.featureOneContentCenter)}>
          <MoleculeTextInteraction>
            <Molecule
              className={cn('col-lg-6--next col-md-5--next col-sm-4--next')}
            >
              <div className="font-h3">
                A fully integrated suite of security products.
              </div>
              <div className="font-p">
                Securing internet services requires more than a username and a
                password. We bring together everything that’s needed to make
                websites and internet services secure, regardless of scale or
                geolocation. Ory is affordable and based on mature open source
                software and open standards.
              </div>
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
            <ContentVisual
              className={cn('col-lg-6--next col-md-3--next hidden-xs--next')}
            >
              <img loading="lazy" src={hero} alt="placeholder" />
            </ContentVisual>
          </MoleculeTextInteraction>
        </FeatureInner>

        <FeatureInner
          className={cn('xs-hidden--next', styles.featureOneContentStart)}
        >
          <ContentWrapper>
            <ContentVisual className={cn('col-lg-8--next col-md-4--next')}>
              <img loading="lazy" src={hero} alt="placeholder" />
            </ContentVisual>
            <ContentVisual className={cn('col-lg-4--next col-md-4--next')}>
              <img loading="lazy" src={hero} alt="placeholder" />
            </ContentVisual>
          </ContentWrapper>
        </FeatureInner>

        <FeatureInner className={cn(styles.featureOneContentCenter)}>
          <ContentWrapper>
            <ContentVisual
              className={cn(
                'col-lg-12--next col-md-8--next col-sm-4--next col-xs-4--next'
              )}
            >
              <img loading="lazy" src={hero} alt="placeholder" />
            </ContentVisual>
          </ContentWrapper>
        </FeatureInner>
      </div>
    </Container>
  </div>
)

export default FeatureOne
