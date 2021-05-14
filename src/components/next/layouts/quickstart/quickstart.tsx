import React from 'react'
import * as styles from './quickstart.module.css'
import cn from 'classnames'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import {
  pb32,
  pb48,
  pb64,
  pb8,
  pt24
} from '../../freestanding/utils/padding.module.css'

export interface QuickstartContent {
  icon: React.ReactElement
  title: React.ReactElement
  description: React.ReactElement
  button: React.ReactElement
}

interface PropType {
  title: React.ReactElement
  description: React.ReactElement
  buttons?: React.ReactNode
  content: Array<QuickstartContent>
}

const Quickstart = ({ title, description, buttons, content }: PropType) => (
  <div className={cn(styles.quickstart)}>
    <Container fluid={true} alignItems={'start'}>
      <Grid lg={6} md={6} sm={12} xs={12} className={cn(pb64)}>
        <ContentText>
          <Molecule>
            <div className={cn('font-h3', pb32)}>{title}</div>
            <div className={cn('font-p', pb48)}>{description}</div>
          </Molecule>
          <MoleculeInteraction>{buttons}</MoleculeInteraction>
        </ContentText>
      </Grid>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <Container alignItems={'start'}>
          {content.map(({ button, icon, description, title }) => (
            <Grid lg={5} md={6} sm={12} xs={12} className={cn(pb48)}>
              <ContentText>
                <ColourWrapper text={'themed-primary'}>{icon}</ColourWrapper>
                <div className={cn('font-h5', pb8)}>{title}</div>
                <div className={cn('font-p-sm')}>{description}</div>
                <MoleculeInteraction className={pt24}>
                  {button}
                </MoleculeInteraction>
              </ContentText>
            </Grid>
          ))}
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Quickstart
