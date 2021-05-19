import React from 'react'
import * as styles from './security.module.css'
import cn from 'classnames'
import SecurityInner from './content/security-inner'
import SecurityFeatures from './content/security-features'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import { Fingerprint } from 'phosphor-react'

const features = [
  {
    title: 'Ory is open source',
    description:
      "Ory's heart and soul are rooted in the open source community. Our commitment to open software will stay unchanged forever. ",
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'No limits on identities',
    description:
      'The unique pricing model does not charge you for Monthly Active Users. Choose a flexible and transparent plan that adapts to your needs.',
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'More features',
    description:
      'Ory draws from a large set of features: IAM, Permissions and Roles, Zero-Trust, OAuth2, OIDC, Integrations, global low latency and many more.',
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'No lock in',
    description:
      'We support the migration from Ory open source to Ory as a Service, and the other way around. Never worry about cloud lock in again.',
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
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
