import React from 'react'
import * as styles from './feature-list.module.css'
import {
  pb32,
  pb48,
  pb64,
  pt32,
  pt64
} from '../../freestanding/utils/padding.module.css'

import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import FeatureListContent, { Features } from './content/feature-list-content'
import { ArrowRight, CheckCircle, Circle, Flag, Triangle } from 'phosphor-react'
import ContentText from '../../freestanding/content/content-text'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Molecule from '../../freestanding/molecule/molecule'
import Button from '../../freestanding/button/button'
import Grid from '../../freestanding/containers/grid'
import MoleculeIconWrapper from '../../freestanding/molecule/molecule-icon-wrapper'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'

interface FeatureSection {
  icon: React.ReactElement
  title: string
  description: string
  button: React.ReactElement
  features: Array<Features>
}

const featureSections: Array<FeatureSection> = [
  {
    icon: <Triangle color={'white'} size={24} />,
    title: 'Features',
    description:
      'Sign up now and instantly access these features. All features except the Ory CLI and interfaces are included when self hosting.',
    button: (
      <Button style={'text'} to={'/'} iconRight={<ArrowRight size={16} />}>
        Read more
      </Button>
    ),
    features: [
      {
        title: 'Ory Cli',
        description:
          'Control the Ory platform from the command line with an intuitive and accessible syntax. ',
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />
      },
      {
        title: 'Log in & Sign up',
        description:
          'The basics of IAM: Login & register users fast and without complicated flows and store credentials securely.',
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />
      }
    ]
  },
  {
    icon: <Circle color={'white'} size={24} />,
    title: 'Features landing in 2021',
    description:
      'We are currently working on implementing these features. Sign up for the newsletter to stay up to date!',
    button: (
      <Button style={'text'} to={'/'} iconRight={<ArrowRight size={16} />}>
        Visit the Ory roadmap
      </Button>
    ),
    features: [
      {
        icon: <Flag className={cn(styles.featurePlanned)} size={16} />,
        title: 'Multifactor Authentication',
        description:
          'Securely authenticate your users with a variety of factors, including passwordless, WebAuthn, TOTP.'
      },
      {
        icon: <Flag className={cn(styles.featurePlanned)} size={16} />,
        title: 'Permissions & Roles',
        description:
          'From a member of the marketing team, to an admin in your support staff— give everyone the right level of access to sensitive data.'
      },
      {
        icon: <Flag className={cn(styles.featurePlanned)} size={16} />,
        title: 'Use your UI',
        description:
          'Bring your own UI and Branding. Easily add your own personal look, feel and brand to any user or internal interface.'
      },
      {
        icon: <Flag className={cn(styles.featurePlanned)} size={16} />,
        title: 'Webhooks & Triggers',
        description:
          'Use webhooks to define and trigger certain actions when users e.g. register, log in, verify their email... you name it!'
      }
    ]
  }
]

const FeatureList = () => (
  <div className={cn(styles.featureList)}>
    <Container fluid={true}>
      {featureSections.map((section) => {
        return (
          <Container
            className={cn(pb64, pt64)}
            alignItems={'start'}
            key={section.title}
          >
            <Grid lg={3} md={3} sm={12} xs={12} className={cn(pb48)}>
              <ContentText>
                <Molecule>
                  <MoleculeIconWrapper>{section.icon}</MoleculeIconWrapper>
                  <div className={cn('font-h3', pb32, pt32)}>
                    {section.title}
                  </div>
                  <div className={cn('font-p')}>{section.description}</div>
                </Molecule>
              </ContentText>
            </Grid>
            <Grid lg={6} md={8} sm={12} xs={12}>
              <FeatureListContent features={section.features} />
            </Grid>
          </Container>
        )
      })}
    </Container>
  </div>
)

export default FeatureList
