import React from 'react'
import * as styles from './feature-two.module.css'
import cn from 'classnames'
import FeatureInnerContainer from './content/feature-inner-container'
import { GitDiff } from 'phosphor-react'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import Grid from '../../freestanding/containers/grid'

const features = [
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff />
  },
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff />
  },
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff />
  },
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff />
  }
]

const FeatureTwo = () => {
  return (
    <div className={cn(styles.featureTwo)}>
      <Container fluid={true}>
        <Container flexContainer={'row'} alignItems={'start'}>
          <Grid lg={8} md={12} sm={12}>
            <ContentText>
              <p className="font-h2">
                Very smart headline lorem ipsum dolor sit amet adipiscent.
              </p>
            </ContentText>
          </Grid>
        </Container>

        <Container
          flexContainer={'row'}
          alignItems={'start'}
          justify={'center'}
        >
          {features.map((feature) => {
            return (
              <ContentText>
                {feature.icon}
                <p className="font-h5">{feature.title}</p>
                <p className="font-p">{feature.description}</p>
              </ContentText>
            )
          })}
        </Container>
      </Container>
    </div>
  )
}

export default FeatureTwo
