import Layout from '../components/layouts/layout/layout'
import React from 'react'
import SEO from '../components/layouts/seo/seo'
import Team from '../components/team'

const AboutPage = () => (
  <Layout>
    <SEO
      description="Implement modern identity infrastructure in minutes with open source from ORY. "
      title="ORY - A modern open source identity solution"
    />
    <Team />
  </Layout>
)

export default AboutPage
