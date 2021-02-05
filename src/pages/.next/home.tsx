import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Hero from '../../components/hero'
import Newsletter from '../../components/newsletter'
import Adopters from '../../components/adopters'
import Stats from '../../components/stats'
import LargeFeature from '../../components/large-feature'
import Features from '../../components/features'
import kratosAnimation from '../../images/kratos/kratos.svg'
import HighlightedSection from '../../components/highlighted-section'

const HomePage = () => (
  <Layout>
    <SEO
      description="Implement OAuth 2.0 and OpenID Connect in minutes with open source from ORY. Works in both new and existing systems."
      title="ORY - Open Source OAuth2 and OpenID Connect Access Control & API Security"
    />
    <Hero
      title="Identity infrastructure for everyone"
      subtitle="Give your customers rich experiences and modern ways to sign up and sign in across your mobile and web apps."
      cta={[
        {
          title: 'Start Now',
          href: '/developer',
          style: 'primary'
        },
        {
          title: 'Learn More',
          href: '/product',
          style: 'secondary'
        }
      ]}
    />
    <HighlightedSection
      highlight={[
        {
          title: 'Let customers in and keep threats out',
          href: '/hydra',
          content:
            'Easily verify who is a customer, and customize sign in flows that fit you and your customers.'
        },
        {
          title: 'Custom permissions',
          href: '/keto',
          content:
            'Use customer specific access rules, define roles, and give customers individual access to your service.'
        },
        {
          title: 'Modern customer registration and sign in.',
          href: '/kratos',
          content:
            'Give customers choice of how they register and sign in with you. Provide social sign in, MFA and more.'
        }
      ]}
    />
    <Adopters onlyFeatured />
    <LargeFeature
      content={[
        {
          title: 'The Power of Open Source',
          href: 'https://github.com/ory',
          description:
            'Ory is an open source company. We build software together with a vibrant and active community of developer from all over the world. Ory software is peer reviewed, vetted',
          visual: kratosAnimation,
          learn: 'Explore Ory Open Source',
          openInNewWindow: true
        }
      ]}
    />
    <LargeFeature
      content={[
        {
          title: 'Rely On Open Standards',
          href: '/product',
          description:
            'Give your customers modern security and choices for how they sign up and sign in with you. Rely on Oauth 2.0 and OpenID to secure you and your customers.',
          visual: kratosAnimation,
          learn: 'Learn more about Ory Products'
        }
      ]}
    />
    <LargeFeature
      content={[
        {
          title: 'Are you a Developer?',
          href: '/developer',
          description:
            'Be a hero at your company. Ory has everything you need to add authentication, authorization, and user management to your apps.',
          visual: kratosAnimation,
          learn: 'Start building with Ory'
        }
      ]}
    />
    <LargeFeature
      content={[
        {
          title: 'Easy Integrations',
          href: 'https://github.com/ory/sdk',
          description:
            'Be a hero at your company. Ory has everything you need to add authentication, authorization, and user management to your apps.',
          visual: kratosAnimation,
          learn: 'Start building with Ory',
          openInNewWindow: true
        }
      ]}
    />
    <Newsletter />
    <Stats />
    <Features
      headline={[
        {
          overline: 'overline',
          title: 'Are You Ready?'
        }
      ]}
      features={[
        {
          icon: 'LinkedIn',
          title: 'feature 1',
          content: 'something big ay'
        },
        {
          icon: 'LinkedIn',
          title: 'feature 1',
          content: 'something big ay'
        },
        {
          icon: 'LinkedIn',
          title: 'feature 1',
          content: 'something big ay'
        },
        {
          icon: 'LinkedIn',
          title: 'feature 1',
          content: 'something big ay'
        }
      ]}
    />
  </Layout>
)

export default HomePage
