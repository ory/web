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

const resources = [
  {
    title: 'Security infrastructure for global internet services.',
    linkTitle: 'Resources',
    linkIcon: <ArrowRight color={'white'} weight={'fill'} size={32} />
  },
  {
    title: 'Security infrastructure for global internet services.',
    linkTitle: 'Resources',
    linkIcon: <ArrowRight color={'white'} weight={'fill'} size={32} />
  },
  {
    title: 'Security infrastructure for global internet services.',
    linkTitle: 'Resources',
    linkIcon: <ArrowRight color={'white'} weight={'fill'} size={32} />
  },
  {
    title: 'Security infrastructure for global internet services.',
    linkTitle: 'Resources',
    linkIcon: <ArrowRight color={'white'} weight={'fill'} size={32} />
  }
]

const Resource = () => (
  <div className={cn(styles.resource)}>
    <Container flexContainer={'column'}>
      <Container justify={'start'}>
        <Grid lg={8} md={8} sm={10}>
          <ContentText>
            <Molecule>
              <p className="font-h2">
                Very smart headline lorem ipsum dolor sit amet adipiscent.
              </p>
            </Molecule>
          </ContentText>
        </Grid>
      </Container>

      <Container flexContainer={'row'} justify={'start'}>
        {resources.map((resource, index) => {
          return (
            <Grid
              lg={4}
              md={4}
              sm={10}
              key={index}
              smOffset={false}
              className={cn(styles.resourceBoxContainer)}
            >
              <ResourceBox>
                <ContentText>
                  <MoleculeTextInteraction>
                    <Molecule>
                      <p className="font-h3">{resource.title}</p>
                    </Molecule>
                    <MoleculeInteraction>
                      <a href={''} className="font-link font-link-md">
                        {resource.linkTitle}
                      </a>
                      {resource.linkIcon}
                    </MoleculeInteraction>
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
