import React from 'react'
import * as styles from './feature-two.module.css'
import cn from 'classnames'
import { GitDiff } from 'phosphor-react'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import Grid from '../../freestanding/containers/grid'
import FeatureTwoInner from './content/feature-two-inner'

const features = [
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32}/>
  },
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32}/>
  },
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32}/>
  },
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32}/>
  }
]

const FeatureTwo = () => {
  return (
    <div className={cn(styles.featureTwo)}>
      <Container fluid={true} flexContainer={'row'}>
        <FeatureTwoInner>
          <ContentText>
            <p className="font-h2">
              Very smart headline lorem ipsum dolor sit amet adipiscent.
            </p>
          </ContentText>
        </FeatureTwoInner>
        <FeatureTwoInner>
          <Container
            flexContainer={'row'}
            alignItems={'start'}
            justify={'center'}
          >
            {features.map((feature, index) => {
              return (
                <ContentText key={index}>
                  {feature.icon}
                  <p className="font-h5">{feature.title}</p>
                  <p className="font-p">{feature.description}</p>
                </ContentText>
              )
            })}
          </Container>
        </FeatureTwoInner>
      </Container>
    </div>
  )
}

export default FeatureTwo
