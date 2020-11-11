import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Newsletter from '../components/newsletter'
import Adopters from '../components/adopters'
import Stats from '../components/stats'
import Team from '../components/team'
import ThinProjectList from '../components/thin-project-list'
import BlogSummarySection from '../components/blog-summary-section'

const IndexPage = () => (
  <Layout>
    <SEO
      description="Implement OAuth 2.0 and OpenID Connect in minutes with open source from ORY. Works in both new and existing systems."
      title="ORY - Open Source OAuth2 and OpenID Connect Access Control & API Security"
    />
    <Hero
      title="Open Source Identity Infrastructure and Services"
      subtitle="Run User Management, Permission and Role Management, and OAuth 2.0 & OpenID Connect anywhere from your cloud to a Raspberry Pi."
      cta={[
        {
          title: 'Demo',
          href:
            'https://docs.google.com/forms/d/e/1FAIpQLSc5sViXt5rR44MLbJM5QjSDoSiZxXaXtmkHvAg22KC-x3z1Dg/viewform',
          style: 'primary',
          openInNewWindow: true,
        },
        {
          title: 'GitHub',
          href: 'https://github.com/ory',
          style: 'secondary',
        },
      ]}
    />
    <BlogSummarySection />
    <Adopters onlyFeatured />
    <ThinProjectList />
    <Stats />
    <Newsletter />
    <Team />
  </Layout>
)

export default IndexPage
