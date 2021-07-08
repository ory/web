import cn from 'classnames'
import React from 'react'

import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'

import {
  pb16,
  pb48,
  pb64,
  pb8,
  pt24,
  pt32
} from '../../freestanding/utils/padding.module.css'
import { features, featuresContent } from './features.module.css'

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
    <Container fluid={true} alignItems={'start'}>
      <Grid lg={4} md={3} sm={12} xs={12} className={cn(pb64)}>
        <ContentText>
          <Molecule>
            <h3 className={cn('font-overline', 'primary', pb16)}>{overline}</h3>
            <h2 className={cn('font-h3')}>{title}</h2>
            {description && <p className={cn('font-p', pt32)}>{description}</p>}
          </Molecule>
          <MoleculeInteraction className={cn(pt24)}>
            {buttons}
          </MoleculeInteraction>
        </ContentText>
      </Grid>
      <Grid lg={6} md={8} sm={12} xs={12}>
        <Container alignItems={'start'} justify={'start'}>
          {feature.map((f, index) => {
            return (
              <Grid
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={cn(pb48, featuresContent)}
                key={index}
              >
                <Container flexContainer={'row'} alignItems={'start'}>
                  <ColourWrapper className={cn(pb8)} text={'themed-primary'}>
                    {f.icon}
                  </ColourWrapper>
                  <ContentText>
                    <h4 className={cn('font-h5', pb8)}>{f.title}</h4>
                    <p className={cn('font-p-sm', 'mute-60', pb8)}>
                      {f.description}
                    </p>
                  </ContentText>
                </Container>
              </Grid>
            )
          })}
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Features
