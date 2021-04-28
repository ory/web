import React from 'react'
import * as styles from './feature-one.module.css'
import cn from 'classnames'
import ContentText from '../../freestanding/content/content-text'
import ContentVisual from '../../freestanding/content/content-visual'
import FeatureInner from './content/feature-inner'

const FeatureOne = () => (
  <div className={cn(styles.featureOne)}>
    <div className="container-fluid--next">
      <FeatureInner>
        <ContentText
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
        </ContentText>
        <ContentVisual
          className={cn('col-lg-6--next col-md-5--next hidden-xs--next')}
        >
          <></>
        </ContentVisual>
      </FeatureInner>
      <FeatureInner className={cn('xs-hidden--next')}>
        <ContentVisual className={cn('col-lg-8--next col-md-4--next')}>
          <></>
        </ContentVisual>
        <ContentVisual className={cn('col-lg-4--next col-md-4--next')}>
          <></>
        </ContentVisual>
      </FeatureInner>
      <FeatureInner>
        <ContentVisual
          className={cn(
            'col-lg-12--next col-md-8--next col-sm-4--next col-xs-4--next'
          )}
        >
          <></>
        </ContentVisual>
      </FeatureInner>
    </div>
  </div>
)

export default FeatureOne
