import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Adopters from '../components/adopters'
import LargeFeature from '../components/large-feature'
import Quicklinks from '../components/quicklinks'
import CompressedHero from '../components/compressed-hero'
import Stats from '../components/stats'
import Newsletter from '../components/newsletter'
import heroIllustration from '../images/illustrations/developer.svg'
import BlogSummarySection from '../components/blog-summary-section'
import Link from '../components/link'

const HeroIllustration = () => (
  <img
    loading="lazy"
    alt="Open Source Identity Infrastructure and Services"
    className="responsive"
    src={heroIllustration}
  />
)

const DeveloperPage = () => (
  <Layout>
    <SEO
      description="Add OAuth 2.0, OpenID Connect and User Management to your product with Ory. Use Zero Trust, open standards and open source."
      title="Developers - Add Open Source OAuth 2.0, OpenID Connect, User Management and Zero Trust Networking to your application"
    />
    <CompressedHero
      title="Build with the best."
      subtitle="Ory develops superior authentication, authorization, and user management solutions for other excellent products."
      cta={[
        {
          title: 'Documentation',
          href: '/docs',
          style: 'primary',
          openInNewWindow: true
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

    <BlogSummarySection />

    <Adopters onlyFeatured />

    <LargeFeature
      title={'Easy integrations for your stack'}
      description={
        'Ory already works with what you’re doing. Lots of easy ways to make tools, software, platforms and coding languages your business uses work with Ory.'
      }
      learn={'See what works for you'}
      href={'https://github.com/ory/sdk'}
      visual={'integration'}
      openInNewWindow={true}
    />

    <LargeFeature
      alternate
      title={'Extensive documentation'}
      description={
        'Everything you need to know about Orys technology is in the documentation.'
      }
      learn={'Go to the Ory docs'}
      href={'/docs'}
      visual={'docs'}
      openInNewWindow={true}
    />

    <LargeFeature
      title={'Resources for success'}
      description={
        <>
          There is a whole community to help you succeed with an active
          developer{' '}
          <Link to={'https://www.ory.sh/chat'} openInNewWindow={true}>
            Slack Channel
          </Link>{' '}
          and GitHub Discussions. You can also contact us to create a custom
          package for your business.
        </>
      }
      learn={'Resources'}
      href={'/resources'}
      visual={'support'}
      openInNewWindow={true}
    />

    <LargeFeature
      alternate
      title={'Ory Open Source Software'}
      description={
        'Ory is an extensive set of open source software projects. Together they represent Kratos, Hydra, Oathkeeper, Keto.'
      }
      learn={'Explore Ory Open Source'}
      href={'https://github.com/ory/'}
      visual={'opensource'}
      openInNewWindow={true}
    />

    <Stats />

    <Newsletter />

    <Quicklinks
      cta={[
        {
          title: 'Start building',
          href: '/products',
          style: 'primary',
          openInNewWindow: true
        },
        {
          title: 'Contact Us →',
          href: 'mailto:office@ory.sh',
          style: 'secondary',
          openInNewWindow: true
        }
      ]}
      quick={[
        {
          description:
            'Start your integration. Our documentation explains how to integrate with Ory.',
          learn: 'Go to our Docs',
          href: '/docs',
          openInNewWindow: true,
          icon: 'docs'
        },
        {
          description:
            'Learn about what’s new at Ory.',
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

export default DeveloperPage
