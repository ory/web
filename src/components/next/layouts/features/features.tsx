import React from 'react'
import { features } from './features.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import {
  pb16,
  pb24,
  pb48,
  pb64,
  pb8,
  pl32,
  pr32,
  pt24,
  pt32
} from '../../freestanding/utils/padding.module.css'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'

export interface Feat {
  icon: React.ReactElement
  title: React.ReactElement
  description: React.ReactElement
}

interface PropTypes {
  overline: string
  title: React.ReactElement
  description?: React.ReactElement
  buttons?: React.ReactNode
  feature: Array<Feat>
}

const Features = ({
  overline,
  title,
  description,
  buttons,
  feature
}: PropTypes) => (
  <div className={cn(features)}>
    <Container fluid={true}>
      <Grid lg={6} md={6} sm={12} xs={12} className={cn(pb64)}>
        <ContentText>
          <Molecule>
            <p className={cn('font-overline', pb16)}>{overline}</p>
            <h3 className={cn('font-h3')}>{title}</h3>
            {description && (
              <p className={cn('font-p', pt32)}>{description}</p>
            )}
          </Molecule>
          <MoleculeInteraction className={cn(pt24)}>
            {buttons}
          </MoleculeInteraction>
        </ContentText>
      </Grid>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <Container alignItems={'start'} justify={'start'}>
          {feature.map((f, index) => {
            return (
              <Grid
                lg={5}
                md={5}
                sm={12}
                xs={12}
                className={cn(pb64)}
                key={index}
              >
                <ColourWrapper text={'themed-primary'} className={cn(pr32)}>
                  {f.icon}
                </ColourWrapper>
                <ContentText>
                  <h5 className={cn('font-h5', pb8)}>{f.title}</h5>
                  <p className={cn('font-p-sm')}>{f.description}</p>
                </ContentText>
              </Grid>
            )
          })}
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Features
