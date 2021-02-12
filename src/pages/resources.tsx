import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Quicklinks from '../components/quicklinks'
import CompressedHero from '../components/compressed-hero'
import Newsletter from '../components/newsletter'
import heroIllustration from '../images/illustrations/support.svg'
import Highlights from '../components/highlights'

const HeroIllustration = () => (
  <img
    loading="lazy"
    alt="Open source identity infrastructure and services"
    className="responsive"
    src={heroIllustration}
  />
)

const ResourcePage = () => (
  <Layout>
    <SEO
      description="Resources to implement Ory OAuth 2.0, OpenID Connect and User Management. Use Zero Trust, open standards and open source."
      title="Ory Resources - Open Source OAuth 2.0, OpenID Connect, User Management and Zero Trust Networking"
    />

    <CompressedHero
      title="We want to help you succeed."
      subtitle="Lots of resources to help you get the most out of Ory for you. Everything from getting started guides to interactive developer chat and instructional content."
      cta={[
        {
          title: 'Documentation',
          href: '/docs',
          style: 'primary',
          openInNewWindow: true
        }
      ]}
      visual={<HeroIllustration />}
    />

    <Highlights
      highlight={[
        {
          visual: 'slack',
          title: 'Developer Slack Channel',
          href: 'https://www.ory.sh/chat',
          content:
            'There is a whole community to help you succeed with an active developer Slack Channel. Developers from all over the world exchange ideas and help each other with solutions.',
          openInNewWindow: true
        },
        {
          visual: 'discuss',
          title: 'Github Discussions',
          href: 'https://github.com/ory/kratos/discussions',
          content:
            'Check out our discussions on Github. All of our open source projects and developers exchanging ideas and asking questions on a fully Github integrated forum.',
          openInNewWindow: true
        },
        {
          visual: 'blog',
          title: 'Developer Blog',
          href: '/blog',
          content:
            "Learn about what’s new at Ory, what great stuff we're working on, get the inside scoop and learn about what drives Ory."
        },
        {
          visual: 'support',
          title: 'Support',
          href:
            'https://github.com/ory/open-source-support/blob/master/README.md',
          content:
            'Looking for support above and beyond the community? Need help to review your setup or want help with performance tuning? Contact us for a custom package that suits you.',
          openInNewWindow: true
        }
      ]}
    />

    <Newsletter />

    <Quicklinks
      title={'Ready to get started?'}
      description={
        'Explore our Products or start building and get authentication, authorization, and user management added to your app. You can also contact us to design a custom package for your business.'
      }
      cta={[
        {
          title: 'Start building',
          href: '/products',
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
          learn: 'Go to our Developer Blog',
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

export default ResourcePage
