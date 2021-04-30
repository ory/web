import React from 'react'
import * as styles from './quickstart.module.css'
import cn from 'classnames'
import QuickstartInner from './content/quickstart-inner'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import { ArrowRight, GitDiff } from 'phosphor-react'
import MoleculeFeature from '../../freestanding/molecule/molecule-feature'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'

const Quickstart = () => (
  <div className={cn(styles.quickstart)}>
    <Container flexContainer={'row'} justify={'center'}>
      <Grid lg={4} md={10} sm={10}>
        <MoleculeTextInteraction>
          <ContentText>
            <Molecule>
              <p className="font-h3">Ready to get started?</p>
              <p className="font-p">
                Thousands of businesses with billions of network requests trust
                Ory's security to auth and manage users.
              </p>
            </Molecule>
            <MoleculeInteraction>
              <Button style={'filled'} href={''}>
                Get started for free
              </Button>
              <Button style={'text'} href={''}>
                Contact Sales
                <ArrowRight />
              </Button>
            </MoleculeInteraction>
          </ContentText>
        </MoleculeTextInteraction>
      </Grid>
      <Grid lg={6} md={10} sm={10}>
        <Container justify={'start'}>
          <Grid
            lg={6}
            md={6}
            sm={12}
            lgOffset={false}
            mdOffset={false}
            smOffset={false}
          >
            <MoleculeFeature>
              <ContentText>
                <Molecule>
                  <GitDiff
                    className={cn('icon-dark')}
                    weight={'duotone'}
                    size={32}
                  />
                  <p className={cn('font-h5')}>Check out our documentation!</p>
                  <p className={cn('font-p-md')}>
                    We believe in providing clear and extensive documentation to
                    enable developers to use our services quickly. They provide
                    a deep understanding of API concepts in an organized format.
                  </p>
                </Molecule>
              </ContentText>
            </MoleculeFeature>
          </Grid>
          <Grid
            lg={6}
            md={6}
            sm={12}
            lgOffset={false}
            mdOffset={false}
            smOffset={false}
          >
            <MoleculeFeature>
              <ContentText>
                <Molecule>
                  <GitDiff
                    className={cn('icon-dark')}
                    weight={'duotone'}
                    size={32}
                  />
                  <p className={cn('font-h5')}>Join a diverse community!</p>
                  <p className={cn('font-p-md')}>
                    Join our developer community to contribute to the Ory
                    platform! You will have access to our public chat, a
                    knowledge base to get started and the ability to actively
                    contribute and shape our open source project.
                  </p>
                </Molecule>
              </ContentText>
            </MoleculeFeature>
          </Grid>
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Quickstart
