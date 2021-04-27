import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/next/freestanding/button/button'
import Molecule from '../../components/next/freestanding/molecule/molecule'
import Adopters from '../../components/next/layouts/adopters/adopters'
import Hero from '../../components/next/layouts/hero/hero'

const IndexPage = () => (
  <Layout>
    <Hero></Hero>
    <Adopters></Adopters>
  </Layout>
)

export default IndexPage
