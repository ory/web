import React from 'react'
import { featureTwo } from './feature-two.module.css'
import cn from 'classnames'
import { GitDiff, Triangle } from 'phosphor-react'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import Grid from '../../freestanding/containers/grid'
import Molecule from '../../freestanding/molecule/molecule'
import { pb16, pt32 } from '../../freestanding/utils/padding.module.css'

interface PropTypes {
  title: string
  overline: string
  description: string
  image: React.ReactElement
}

const FeatureTwo = ({ title, overline, description, image }: PropTypes) => {
  return (
    <div className={cn(featureTwo)}>
      <Container fluid={true}>
        <Grid className={cn(pt32)} lg={6} md={6} sm={12} xs={12}>
          {image}
        </Grid>
        <Grid lg={5} md={5} sm={12} xs={12}>
          <ContentText>
            <Molecule>
              <div className={cn(pb16, 'font-overline')}>{overline}</div>
              <div className={cn('font-h3')}>{title}</div>
              <div className={cn('font-p')}>{description}</div>
            </Molecule>
          </ContentText>
        </Grid>
      </Container>
    </div>
  )
}

export default FeatureTwo
