import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Adopters from '../../components/adopters'
import LargeFeature from '../../components/large-feature'
import Quicklinks from '../../components/quicklinks'
import CompressedHero from '../../components/compressed-hero'
import Stats from '../../components/stats'
import Newsletter from '../../components/newsletter'
import heroIllustration from '../../images/illustrations/developer.svg'
import BlogSummarySection from '../../components/blog-summary-section'

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
    <SEO description="" title="" />

    <CompressedHero
      title="Be a hero in your company."
      subtitle="Ory has everything you need to solve identity problems and add authentication, authorization, and user management to your apps."
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
      title={'Extensive Documentation'}
      description={
        'Everything you need to know about how to integrate Ory technology is in the documentation. Take a dive in and RTFM ☺️'
      }
      learn={'Go to the Ory Docs'}
      href={'/docs'}
      visual={'docs'}
      openInNewWindow={true}
    />

    <LargeFeature
      title={'Need Support?'}
      description={
        'There is a whole community to help you succeed with an active developer Slack Channel and GitHub Discussions. You can also contact us to create a custom package for your business.'
      }
      learn={'Contact us'}
      href={'mailto:office@ory.sh'}
      visual={'support'}
      openInNewWindow={true}
    />

    <LargeFeature
      alternate
      title={'Use Ory Open Source'}
      description={
        'Ory is an extensive set of open source projects. Together they represent Kratos, Hydra, Oathkeeper, Keto.'
      }
      learn={'Learn about Ory Open Source'}
      href={'https://github.com/ory'}
      visual={'opensource'}
      openInNewWindow={true}
    />

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
          href: '/docs',
          style: 'primary'
        },
        {
          title: 'Contact Us →',
          href:
            'https://github.com/ory/open-source-support/blob/master/README.md',
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

export default DeveloperPage
