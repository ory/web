import cn from 'classnames'
import React from 'react'

import Container from '../../../freestanding/containers/container'
import Grid from '../../../freestanding/containers/grid'
import ContentText from '../../../freestanding/content/content-text'
import Molecule from '../../../freestanding/molecule/molecule'

import {
  pb16,
  pb48,
  pb64,
  pb8,
  pr4,
  pr8
} from '../../../freestanding/utils/padding.module.css'
import * as styles from './pricing-tier.module.css'

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
  featuresContainer?: 'column' | 'row'
  features: Array<PriceFeature>
}

interface PriceTierFeatures {
  features: Array<PriceFeature>
  classes: Theme
}

interface PriceTierContent {
  title: string
  description: string
  price: string
  priceDescription: string
  button: React.ReactElement
  classes: Theme
}

interface PropTypes {
  className?: string
  tier: PriceTier
}

interface Theme {
  fonth2: string
  fonth3: string
  fontp: string
  fontp2: string
  fontpsm: string
  background: string
}

const PricingContent = ({
  title,
  description,
  price,
  priceDescription,
  button,
  classes
}: PriceTierContent) => (
  <>
    <Container flexContainer={'column'} alignItems={'start'}>
      <ContentText className={cn(pb48)}>
        <Molecule>
          <h3 className={cn(classes.fonth3, pb16)}>{title}</h3>
          <p className={cn(classes.fontp)}>{description}</p>
        </Molecule>
      </ContentText>
      <ContentText className={cn(pb48)}>
        <Molecule>
          <h2 className={cn(classes.fonth2)}>{price}</h2>
          <p className={cn(classes.fontpsm)}>{priceDescription}</p>
        </Molecule>
      </ContentText>
    </Container>
    <div className={cn(pb64)}>{button}</div>
  </>
)

const PricingFeatures = ({ features, classes }: PriceTierFeatures) => (
  <Container flexContainer={'column'} alignItems={'start'}>
    {features.map((feature) => {
      return (
        <Container justify={'start'} alignItems={'center'} key={feature.title}>
          <div className={cn(pr8)}>{feature.icon}</div>
          <p className={cn(classes.fontp2)}>{feature.title}</p>
        </Container>
      )
    })}
  </Container>
)

const PricingTier = ({
  className,
  tier: {
    theme = 'light',
    title,
    description,
    price,
    priceDescription,
    button,
    featuresContainer = 'column',
    features
  }
}: PropTypes) => {
  let classes: Theme

  if (theme === 'light') {
    classes = {
      fonth2: 'font-h2',
      fonth3: 'font-h3',
      fontp: 'font-p mute-60',
      fontp2: 'font-p mute-85',
      fontpsm: 'font-p-sm mute-60',
      background: styles.tierLight
    }
  } else {
    classes = {
      fonth2: 'font-h2 light',
      fonth3: 'font-h3 light',
      fontp: 'font-p light mute-85',
      fontp2: 'font-p light mute-85',
      fontpsm: 'font-p-sm light mute-85',
      background: styles.tierDark
    }
  }

  return (
    <div className={cn(classes.background, className && className)}>
      <Container
        flexContainer={featuresContainer}
        justify={'start'}
        alignItems={'stretch'}
      >
        {featuresContainer === 'row' ? (
          <>
            <Grid lg={6} md={6} sm={6} xs={12}>
              <PricingContent
                classes={classes}
                title={title}
                description={description}
                price={price}
                priceDescription={priceDescription}
                button={button}
              />
            </Grid>
            <Grid lg={6} md={6} sm={6} xs={12}>
              <Container justify={'center'} alignItems={'start'}>
                <PricingFeatures classes={classes} features={features} />
              </Container>
            </Grid>
          </>
        ) : (
          <>
            <PricingContent
              classes={classes}
              title={title}
              description={description}
              price={price}
              priceDescription={priceDescription}
              button={button}
            />
            <PricingFeatures classes={classes} features={features} />
          </>
        )}
      </Container>
    </div>
  )
}

export default PricingTier
