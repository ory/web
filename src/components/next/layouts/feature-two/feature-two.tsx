import React from 'react'
import * as styles from './feature-two.module.css'
import cn from 'classnames'
import { GitDiff } from 'phosphor-react'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import Grid from '../../freestanding/containers/grid'
import FeatureTwoInner from './content/feature-two-inner'
import Molecule from '../../freestanding/molecule/molecule'

const features = [
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32} />
  },
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32} />
  },
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32} />
  },
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Securing internet services requires more than a username and ' +
      'password. We bring together everything that’s needed to make ' +
      'websites and internet services secure, regardless of scale or ' +
      'geolocation. Ory is affordable and based on mature open source ' +
      'software and open standards.',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32} />
  }
]

const FeatureTwo = () => {
  return (
    <div className={cn(styles.featureTwo)}>
      <Container
        fluid={true}
        flexContainer={'column'}
        justify={'start'}
        alignItems={'center'}
      >
        <Grid lg={10} md={10} sm={10}>
          <ContentText>
            <Molecule>
              <p className="font-h2">
                Very smart headline lorem ipsum dolor sit amet adipiscent.
              </p>
            </Molecule>
          </ContentText>
        </Grid>

        <Grid lg={10} md={12} sm={10}>
          <Container>
            {features.map((feature, index) => {
              return (
                <Grid
                  lg={3}
                  md={5}
                  sm={10}
                  lgOffset={false}
                  mdOffset={false}
                  smOffset={false}
                  key={index}
                >
                  <ContentText>
                    <Molecule>
                      {feature.icon}
                      <p className="font-h5">{feature.title}</p>
                      <p className="font-p-sm">{feature.description}</p>
                    </Molecule>
                  </ContentText>
                </Grid>
              )
            })}
          </Container>
        </Grid>
      </Container>
    </div>
  )
}

export default FeatureTwo
