import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Adopters from '../components/adopters'
import Quicklinks from '../components/quicklinks'
import Highlights from '../components/highlights'
import CompressedHero from '../components/compressed-hero'
import Stats from '../components/stats'
import Newsletter from '../components/newsletter'
import heroIllustration from '../images/illustrations/hero.svg'
import ThinProjectList from '../components/thin-project-list'

const HeroIllustration = () => (
  <img
    loading="lazy"
    alt="Open Source Identity Infrastructure and Services"
    className="responsive"
    src={heroIllustration}
  />
)

const ProductsPage = () => (
  <Layout>
    <SEO
      description="Products to implement Ory OAuth 2.0, OpenID Connect and User Management. Use Zero Trust, open standards and open source."
      title="Ory Products - Open Source OAuth 2.0, OpenID Connect, User Management and Zero Trust Networking"
    />

    <CompressedHero
      title="Connect with customers across the internet."
      subtitle="Cloud native authentication, authorization and user management based on open standards and open source."
      cta={[
        {
          title: 'Start now',
          href: '/developer',
          style: 'primary'
        },
        {
          title: 'GitHub →',
          href: 'https://github.com/ory',
          style: 'secondary',
          openInNewWindow: true
        }
      ]}
      visual={<HeroIllustration />}
    />

    <Highlights
      highlight={[
        {
          visual: 'opensource',
          title: 'Powered by Open Source',
          href: 'https://github.com/ory',
          openInNewWindow: true,
          content:
            'You can rely on open source software that is built together in a world-wide community of developers. Peer reviewed, vetted by expert developers - tried and tested.'
        },
        {
          visual: 'integration',
          title: 'Easy integration',
          href: 'https://github.com/ory/sdk',
          openInNewWindow: true,
          content:
            'Work with what you’re doing. Easy ways to make tools, software, platforms and coding languages used by your business already work with Ory.'
        },
        {
          visual: 'openstandards',
          title: 'Rely on open standards',
          href: '/docs/ecosystem/software-architecture-philosophy',
          content:
            'Give your customers secure choices for how they register and sign in with you. Rely on Oauth 2.0 and OpenID Connect and web standard best practices.'
        },
        {
          visual: 'developer',
          title: "You're a developer?",
          href: '/developer',
          content:
            'Be a hero at your company. Ory has everything you need to add authentication, authorization, and user management to your apps.'
        }
      ]}
    />

    <Adopters onlyFeatured />

    <ThinProjectList />

    <Stats />

    <Newsletter />

    <Quicklinks
      title={'Ready to get started?'}
      description={
        'Explore our Products or start building and get authentication, authorization, and user management added to your app. You can also contact us to design a custom package for your business.'
      }
      cta={[
        {
          title: 'Start building',
          href: '/developer',
          style: 'primary',
          openInNewWindow: true
        },
        {
          title: 'Contact Us →',
          href: 'mailto:jared@ory.sh',
          style: 'secondary',
          openInNewWindow: true
        }
      ]}
      quick={[
        {
          description:
            'Start your integration. Our documentation makes integrating Ory a snap.',
          learn: 'Go to our Docs',
          href: '/docs',
          openInNewWindow: true,
          icon: 'docs'
        },
        {
          description:
            'Learn about what’s new at Ory and great stuff being worked on.',
          learn: 'Go to our Blog',
          href: '/blog',
          icon: 'blog'
        },
        {
          description:
            'We’re hiring. Work on the most exciting stuff in software with us!',
          learn: 'Work with us',
          href: 'https://github.com/ory/jobs',
          openInNewWindow: true,
          icon: 'jobs'
        }
      ]}
    />
  </Layout>
)

export default ProductsPage
