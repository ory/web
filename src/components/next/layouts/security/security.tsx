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
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure",
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure",
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure",
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure",
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure",
    icon: <Fingerprint className={cn('icon-dark')} weight={'fill'} size={32} />
  },
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure",
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
                A fully integrated suite of security products.
              </p>
              <p className={cn('font-p')}>
                Securing internet services requires more than a username and a
                password. We bring together everything that’s needed to make
                websites and internet services secure, regardless of scale or
                geolocation. Ory is affordable and based on mature open source
                software and open standards.
              </p>
            </Molecule>
            <MoleculeInteraction>
              <Button to={''} style={'filled'}>
                Get started for free
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
