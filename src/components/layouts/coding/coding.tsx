import React from 'react'
import * as styles from './coding.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import {
  pb16,
  pb32,
  pb64,
  pb8
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
          <ContentText className={cn(pb64)}>
            <h3 className={cn('font-overline', 'light', pb16)}>{overline}</h3>
            <h2 className={cn('font-h3', 'light', pb32)}>{title}</h2>
            <p className={cn('font-p', 'light', 'mute-85', pb32)}>
              {description}
            </p>
            {buttons && (
              <MoleculeInteraction className={''}>
                {buttons}
              </MoleculeInteraction>
            )}
          </ContentText>

          <Container alignItems={'start'}>
            {content.map(({ button, description, icon, title }, index) => (
              <Grid
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={cn(pb64)}
                key={index}
              >
                <ContentText>
                  <MoleculeTextInteraction>
                    <Molecule>
                      <ColourWrapper
                        text={'themed-primary'}
                        className={cn(pb8)}
                      >
                        {icon}
                      </ColourWrapper>
                      <h4 className={cn('font-h5', 'light', pb8)}>{title}</h4>
                      <p className={cn('font-p-sm', 'mute-85', 'light', pb8)}>
                        {description}
                      </p>
                    </Molecule>
                    <MoleculeInteraction>{button}</MoleculeInteraction>
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
