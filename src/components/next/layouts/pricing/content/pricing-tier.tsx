import React from 'react'
import cn from 'classnames'
import Container from '../../../freestanding/containers/container'
import ContentText from '../../../freestanding/content/content-text'
import {
  pb32,
  pb48,
  pb64,
  pb8
} from '../../../freestanding/utils/padding.module.css'
import Molecule from '../../../freestanding/molecule/molecule'

export interface PriceFeature {
  icon: React.ReactElement
  title: string
}

export interface PriceTier {
  theme: 'light' | 'dark'
  title: string
  description: string
  price: string
  priceDescription: string
  button: React.ReactElement
  features: Array<PriceFeature>
}

interface PropTypes {
  className?: string
  tier: PriceTier
}

const PricingTier = ({ className, tier }: PropTypes) => (
  <div className={cn(className && className)}>
    <Container flexContainer={'column'}>
      <ContentText className={cn(pb48)}>
        <Molecule>
          <div className={cn('font-h3', pb32)}>{tier.title}</div>
          <div className={cn('font-p')}>{tier.description}</div>
        </Molecule>
      </ContentText>
      <ContentText className={cn(pb48)}>
        <Molecule>
          <div className={cn('font-h2', pb8)}>{tier.price}</div>
          <div className={cn('font')}>{tier.priceDescription}</div>
        </Molecule>
      </ContentText>
      <div className={cn(pb64)}>{tier.button}</div>
    </Container>
  </div>
)

export default PricingTier
