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

const PricingPage = () => (
  <Layout>
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
    <FeatureList />
    <Faq
      title={<>Frequently Asked Questions</>}
      description={
        <>
          If you cant find your question here, reach out to us on{' '}
          <a href={'/'} className={cn('link link-md link-news')}>
            GitHub
          </a>
          , our{' '}
          <a href={'/'} className={cn('link link-md link-news')}>
            Slack Channel
          </a>{' '}
          or{' '}
          <a href={'mailto://'} className={cn('link link-md link-news')}>
            via email.
          </a>{' '}
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
        }
      ]}
    />
    <Stats />
    <Quotes
      title={
        <>
          Read about our
          <br /> customers experience
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
              At Sainsbury’s Tech we use Ory tools to power our identity
              platform. We needed a feature complete OAuth provider which can
              operate securely at scale and Ory Hydra fit the bill perfectly.
            </>
          ),
          person: `Paul Harman`,
          jobTitle: `Engineering Manager, Sainsbury’s Tech`
        },
        {
          logo: <img src={blues} loading="lazy" alt={'Blues Logo'} />,
          description: <>We love it!</>,
          person: `Harman Harman`,
          jobTitle: `Engineering Manager, B’s Tech`
        }
      ]}
    />
  </Layout>
)

export default PricingPage
