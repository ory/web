import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'

import {
  pb4,
  pb24,
  pl8,
  pl24
} from '../../freestanding/utils/padding.module.css'

export interface Features {
  title: string
  description: React.ReactElement
  icon: React.ReactElement
}

interface PropType {
  className?: string
  features: Array<Features>
}

const FeatureListItem = ({ className, features }: PropType) => (
  <div className={cn(className && className)}>
    <Container flexContainer={'column'}>
      {features.map((feature) => {
        return (
          <Container className={cn(pb24)} justify={'start'} key={feature.title}>
            {feature.icon}
            <ContentText className={cn(pb4, pl8)}>
              <Molecule>
                <p className={cn('font-p font-bold')}>{feature.title}</p>
              </Molecule>
            </ContentText>
            <Container flexContainer={'column'} className={cn(pl24)}>
              <ContentText>
                <Molecule>
                  <p className={cn('font-p-sm', 'mute-85')}>
                    {feature.description}
                  </p>
                </Molecule>
              </ContentText>
            </Container>
          </Container>
        )
      })}
    </Container>
  </div>
)

export default FeatureListItem
