import React from 'react'
import * as styles from './coding.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import {ArrowRight, ArrowSquareIn, GitDiff } from 'phosphor-react'

const Coding = () => (
  <div className={cn(styles.coding)}>
    <Container fluid={true}>
      <Grid lg={6} md={6} sm={12}>
        <Container flexContainer={'column'} alignItems={'start'}>
          <ContentText>
            <MoleculeTextInteraction>
              <Molecule>
                <p className={cn('font-h3-light')}>
                  Ory takes developer experience serious
                </p>
                <p className={cn('font-p-light')}>
                  We started Ory because “IAM” developer experience was and still is terrible.
                  Ory ships with SDKs for all programming languages, extensive and detailed documentation,
                  easy-to-use CLIs. Our open source approach enables you to participate in API and architecture design -
                  your next PR will be shipped in Ory.
                </p>
              </Molecule>
              <MoleculeInteraction>
                <Button href={''} style={'filled'}>Documentation</Button>
              </MoleculeInteraction>
            </MoleculeTextInteraction>
          </ContentText>
          
          <Container flexContainer={'row'}>
            <Grid lg={6} md={6} sm={12}>
              <ContentText>
                <MoleculeTextInteraction>
                  <Molecule>
                    <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32}/>
                    <p className={cn('font-h3-light')}>
                      Powerful Tools
                    </p>
                    <p className={cn('font-p-light')}>
                      Ory ships REST APIs, gRPC APIs, SDKs, and CLIs for all operating systems and CPUs.
                    </p>
                  </Molecule>
                  <MoleculeInteraction>
                    <a className={cn('font-link font-link-md link-news')} href={''}>
                      API Reference <ArrowRight/>
                    </a>
                  </MoleculeInteraction>
                </MoleculeTextInteraction>
              </ContentText>
            </Grid>
            <Grid lg={6} md={6} sm={12}>
              <ContentText>
                <MoleculeTextInteraction>
                  <Molecule>
                    <GitDiff className={cn('icon-dark')} weight={'duotone'} size={32}/>
                    <p className={cn('font-h3-light')}>
                      Open Source Governance
                    </p>
                    <p className={cn('font-p-light')}>
                      Participate in discussions, feature requests, bug fixes, and
                      PRs the way you are used to from open source.
                    </p>
                  </Molecule>
                  <MoleculeInteraction>
                    <a className={cn('font-link font-link-md link-news')} href={''}>
                      GitHub <ArrowSquareIn/>
                    </a>
                  </MoleculeInteraction>
                </MoleculeTextInteraction>
              </ContentText>
            </Grid>
          </Container>
          
          
        </Container>
      </Grid>
      <Grid lg={6} md={6} sm={12}>
        <p>Some content</p>
      </Grid>
    </Container>
  </div>
)

export default Coding
