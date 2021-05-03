import React from 'react'
import * as styles from './pricing.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import PricingBlock, {
  Feature,
  PricingInformation
} from './content/pricing-block'
import Button from '../../freestanding/button/button'

const features: Array<Feature> = [
  {
    id: '1',
    title: 'feature 1',
    order: 1,
    show: true
  },
  {
    id: '2',
    title: 'feature 2',
    order: 2,
    show: true
  },
  {
    id: '3',
    title: 'feature 3',
    order: 3,
    show: true
  }
]

const pricings: Array<PricingInformation> = [
  {
    features: [
      {
        id: '1',
        mark: true
      },
      {
        id: '2',
        mark: false
      },
      {
        id: '3',
        mark: true
      }
    ],
    title: <p className={cn('font-h4')}>Free</p>,
    order: 1,
    price: <p className={cn('font-h1')}>$0</p>,
    cycle: 'No billing',
    button: (
      <Button style={'filled'} disabled={true} href={''}>
        Coming Soon
      </Button>
    )
  },
  {
    features: [
      {
        id: '1',
        mark: true
      },
      {
        id: '2',
        mark: false
      },
      {
        id: '3',
        mark: true
      }
    ],
    title: <p className={cn('font-h4')}>Start Up</p>,
    order: 2,
    price: <p className={cn('font-h1')}>$99</p>,
    cycle: <p className={cn('font-p-lg')}>Billed Monthly</p>,
    button: (
      <Button style={'filled'} href={''}>
        Get started
      </Button>
    )
  },
  {
    features: [
      {
        id: '1',
        mark: true
      },
      {
        id: '2',
        mark: true
      },
      {
        id: '3',
        mark: true
      }
    ],
    title: <p className={cn('font-h4-light')}>Enterprise</p>,
    order: 3,
    price: <p className={cn('font-h1-light')}>Individual</p>,
    cycle: <p className={cn('font-p-lg-light')}>Billed Monthly</p>,
    button: (
      <Button style={'filled'} href={''} theme={'dark'}>
        Contact Sales
      </Button>
    ),
    customClass: cn(styles.pricingImportant)
  }
]

const Pricing = () => (
  <div className={cn(styles.pricing)}>
    <Container fluid={true}>
      <PricingBlock features={features} pricings={pricings} />
    </Container>
  </div>
)

export default Pricing
