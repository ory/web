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
import Grid from '../../../freestanding/containers/grid'
import MoleculeSeparator from '../../../freestanding/molecule/molecule-separator'

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
  <Container justify={'center'}>
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
  </Container>
)

const PricingFeatures = ({ features, classes }: PriceTierFeatures) => (
  <Container
    flexContainer={'column'}
    alignItems={'start'}
    justify={'space-around'}
  >
    {features.map((feature) => {
      return (
        <Container justify={'start'} alignItems={'start'} key={feature.title}>
          <div className={cn(pr8)}>{feature.icon}</div>
          <div className={cn(classes.fontp)}>{feature.title}</div>
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
      <Container flexContainer={featuresContainer} justify={'start'}>
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
                <MoleculeSeparator style={'vertical'} />
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
