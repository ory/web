import React from 'react'
import * as styles from './feature-three.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import ContentVisual from '../../freestanding/content/content-visual'
import hero from '../../../../images/illustrations/hero.svg'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'

interface PropTypes {
  title: string
  overline: string
  description: string
  button: React.ReactElement
  image: React.ReactElement
}

const FeatureThree = ({
  title,
  overline,
  description,
  button,
  image
}: PropTypes) => (
  <div className={cn(styles.featureThree)}>
    <Container fluid={true}>
      <Grid lg={5} md={5} sm={12} xs={12}>
        <ContentText>
          <Molecule>
            <div className={cn('font-overline')}>{overline}</div>
            <div className={cn('font-h3')}>{title}</div>
            <div className={cn('font-p')}>{description}</div>
          </Molecule>
          <MoleculeInteraction>{button}</MoleculeInteraction>
        </ContentText>
      </Grid>
    </Container>
  </div>
)

export default FeatureThree
