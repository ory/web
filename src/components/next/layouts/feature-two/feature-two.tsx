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
    title: 'A firm foundation',
    description:
      'Our network is designed to scale ' +
      'according to your needs, whether ' +
      'you have hundreds or millions of ' +
      'users. Grow without limits! ',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32} />
  },
  {
    title: 'Managed by experts',
    description:
      'Instead of developing and ' +
      'maintaining your own solution, you ' +
      'pay for what you use − and ' +
      'we take care of the rest.',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32} />
  },
  {
    title: 'Security infrastructure for global internet services.',
    description:
      'Ory has been built to work alongside other ' +
      'applications so you can easily ' +
      'deploy new features and add ' +
      'additional capabilities. ',
    icon: <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32} />
  },
  {
    title: 'Tailored user experience',
    description:
      'Ory allows for complete ' +
      'customization, for both UI  ' +
      'framework and style. Quickly ' +
      'onboard users your way. ',
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
                Focus on what matters: <b /> Creating value for your business
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
