import React from 'react'
import Adopters from '../../components/next/layouts/adopters/adopters'
import FeatureList from '../../components/next/layouts/featurelist/feature-list'
import Layout from '../../components/next/layouts/layout/layout'
import Pricing from '../../components/next/layouts/pricing/pricing'

const PricingPage = () => (
  <Layout>
    <Pricing />
    <Adopters />
    <FeatureList />
  </Layout>
)

export default PricingPage
