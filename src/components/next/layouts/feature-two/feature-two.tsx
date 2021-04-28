import React from 'react'
import * as styles from './feature-two.module.css'
import cn from 'classnames'
import FeatureInnerContainer from './content/feature-inner-container'
import { GitDiff } from 'phosphor-react'

const FeatureTwo = () => {
  return (
    <div className={cn(styles.featureTwo, styles.featureTwoContainer)}>
      <div className="container-fluid--next">
        <div className={cn(styles.featureTwoTitleContainer)}>
          <div
            className={cn(
              styles.featureTwoTitle,
              'col-lg-8--next col-md-8--next col-sm-4--next col-xs-4--next'
            )}
          >
            <p className="font-h2">
              Very smart headline lorem ipsum dolor sit amet adipiscent.
            </p>
          </div>
        </div>

        <FeatureInnerContainer
          className={cn(
            'col-lg-3--next col-md-4--next col-sm-4--next col-xs-4--next'
          )}
        >
          <GitDiff></GitDiff>
          <div className="font-h5">
            Security infrastructure for global internet services.
          </div>
          <div className="font-p">
            Securing internet services requires more than a username and a
            password. We bring together everything that’s needed to make
            websites and internet services secure, regardless of scale or
            geolocation. Ory is affordable and based on mature open source
            software and open standards.
          </div>
        </FeatureInnerContainer>
        <FeatureInnerContainer
          className={cn(
            'col-lg-3--next col-md-4--next col-sm-4--next col-xs-4--next'
          )}
        >
          <GitDiff></GitDiff>
          <div className="font-h5">
            Security infrastructure for global internet services.
          </div>
          <div className="font-p">
            Securing internet services requires more than a username and a
            password. We bring together everything that’s needed to make
            websites and internet services secure, regardless of scale or
            geolocation. Ory is affordable and based on mature open source
            software and open standards.
          </div>
        </FeatureInnerContainer>
        <FeatureInnerContainer
          className={cn(
            'col-lg-3--next col-md-4--next col-sm-4--next col-xs-4--next'
          )}
        >
          <GitDiff></GitDiff>
          <div className="font-h5">
            Security infrastructure for global internet services.
          </div>
          <div className="font-p">
            Securing internet services requires more than a username and a
            password. We bring together everything that’s needed to make
            websites and internet services secure, regardless of scale or
            geolocation. Ory is affordable and based on mature open source
            software and open standards.
          </div>
        </FeatureInnerContainer>
        <FeatureInnerContainer
          className={cn(
            'col-lg-3--next col-md-4--next col-sm-4--next col-xs-4--next'
          )}
        >
          <GitDiff></GitDiff>
          <div className="font-h5">
            Security infrastructure for global internet services.
          </div>
          <div className="font-p">
            Securing internet services requires more than a username and a
            password. We bring together everything that’s needed to make
            websites and internet services secure, regardless of scale or
            geolocation. Ory is affordable and based on mature open source
            software and open standards.
          </div>
        </FeatureInnerContainer>
      </div>
    </div>
  )
}

export default FeatureTwo
