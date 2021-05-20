import React from 'react'
import Adopters from '../../components/next/layouts/adopters/adopters'
import FeatureList from '../../components/next/layouts/featurelist/feature-list'
import Layout from '../../components/next/layouts/layout/layout'
import Pricing from '../../components/next/layouts/pricing/pricing'
import Stats from '../../components/next/layouts/stats/stats'
import blues from '../../images/adopters/blues.svg'
import thoughtworks from '../../images/adopters/thoughtworks.svg'
import kyma from '../../images/adopters/kyma.svg'
import raspberrypi from '../../images/adopters/raspberrypi.svg'
import segment from '../../images/adopters/segment.svg'
import sainsburys from '../../images/adopters/sainsburys.svg'
import hootsuite from '../../images/adopters/hootsuite.svg'
import threerein from '../../images/adopters/threerein.svg'
import Quotes from '../../components/next/layouts/quotes/quotes'
import ColourWrapper from '../../components/next/freestanding/colour/colour-wrapper'
import Faq from '../../components/next/layouts/faq/faq'
import Button from '../../components/next/freestanding/button/button'
import cn from 'classnames'
import SEO from '../../components/next/layouts/seo/seo'
import {ArrowRight, CheckCircle, Circle, Flag, Triangle } from 'phosphor-react'

