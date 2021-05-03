import React from 'react'
import * as styles from './pricing-block.module.css'
import cn from 'classnames'
import Container from '../../../freestanding/containers/container'
import Molecule from '../../../freestanding/molecule/molecule'
import Grid from '../../../freestanding/containers/grid'
import ContentText from '../../../freestanding/content/content-text'
import { Check, X } from 'phosphor-react'
import MoleculeInteraction from '../../../freestanding/molecule/molecule-interaction'
import MoleculeTextInteraction from '../../../freestanding/molecule/molecule-text-interaction'

export interface Feature {
  id: string
  title: string
  show: boolean
  order: number
}

export interface FeatureMark {
  id: string
  mark: boolean
}

export interface PricingInformation {
  title: React.ReactNode
  price: React.ReactNode
  cycle: React.ReactNode
  order: number
  button?: React.ReactNode
  customClass?: string
  features: Array<FeatureMark>
}

interface PropTypes {
  className?: string
  pricings: Array<PricingInformation>
  features: Array<Feature>
}

const PricingBlock = ({ className, features, pricings }: PropTypes) => {
  const sortedFeatures = features.sort((a, b) => a.order - b.order)
  const sortedPricing = pricings.sort((a, b) => a.order - b.order)

  return (
    <Container flexContainer={'row'} alignItems={'start'} justify={'start'}>
      <Container
        flexContainer={'column'}
        alignItems={'center'}
        className={cn(styles.pricingBlock)}
      >
        <p className={cn('font-h2')}>Pricing</p>
        <Container flexContainer={'column'}>
          {sortedFeatures.map((feature) => {
            return <Molecule key={feature.id}>{feature.title}</Molecule>
          })}
        </Container>
      </Container>
      {sortedPricing.map((pricing, index) => {
        return (
          <Grid
            lg={3}
            md={10}
            sm={10}
            key={index}
            lgOffset={false}
            className={cn(
              styles.pricingBlock,
              pricing.customClass && pricing.customClass
            )}
          >
            <Container flexContainer={'column'}>
              <ContentText>
                <MoleculeTextInteraction>
                  <Molecule>
                    {pricing.title}
                    {pricing.price}
                    {pricing.cycle}
                  </Molecule>
                  {sortedFeatures.map((f) => {
                    return (
                      <>
                        {pricing.features
                          .filter((feature) => feature.id == f.id)
                          .map((x) => {
                            return (
                              <Molecule>
                                {x.mark ? <Check size={16} /> : <X size={16} />}
                              </Molecule>
                            )
                          })}
                      </>
                    )
                  })}
                  <MoleculeInteraction>
                    <Molecule>{pricing.button}</Molecule>
                  </MoleculeInteraction>
                </MoleculeTextInteraction>
              </ContentText>
            </Container>
          </Grid>
        )
      })}
    </Container>
  )
}

export default PricingBlock
