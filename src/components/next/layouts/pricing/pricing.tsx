import React from 'react'
import * as styles from './pricing.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import Button from '../../freestanding/button/button'
import {
  pb32,
  pb64,
  pr16,
  pr24,
  pr32,
  pr48,
  pr8,
  pt128,
  pt32,
  pt64
} from '../../freestanding/utils/padding.module.css'
import PricingBlock from './content/pricing-block'
import { CheckCircle } from 'phosphor-react'
import { PriceTier } from './content/pricing-tier'
import Toggle from '../../freestanding/toggle/toggle'
import { useState } from 'react'

const pricingTiers: Array<PriceTier> = [
  {
    theme: 'dark',
    title: 'Early Access',
    description: 'Get early access to the full Ory platform now',
    price: '$99',
    priceDescription: 'per Project/Member',
    button: (
      <Button to={'/'} style={'filled'}>
        Become a member
      </Button>
    ),
    features: [
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'No limits on identities'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: '1 Member & Project'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: '100,000 API Calls / 24 hours'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'UI & Dashboard'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'Ory CLI'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'Unlimited data objects'
      }
    ]
  },
  {
    theme: 'light',
    title: 'Enterprise',
    description: 'Ory with dedicated support & custom hosting options',
    price: 'Individual',
    priceDescription: 'per Project/Member',
    button: (
      <Button to={'/'} style={'outlined'} theme={'grey'}>
        Contact sales
      </Button>
    ),
    features: [
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'No limits on identities'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'Unlimited Members / Projects'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'No limits on API calls'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'UI & Dashboard'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'Ory CLI'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'Unlimited data objects'
      }
    ]
  }
]
const pricingOS: Array<PriceTier> = [
  {
    theme: 'light',
    title: 'Self-hosted',
    description:
      'Try out Ory locally or deploy self-hosted without any limits.',
    price: 'Free',
    priceDescription: '',
    button: (
      <Button to={'/'} style={'filled'}>
        Get Started
      </Button>
    ),
    featuresContainer: 'row',
    features: [
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'No Limits'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'Self-hosted'
      },
      {
        icon: <CheckCircle className={cn(styles.featureEnabled)} size={16} />,
        title: 'Write your own UI'
      },
      {
        icon: <CheckCircle className={cn(styles.featureDisabled)} size={16} />,
        title: 'UI & Dashboard'
      },
      {
        icon: <CheckCircle className={cn(styles.featureDisabled)} size={16} />,
        title: 'Ory CLI'
      },
      {
        icon: <CheckCircle className={cn(styles.featureDisabled)} size={16} />,
        title: 'Data limited by database'
      }
    ]
  }
]

const Pricing = () => {
  const [togglePricing, setTogglePricing] = useState<boolean>(true)

  const handleToggle = () => {
    setTogglePricing(!togglePricing)
  }

  return (
    <div className={cn(styles.pricing)}>
      <Container fluid={true} alignItems={'start'}>
        <Grid lg={3} md={6} sm={12} xs={12}>
          <ContentText className={cn(pt64, pb64)}>
            <Molecule>
              <div className={cn('font-h1', pb32)}>No limits on identity</div>
              <div className={cn('font-p-lg')}>
                Ory is based on mature open source software and open standards.
                And it’s affordable for everyone. We also offer individual plans
                for enterprise customers, please contact us to learn more!
              </div>
            </Molecule>
          </ContentText>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12}>
          <Container justify={'center'}>
            <Toggle
              className={cn(pb32, pr24)}
              onClick={handleToggle}
              enabled={togglePricing}
              text={{ textEnable: 'Self-hosted', textDisable: 'Cloud' }}
            />
          </Container>
          
          
          {togglePricing ? (
            <PricingBlock tiers={pricingTiers} />
          ) : (
            <PricingBlock tiers={pricingOS} />
          )}
          <Container className={cn(pt32)} justify={'center'} alignItems={'end'}>
            <div className={cn('font-p-sm')}>
              Prices in USD, taxes may apply. Billed monthly.
            </div>
          </Container>
        </Grid>
      </Container>
    </div>
  )
}

export default Pricing