const PricingPage = () => (
  <Layout>
    <SEO
      description={
        'Implement OAuth 2.0 and OpenID Connect in minutes with open source from Ory. Works in both new and existing systems.'
      }
      title={'Ory as a Service - Secure and performant Auth solutions'}
      keywords={
        'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
      }
    />

    <Pricing />
    
    <Adopters
      adopters={[
        {
          title: 'BluesWireless',
          image: blues,
          url: 'https://blues.io/',
          pos: 1
        },
        {
          title: 'ThoughtWorks',
          image: thoughtworks,
          url: 'https://www.thoughtworks.com',
          pos: 8
        },
        {
          title: 'Segment',
          image: segment,
          url: 'https://segment.com/',
          pos: 5
        },
        {
          title: 'Raspberry Pi',
          image: raspberrypi,
          url: 'https://www.raspberrypi.org/',
          pos: 3
        },
        {
          title: `Sainsbury's`,
          image: sainsburys,
          url: 'https://www.sainsburys.co.uk/',
          pos: 2
        },
        {
          title: 'Hootsuite',
          image: hootsuite,
          url: 'https://hootsuite.com',
          pos: 7
        },
        {
          title: 'Kyma Project',
          image: kyma,
          url: 'https://kyma-project.io/',
          pos: 4
        },
        {
          title: '3REIN',
          image: threerein,
          url: 'https://3rein.com/',
          pos: 6
        }
      ]}
    />
    
    <FeatureList features={[
      {
        icon: <Triangle color={'white'} size={24} />,
        title: 'Features',
        description:
          'Sign up now and instantly access these features. All features except the Ory CLI and interfaces are included when self hosting.',
        button: (
          <Button style={'text'} to={'/docs'} iconRight={<ArrowRight size={16} />}>
            Read more
          </Button>
        ),
        features: [
          {
            title: 'Ory Cli',
            description:
              'Control the Ory platform from the command line with an intuitive and accessible syntax. ',
            icon: (
              <ColourWrapper text={'success-primary'}>
                <CheckCircle size={16} />
              </ColourWrapper>)
              
          },
          {
            title: 'Log in & Sign up',
            description:
              'The basics of IAM: Login & register users fast and without complicated flows and store credentials securely.',
            icon: (
              <ColourWrapper text={'success-primary'}>
                <CheckCircle size={16} />
              </ColourWrapper>
            )
          },
          {
            title: 'Account Management',
            description:
              'Manage your users, enable email verification, let users pick new passwords and change their profile data.',
            icon: (
              <ColourWrapper text={'success-primary'}>
                <CheckCircle size={16} />
              </ColourWrapper>
            )
          },
          {
            title: 'User Interface & Dashboards',
            description:
              'Display stats in a smooth and responsive dashboard. We also offer presets for all common user interfaces.',
            icon: (
              <ColourWrapper text={'success-primary'}>
                <CheckCircle size={16} />
              </ColourWrapper>
            )
          },
          {
            title: 'Identity Model',
            description:
              'A flexible identity model adapts to your business needs. You can use one of our provided presets or cook up your own identity model.',
            icon: (
              <ColourWrapper text={'success-primary'}>
                <CheckCircle size={16} />
              </ColourWrapper>
            )
          },
          {
            title: 'Social Logins',
            description:
              'Simplify your users experience and let them use their existing accounts at Google, GitHub, Apple etc. to sign up and log in. All OIDC providers are supported.',
            icon:
              (
                <ColourWrapper text={'success-primary'}>
                  <CheckCircle size={16} />
                </ColourWrapper>
              )
          }
        ]
      },
      {
        icon: (
          <ColourWrapper text={'base-white'}>
            <Circle size={24} />
          </ColourWrapper>
        ),
        title: 'Features landing in 2021',
        description:
          'We are currently working on implementing these features. Sign up for the newsletter to stay up to date!',
        button: (
          <Button style={'text'} to={'/docs/ecosystem/roadmap'} iconRight={<ArrowRight size={16} />}>
            Visit the Ory roadmap
          </Button>
        ),
        features: [
          {
            icon: (
              <ColourWrapper text={'themed-primary'}>
                <Flag size={16} />
              </ColourWrapper>
            ),
            title: 'Multifactor Authentication',
            description:
              'Securely authenticate your users with a variety of factors, including passwordless, WebAuthn, TOTP.'
          },
          {
            icon: (
              <ColourWrapper text={'themed-primary'}>
                <Flag size={16} />
              </ColourWrapper>
            ),
            title: 'Permissions & Roles',
            description:
              'From a member of the marketing team, to an admin in your support staff— give everyone the right level of access to sensitive data.'
          },
          {
            icon: (
              <ColourWrapper text={'themed-primary'}>
                <Flag size={16} />
              </ColourWrapper>
            ),
            title: 'Use your UI',
            description:
              'Bring your own UI and Branding. Easily add your own personal look, feel and brand to any user or internal interface.'
          },
          {
            icon: (
              <ColourWrapper text={'themed-primary'}>
                <Flag size={16} />
              </ColourWrapper>
            ),
            title: 'Webhooks & Triggers',
            description:
              'Use webhooks to define and trigger certain actions when users e.g. register, log in, verify their email... you name it!'
          },
          {
            icon: (
              <ColourWrapper text={'themed-primary'}>
                <Flag size={16} />
              </ColourWrapper>
            ),
            title: 'Payments',
            description:
              'Payments integration powered by Stripe. Secure, fast and reliable payments.'
          },
          {
            icon: (
              <ColourWrapper text={'themed-primary'}>
                <Flag size={16} />
              </ColourWrapper>
            ),
            title: 'Email',
            description:
              'Send out emails in bulk or individually reliably and without hassle. Send updates to all users connected to your platform.'
          },
          {
            icon: (
              <ColourWrapper text={'themed-primary'}>
                <Flag size={16} />
              </ColourWrapper>
            ),
            title: 'OAuth2.0',
            description:
              'Become an OAuth2.0 provider, enable complex use cases, standardize and interface your business with other systems.'
          },
          {
            icon: (
              <ColourWrapper text={'themed-primary'}>
                <Flag size={16} />
              </ColourWrapper>
            ),
            title: 'Machine 2 Machine',
            description:
              'Enables machine interactions powered by Ory. If you use automated agents, this is for you!'
          }
        ]
      }
    ]} />
    
    <Faq
      title={<>Frequently Asked Questions</>}
      description={
        <>
          If you cant find your question here, reach out to us on{' '}
          <Button style={'none'} to={'https://github.com/ory'} className={cn('link link-md link-news')}>
            GitHub
          </Button>
          , our
          <Button style={'none'} to={'/chat'} className={cn('link link-md link-news')}>
            Slack Channel
          </Button>
          or
          <Button style={'none'} to={'mailto:office@ory.sh'} className={cn('link link-md link-news')}>
            via email.
          </Button>
        </>
      }
      content={[
        {
          question: `Why should I choose Ory as identity solution?`,
          answer: (
            <>
              Fortune500 companies and financial institutions use our hardened
              and reliable software. Our software is open source and vetted by a
              large international community. Our unique pricing model does not
              charge you for identities.
            </>
          )
        },
        {
          question: `What happens if I stop using Ory?`,
          answer: (
            <>
              As long as your data is on our platform, it will be safe. If you
              decide to switch away from Ory, you can choose to use the open
              source and host it yourself. Or export your user data to any
              format.
            </>
          )
        },
        {
          question: `What is Ory’s security policy & uptime?`,
          answer: (
            <>
              Ory builds things to last. The platform is always up to date and
              backwards compatible. Security patches are merged and released
              within 48 hours after disclosure, see details in our security
              policy. Live details on the Ory Network, including uptime and
              status updates can be found on our status page.
            </>
          )
        },
        {
          question: `Who is using Ory?`,
          answer: (
            <>
              Thousands of companies are trusting Ory to provide consistent,
              reliable infrastructure for identity and access management. We
              count among our users: Sainsbury’s, Giesecke+Devrient, SAP,
              Discogs, imgur and many more...
            </>
          )
        },
        {
          question: `What payment methods are accepted?`,
          answer: (
            <>
              Visa, MasterCard, and American Express credit cards are accepted.
              All payments are processed and secured by Stripe.
            </>
          )
        },
        {
          question: `What is a project and member at Ory?`,
          answer: (
            <>
              A project is one instance of Ory, e.g. to host sign up for a web
              application you need one project. A member is one admin or
              superuser to control that project.
            </>
          )
        },
        {
          question: `What does Flexible identity model mean?`,
          answer: (
            <>
              Ory does not charge you for individual identities. We do have limits on database storage space.
              You can create as many identities as you require, but to prevent abuse of the system we limit the database storage.
            </>
          )
        }
      ]}
    />
  
    <Stats
      title={(
        <>Billions of Identities.</>
      )}
      description={(
        <>
          Companies
          from all over the world rely on Ory for their identity needs.
          Ory technology secures billions of identity requests.
        </>)
      }/>

    <Quotes
      title={
        <>
          What our customers say:
        </>
      }
      quotes={[
        {
          logo: (
            <ColourWrapper text={'kratos-primary'}>
              <img src={sainsburys} loading="lazy" alt={"Sainsbury's Logo"} />
            </ColourWrapper>
          ),
          description: (
            <>
              We like using Ory because it’s API first design made it super easy
              to integrate with the rest our stack.
            </>
          ),
          person: `Paul Harman`,
          jobTitle: `Engineering Manager, Sainsbury’s Tech`
        },
        {
          logo: (
            <img src={thoughtworks} loading="lazy" alt={'Thoughtworks Logo'} />
          ),
          description: (
            <>
              With Ory, I can build custom and secure ID
              infrastructure and APIs that fit perfectly into my client's
              ever-evolving cloud environments.
            </>
          ),
          person: `Ken Adler`,
          jobTitle: `Identity & Infosec, Thoughtworks`
        },
        {
          logo: <img src={blues} loading="lazy" alt={'Blues Logo'} />,
          description: (
            <>
              I needed an Auth System that would work with modern setups. Ory fit the bill perfectly and
              just works.
            </>
          ),
          person: `Steff Kelsey`,
          jobTitle: `VP of Engineering. Blues Inc.`
        }
      ]}
    />
  </Layout>
)

export default PricingPage
