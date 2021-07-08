import cn from 'classnames'
import React from 'react'

import Container from '../../../freestanding/containers/container'
import Grid from '../../../freestanding/containers/grid'

import PricingTier, { PriceTier } from './pricing-tier'

import { pb32 } from '../../../freestanding/utils/padding.module.css'

interface PropTypes {
  className?: string
  tiers: Array<PriceTier>
}

const PricingBlock = ({ className, tiers }: PropTypes) => {
  return (
    <div className={cn(className && className)}>
      <Container alignItems={'start'}>
        {tiers.length > 1
          ? tiers.map((tier) => {
              return (
                <Grid
                  className={cn(pb32)}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  key={tier.title}
                >
                  <PricingTier tier={tier} />
                </Grid>
              )
            })
          : tiers.length > 0 && <PricingTier tier={tiers[0]} />}
      </Container>
    </div>
  )
}

export default PricingBlock
