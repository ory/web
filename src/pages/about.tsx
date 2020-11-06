import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import Team from '../components/team'

const AboutPage = () => (
  <Layout>
    <SEO
      description="Implement OAuth 2.0 and OpenID Connect in minutes with open source from ORY. Works in both new and existing systems."
      title="ORY - Open Source OAuth2 and OpenID Connect Access Control & API Security"
    />
    <Team />
  </Layout>
)

export default AboutPage
