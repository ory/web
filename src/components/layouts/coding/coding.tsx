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
import { ArrowRight, ArrowSquareIn, GitDiff } from 'phosphor-react'
import Terminal from '../../freestanding/code/terminal'
import Code from '../../freestanding/code/code'
import {
  pb16,
  pb32,
  pb64,
  pt24,
  pt48,
  pt64,
  pt8
} from '../../freestanding/utils/padding.module.css'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import ContentVisual from '../../freestanding/content/content-visual'

export interface CodingContent {
  icon: React.ReactElement
  title: React.ReactElement
  description: React.ReactElement
  button: React.ReactElement
}

interface PropTypes {
  overline: string
  title: React.ReactElement
  description: React.ReactElement
  buttons?: React.ReactNode
  visual: React.ReactNode
  content: Array<CodingContent>
}

const Coding = ({
  overline,
  title,
  description,
  buttons,
  visual,
  content
}: PropTypes) => (
  <div className={cn(styles.coding)}>
    <Container fluid={true}>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <Container flexContainer={'column'}>
          <ContentText>
            <h3 className={cn('font-overline-light', pb16)}>{overline}</h3>
            <h2 className={cn('font-h3-light', pb32)}>{title}</h2>
            <p className={cn('font-p-light')}>{description}</p>
            {buttons && (
              <MoleculeInteraction className={cn(pt48)}>
                {buttons}
              </MoleculeInteraction>
            )}
          </ContentText>

          <Container alignItems={'start'} className={cn(pt64)}>
            {content.map(({ button, description, icon, title }, index) => (
              <Grid
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={cn(pb64)}
                key={index}
              >
                <ContentText>
                  <MoleculeTextInteraction>
                    <Molecule>
                      <ColourWrapper text={'themed-darkmode'}>
                        {icon}
                      </ColourWrapper>
                      <h4 className={cn('font-h5-light', pt8)}>{title}</h4>
                      <p className={cn('font-p-sm-light', pt8)}>
                        {description}
                      </p>
                    </Molecule>
                    <MoleculeInteraction className={cn(pt24)}>
                      {button}
                    </MoleculeInteraction>
                  </MoleculeTextInteraction>
                </ContentText>
              </Grid>
            ))}
          </Container>
        </Container>
      </Grid>

      <Grid lg={6} md={6} sm={12} xs={12}>
        <ContentVisual>{visual}</ContentVisual>
      </Grid>
    </Container>
  </div>
)

export default Coding
