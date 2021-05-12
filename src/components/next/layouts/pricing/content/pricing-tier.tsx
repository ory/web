import React from 'react'
import * as styles from './pricing-tier.module.css'
import cn from 'classnames'
import Container from '../../../freestanding/containers/container'
import ContentText from '../../../freestanding/content/content-text'
import {
  pb32,
  pb48,
  pb64,
  pb8,
  pr8
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

interface Theme {
  fonth2: string
  fonth3: string
  fontp: string
  fontpsm: string
  background: string
}

const PricingTier = ({
                       className,
                       tier: {
                         theme = 'light',
                         title,
                         description,
                         price,
                         priceDescription,
                         button,
                         features
                       }
                     }: PropTypes) => {
  let classes: Theme
  
  if (theme === 'light') {
    classes = {
      fonth2: 'font-h2',
      fonth3: 'font-h3',
      fontp: 'font-p',
      fontpsm: 'font-p-sm',
      background: styles.tierLight
    }
  } else {
    classes = {
      fonth2: 'font-h2-light',
      fonth3: 'font-h3-light',
      fontp: 'font-p-light',
      fontpsm: 'font-p-sm-light',
      background: styles.tierDark
    }
  }
  
  return (
    <div className={cn(classes.background, className && className)}>
      <Container flexContainer={'column'} alignItems={'start'}>
        <ContentText className={cn(pb48)}>
          <Molecule>
            <div className={cn(classes.fonth3, pb32)}>{title}</div>
            <div className={cn(classes.fontp)}>{description}</div>
          </Molecule>
        </ContentText>
        <ContentText className={cn(pb48)}>
          <Molecule>
            <div className={cn(classes.fonth2, pb8)}>{price}</div>
            <div className={cn(classes.fontpsm)}>{priceDescription}</div>
          </Molecule>
        </ContentText>
      </Container>
      <div className={cn(pb64)}>{button}</div>
      <Container flexContainer={'column'} alignItems={'start'}>
        {features.map((feature) => {
          return (
            <Container justify={'start'} alignItems={'start'} key={feature.title}>
              <div className={cn(pr8)}>{feature.icon}</div>
              <div className={cn(classes.fontp)}>
                {feature.title}
              </div>
            </Container>
          )
        })}
      </Container>
    </div>
  )
}

export default PricingTier
