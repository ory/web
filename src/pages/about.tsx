import React from 'react'

import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'
import Team from '../components/team'

const AboutPage = () => (
  <Layout>
    <SEO
      description="Secure open source IAM and access control infrastructure for the cloud."
      title="Ory - A modern open source identity solution"
    />
    <Team />
  </Layout>
)

export default AboutPage
