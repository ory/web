import React from 'react'
import {
  mb4,
  mb24,
  ml8,
  ml24
} from '../../../freestanding/utils/padding.module.css'
import cn from 'classnames'
import Container from '../../../freestanding/containers/container'
import Grid from '../../../freestanding/containers/grid'
import ContentText from '../../../freestanding/content/content-text'
import Molecule from '../../../freestanding/molecule/molecule'

export interface Features {
  title: string
  description: string
  icon: React.ReactElement
}

interface PropType {
  className?: string
  features: Array<Features>
}

const FeatureListContent = ({ className, features }: PropType) => (
  <div className={cn(className && className)}>
    <Container flexContainer={'column'}>
      {features.map((feature) => {
        return (
          <Container className={cn(mb24)} justify={'start'}>
            {feature.icon}
            <ContentText className={cn(mb4, ml8)}>
              <Molecule>
                <div className={cn('font-p font-bold')}>{feature.title}</div>
              </Molecule>
            </ContentText>
            <Container flexContainer={'column'} className={cn(ml24)}>
              <ContentText>
                <Molecule>
                  <div className={cn('font-p-sm')}>{feature.description}</div>
                </Molecule>
              </ContentText>
            </Container>
          </Container>
        )
      })}
    </Container>
  </div>
)

export default FeatureListContent
