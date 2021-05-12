import React from 'react'
import { featureImage } from './feature-image.module.css'
import cn from 'classnames'
import { GitDiff, Triangle } from 'phosphor-react'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import Grid from '../../freestanding/containers/grid'
import Molecule from '../../freestanding/molecule/molecule'
import { pb16, pb32, pt32 } from '../../freestanding/utils/padding.module.css'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import ContentVisual from '../../freestanding/content/content-visual'

interface PropTypes {
  mirror?: boolean
  title: string
  overline: string
  description: string
  image: React.ReactElement
  buttons?: React.ReactNode
}

interface Content {
  title: string
  overline: string
  description: string
  buttons?: React.ReactNode
}

interface Visual {
  image: React.ReactElement
}

const Visual = ({ image }: Visual) => (
  <Grid className={cn(pt32)} lg={6} md={6} sm={12} xs={12}>
    <ContentVisual>{image}</ContentVisual>
  </Grid>
)

const Content = ({ title, overline, description, buttons }: Content) => (
  <Grid lg={5} md={5} sm={12} xs={12}>
    <ContentText>
      <Molecule>
        <div className={cn(pb16, 'font-overline')}>{overline}</div>
        <div className={cn('font-h3', pb32)}>{title}</div>
        <div className={cn('font-p')}>{description}</div>
      </Molecule>
      {buttons && <MoleculeInteraction>{buttons}</MoleculeInteraction>}
    </ContentText>
  </Grid>
)

const FeatureImage = ({
  mirror = false,
  title,
  overline,
  description,
  image,
  buttons
}: PropTypes) => {
  const order = [
    <Visual image={image} />,
    <Content
      title={title}
      description={description}
      overline={overline}
      buttons={buttons}
    />
  ]

  if (mirror) {
    order.reverse()
  }

  return (
    <div className={cn(featureImage)}>
      <Container fluid={true}>{order.map((x) => x)}</Container>
    </div>
  )
}

export default FeatureImage
