import React from 'react'
import { featureImage } from './feature-image.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import Grid from '../../freestanding/containers/grid'
import Molecule from '../../freestanding/molecule/molecule'
import {
  pb16,
  pb24,
  pb32,
  pb64
} from '../../freestanding/utils/padding.module.css'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import ContentVisual from '../../freestanding/content/content-visual'

interface PropTypes {
  mirror?: boolean
  title: React.ReactElement
  overline: string
  description: React.ReactElement
  image: React.ReactElement
  buttons?: React.ReactNode
}

interface Content {
  title: React.ReactElement
  overline: string
  description: React.ReactElement
  buttons?: React.ReactNode
}

interface Visual {
  image: React.ReactElement
}

const Visual = ({ image }: Visual) => (
  <Grid lg={6} md={8} sm={12} xs={12}>
    <ContentVisual>{image}</ContentVisual>
  </Grid>
)

const Content = ({ title, overline, description, buttons }: Content) => (
  <Grid lg={4} md={4} sm={12} xs={12} className={cn(pb64)}>
    <ContentText>
      <Molecule>
        <h3 className={cn('font-overline', 'primary', pb16)}>{overline}</h3>
        <h2 className={cn('font-h3', pb32)}>{title}</h2>
        <p className={cn('font-p', 'mute-85', pb24)}>{description}</p>
      </Molecule>
      {buttons && <MoleculeInteraction>{buttons}</MoleculeInteraction>}
    </ContentText>
  </Grid>
)

interface ContainerProps {
  xsHidden?: boolean
  smHidden?: boolean
  mdHidden?: boolean
  lgHidden?: boolean
}

const FeatureImage = ({
  mirror = false,
  title,
  overline,
  description,
  image,
  buttons
}: PropTypes) => {
  const order = [
    <Visual image={image} key={1} />,
    <Content
      title={title}
      description={description}
      overline={overline}
      buttons={buttons}
      key={2}
    />
  ]

  let containerMirror: ContainerProps = {
    smHidden: true,
    xsHidden: true,
    mdHidden: true,
    lgHidden: true
  }

  let containerAdditional: ContainerProps = {
    smHidden: false,
    xsHidden: false,
    mdHidden: false,
    lgHidden: false
  }

  if (mirror) {
    order.reverse()
    containerMirror = {
      smHidden: false,
      xsHidden: false,
      mdHidden: true,
      lgHidden: true
    }
    containerAdditional = {
      smHidden: true,
      xsHidden: true,
      mdHidden: false,
      lgHidden: false
    }
  }

  return (
    <div className={cn(featureImage)}>
      <Container
        fluid={true}
        justify={'space-between'}
        alignItems={'start'}
        {...containerMirror}
      >
        {order.map((x, index) => x)}
      </Container>
      <Container
        fluid={true}
        justify={'space-between'}
        alignItems={'start'}
        {...containerAdditional}
      >
        {order.reverse().map((x, index) => x)}
      </Container>
    </div>
  )
}

export default FeatureImage
