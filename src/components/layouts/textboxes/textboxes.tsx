import React from 'react'
import { textboxes, textboxesContent } from './textboxes.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import {
  pb16,
  pb48,
  pb64,
  pb8,
  pt24,
  pt32
} from '../../freestanding/utils/padding.module.css'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'

export interface Text {
  icon: React.ReactElement
  title: React.ReactElement
  description: React.ReactElement
}

interface PropTypes {
  overline: string
  title: React.ReactElement
  description?: React.ReactElement
  buttons?: React.ReactNode
  textbox: Array<Text>
}

const Textboxes = ({
  overline,
  title,
  description,
  buttons,
  textbox
}: PropTypes) => (
  <div className={cn(textboxes)}>
    <Container fluid={true} alignItems={'start'}>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <Container alignItems={'start'} justify={'start'}>
          {textbox.map((f, index) => {
            return (
              <Grid
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={cn(pb48, textboxesContent)}
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

export default Textboxes
