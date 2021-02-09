import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Adopters from '../../components/adopters'
import LargeFeature from '../../components/large-feature'
import Quicklinks from '../../components/quicklinks'
import Highlights from '../../components/highlights'
import CompressedHero from '../../components/compressed-hero'
import Stats from '../../components/stats'
import Newsletter from '../../components/newsletter'
import kratosProcess from '../../images/kratos/kratos.svg'

const PlaceHolder = () => (
  <img
    loading="lazy"
    alt="The ORY Kratos user login and registration service"
    className="responsive"
    src={kratosProcess}
  />
)

const HomePage = () => (
  <Layout>
    <SEO description="" title="" />

    <CompressedHero
      title="The New Identity Platform."
      subtitle="Give your customers rich experiences and easy secure ways to register and sign in across your mobile and web apps."
      cta={[
        {
          title: 'Start Now',
          href: '/developer',
          style: 'primary'
        },
        {
          title: 'Learn More',
          href: '/products',
          style: 'secondary'
        }
      ]}
      visual={<PlaceHolder />}
      mobile={[<PlaceHolder />]}
    />

    <Highlights
      highlight={[
        {
          visual: 'hydra',
          title: 'Authentication',
          href: '/hydra',
          content:
            'Keep threats out and easily verify who is a customer, and customize sign in flows that fit you and your customers.'
        },
        {
          visual: 'keto',
          title: 'Authorization',
          href: '/keto',
          content:
            'Personalize experiences using customer specific access rules, define roles, and give customers individual access to your service.'
        },
        {
          visual: 'kratos',
          title: 'User Management',
          href: '/kratos',
          content:
            'Grow your customers, easily register and manage customer identities, using custom flows in your look and feel'
        },
        {
          visual: 'oathkeeper',
          title: 'Zero Trust',
          href: '/oathkeeper',
          content:
            'Grow your customers, easily register and manage customer identities, using custom flows in your look and feel'
        }
      ]}
    />

    <Adopters onlyFeatured />

    <LargeFeature
      title={'Powered by Open Source'}
      description={
        'You can rely on open source software that is built together in a world-wide community of developers. Ory software is peer reviewed, vetted by expert developers, and tried, tested and used in companies of all sizes all over the world.'
      }
      learn={'Explore Ory Open Source'}
      href={'/index'}
      visual={'Placeholder1'}
    />

    <LargeFeature
      alternate
      title={'Rely on Open Standards'}
      description={
        'Give your customers secure choices for how they register and sign in with you. Rely on Oauth 2.0 and OpenID Connect and web standard best practices to secure you and your customers.'
      }
      learn={'Explore Ory Products'}
      href={'/products'}
      visual={'Placeholder2'}
    />

    <LargeFeature
      title={'Are You A Developer?'}
      description={
        'Be a hero at your company. Ory has everything you need to add authentication, authorization, and user management to your apps. Create your own identity provider or run your own Oauth server.'
      }
      learn={'Start building with Ory'}
      href={'/developer'}
      visual={'Placeholder3'}
    />

    <LargeFeature
      alternate
      title={'Easy Integrations'}
      description={
        'Ory already works with what you’re doing. Lots of easy ways to make tools, software, platforms and coding languages your business uses work with Ory.'
      }
      learn={'Discover Ory integrations'}
      href={'https://github.com/ory/sdk'}
      visual={'integration'}
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
          title: 'Start building for free',
          href: '/products',
          style: 'primary'
        },
        {
          title: 'Contact',
          href: '/support',
          style: 'secondary'
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

export default HomePage
