import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/next/freestanding/button/button'
import Molecule from '../../components/next/freestanding/molecule/molecule'
import Adopters from '../../components/next/layouts/adopters/adopters'
import Coding from '../../components/next/layouts/coding/coding'
import FeatureOne from '../../components/next/layouts/feature-one/feature-one'
import FeatureTwo from '../../components/next/layouts/feature-two/feature-two'
import Hero from '../../components/next/layouts/hero/hero'

const IndexPage = () => (
  <Layout>
    <Hero></Hero>
    <Adopters></Adopters>
    <FeatureOne></FeatureOne>
    <Coding></Coding>
    <FeatureTwo></FeatureTwo>
  </Layout>
)

export default IndexPage
