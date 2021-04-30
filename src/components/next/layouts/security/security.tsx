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
    title: 'Headless Login, Sign-Up & User Management',
    description:
      'Bring your own UI and Branding. Ory is the easiest way to add a custom login and registration process to your website or app.',
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'Zero Trust Architecture',
    description:
      'Our Zero Trust Architecture helps mitigate organizations’ security concerns regarding third-party applications and web applications.',
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'Scale globally',
    description:
      'Ory provides a reliable and resilient foundation for your business. Serve users around the globe quickly and without downtime.',
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'Permissions',
    description:
      'From a member of the marketing team, to an admin in your support staff— give everyone the right level of access to sensitive data.',
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'SDKs in every language',
    description:
      'Ory works with all popular programming languages like Java, PHP, Python, Ruby, Rust, Go, .Net, Dart.',
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'Social Sign In & Integrations',
    description:
      'Ory offers social sign in for all common OIDC providers (Google, Github, Facebook, Twitter ect.) as well as payment and email integrations. ',
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  }
]
const Security = () => (
  <div className={cn(styles.security)}>
    <Container alignItems={'start'} justify={'center'}>
      <Grid lg={4} md={10} sm={10}>
        <ContentText>
          <MoleculeTextInteraction>
            <Molecule>
              <p className={cn('font-h3')}>
                Ory solves identity and access control, no matter what industry
                you’re in.
              </p>
              <p className={cn('font-p')}>
                To meet the needs of modern web development, we have designed a
                system that performs with a high level of security and
                robustness every single day, no matter how big the business is
                or where they operate. <p />
                The heart of Ory is a modern web service that works for all
                sizes of customers. It requires little to no pre-configuration,
                is highly scalable and uses only open source software and
                standards.
              </p>
            </Molecule>
            <MoleculeInteraction>
              <Button href={''} style={'filled'}>
                Get started for free
              </Button>
            </MoleculeInteraction>
          </MoleculeTextInteraction>
        </ContentText>
      </Grid>
      <Grid lg={5} md={10} sm={10}>
        <Container alignItems={'center'} justify={'start'}>
          {features.map((feature, index) => {
            return (
              <Grid
                lg={5}
                md={12}
                sm={10}
                lgOffset={false}
                smOffset={false}
                mdOffset={false}
                key={index}
              >
                {feature.icon}
                <p className="font-h5">{feature.title}</p>
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
