import cn from 'classnames'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import IconWrapper from '../../freestanding/icon/icon-wrapper'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'

import * as styles from './security.module.css'

const Fingerprint = <i className={'ph-fingerprint  size32 icon-dark'} />

const features = [
  {
    title: 'Ory is open source',
    description:
      "Ory's heart and soul are rooted in the open source community. Our commitment to open software will stay unchanged forever. ",
    icon: Fingerprint
  },
  {
    title: 'No limits on identities',
    description:
      'The unique pricing model does not charge you for Monthly Active Users. Choose a flexible and transparent plan that adapts to your needs.',
    icon: Fingerprint
  },
  {
    title: 'More features',
    description:
      'Ory draws from a large set of features: IAM, Permissions and Roles, Zero-Trust, OAuth2, OIDC, Integrations, global low latency and many more.',
    icon: Fingerprint
  },
  {
    title: 'No lock in',
    description:
      'We support the migration from Ory Open Source to the Ory Cloud, and the other way around. Never worry about cloud lock in again.',
    icon: Fingerprint
  }
]
const Security = () => (
  <div className={cn(styles.security)}>
    <Container fluid={true} alignItems={'start'}>
      <Grid lg={4} md={6} sm={10} xs={12}>
        <Container justify={'start'}>
          <ContentText>
            <MoleculeTextInteraction>
              <Molecule>
                <p className={cn('font-h3')}>
                  Auth integration in 1.. 2.. done!
                </p>
              </Molecule>
              <MoleculeInteraction>
                <Button to={''} style={'filled'}>
                  Get started
                </Button>
              </MoleculeInteraction>
            </MoleculeTextInteraction>
          </ContentText>
        </Container>
      </Grid>
      <Grid lg={8} md={6} sm={12} xs={12}>
        <Container alignItems={'center'} justify={'stretch'}>
          {features.map((feature, index) => {
            return (
              <Grid
                lg={5}
                md={12}
                sm={5}
                lgOffset={false}
                smOffset={false}
                mdOffset={false}
                key={index}
              >
                {feature.icon}
                <h5 className="font-h5">{feature.title}</h5>
                <p className="font-p">{feature.description}</p>
              </Grid>
            )
          })}
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Security
