import React from 'react'
import * as styles from './resource.module.css'
import cn from 'classnames'
import { ArrowRight } from 'phosphor-react'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import ResourceBox from './content/resource-box'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'
import Grid from '../../freestanding/containers/grid'
import Button from '../../freestanding/button/button'

const resources = [
  {
    title: 'Quickstart in 5 minutes',
    linkTitle: 'Resources',
    linkIcon: <ArrowRight color={'white'} weight={'fill'} size={32} />,
    background: 'keto'
  },
  {
    title: 'Complete API reference',
    linkTitle: 'Resources',
    linkIcon: <ArrowRight color={'white'} weight={'fill'} size={32} />,
    background: 'dockertest'
  },
  {
    title: 'Community Slack Channel',
    linkTitle: 'Resources',
    linkIcon: <ArrowRight color={'white'} weight={'fill'} size={32} />,
    background: 'kratos'
  },
  {
    title: 'Onboard with one of our engineers',
    linkTitle: 'Resources',
    linkIcon: <ArrowRight color={'white'} weight={'fill'} size={32} />,
    background: 'hydra'
  }
]

const Resource = () => (
  <div className={cn(styles.resource)}>
    <Container fluid={true}>
      <ContentText>
        <Molecule>
          <p className="font-h2">
            Very smart headline lorem ipsum dolor sit amet adipiscent.
          </p>
        </Molecule>
      </ContentText>

      <Container
        flexContainer={'row'}
        justify={'space-between'}
        alignItems={'stretch'}
        className={cn(styles.resourceBoxContainer)}
      >
        {resources.map((resource, index) => {
          return (
            <Grid lg={3} md={3} sm={10} key={index}>
              <ResourceBox color={resource.background}>
                <ContentText padded={true}>
                  <MoleculeTextInteraction>
                    <Container
                      flexContainer={'row'}
                      justify={'space-between'}
                      alignItems={'stretch'}
                    >
                      <Molecule>
                        <h3 className="font-h3">{resource.title}</h3>
                      </Molecule>
                      <MoleculeInteraction>
                        <Button
                          to={'/'}
                          style={'text'}
                          iconRight={resource.linkIcon}
                        >
                          {resource.linkTitle}
                        </Button>
                      </MoleculeInteraction>
                    </Container>
                  </MoleculeTextInteraction>
                </ContentText>
              </ResourceBox>
            </Grid>
          )
        })}
      </Container>
    </Container>
  </div>
)

export default Resource
