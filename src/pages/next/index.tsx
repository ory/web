import React from 'react'
import Button from '../../components/next/freestanding/button/button'
import Molecule from '../../components/next/freestanding/molecule/molecule'
import Adopters from '../../components/next/layouts/adopters/adopters'
import Coding from '../../components/next/layouts/coding/coding'
import FeatureFour from '../../components/next/layouts/feature-four/feature-four'
import FeatureOne from '../../components/next/layouts/feature-one/feature-one'
import FeatureThree from '../../components/next/layouts/feature-three/feature-three'
import FeatureTwo from '../../components/next/layouts/feature-two/feature-two'
import Footer from '../../components/next/layouts/footer/footer'
import Hero from '../../components/next/layouts/hero/hero'
import Layout from '../../components/next/layouts/layout/layout'
import Quickstart from '../../components/next/layouts/quickstart/quickstart'
import Quotes from '../../components/next/layouts/quotes/quotes'
import Resource from '../../components/next/layouts/resource/resource'
import Security from '../../components/next/layouts/security/security'
import Stats from '../../components/next/layouts/stats/stats'

const IndexPage = () => (
  <Layout>
    <Hero/>
    <FeatureTwo/>
    <Adopters/>
    <Quotes/>
    <Stats/>
    <Security/>
    <Coding/>
    <Resource/>
    <Quickstart/>
  </Layout>
)

export default IndexPage
