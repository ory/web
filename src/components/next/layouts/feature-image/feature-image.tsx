import React from 'react'
import {featureImage} from './feature-image.module.css'
import cn from 'classnames'
import {GitDiff, Triangle} from 'phosphor-react'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import Grid from '../../freestanding/containers/grid'
import Molecule from '../../freestanding/molecule/molecule'
import {
  pb16,
  pb32,
  pt24,
  pt32
} from '../../freestanding/utils/padding.module.css'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import ContentVisual from '../../freestanding/content/content-visual'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'

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

const Visual = ({image}: Visual) => (
  <Grid lg={6} md={6} sm={12} xs={12} className={cn(pt32)}>
    <ContentVisual>{image}</ContentVisual>
  </Grid>
)

const Content = ({title, overline, description, buttons}: Content) => (
  <Grid lg={5} md={5} sm={12} xs={12} className={cn(pb32)}>
    <ContentText>
      <Molecule>
        <div className={cn(pb16, 'font-overline')}>{overline}</div>
        <div className={cn('font-h3', pb32)}>{title}</div>
        <div className={cn('font-p')}>{description}</div>
      </Molecule>
      {buttons && (
        <MoleculeInteraction className={cn(pt24)}>
          {buttons}
        </MoleculeInteraction>
      )}
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
    <Visual image={image} key={1}/>,
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
    lgHidden: true,
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
      lgHidden: true,
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
      <Container fluid={true} justify={'space-between'}
                 alignItems={'start'} {...containerMirror}>
        {order.map((x, index) => x)}
      </Container>
      <Container fluid={true} justify={'space-between'} alignItems={'start'} {...containerAdditional}>
        {order.reverse().map((x, index) => x)}
      </Container>
    </div>
  )
}

export default FeatureImage
