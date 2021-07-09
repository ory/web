import cn from 'classnames'
import React from 'react'

import Button from '../components/freestanding/button/button'
import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Faq from '../components/layouts/faq/faq'
import FeatureList from '../components/layouts/featurelist/feature-list'
import { featureListPricing } from '../components/layouts/featurelist/feature-list-content'
import Layout from '../components/layouts/layout/layout'
import Pricing from '../components/layouts/pricing/pricing'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'

const PricingPage = () => {
  const CheckCircle = (
    <i className="success-primary size16 ph-check-circle-bold" />
  )

  return (
    <Layout>
      <SEO
        description={
          "Open source IAM and access control for the cloud. Ory's pricing is not based on monthly active users but on data consumption."
        }
        title={'Ory Pricing - Identity infrastructure for the cloud'}
        keywords={
          'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
        }
      />

      <Pricing
        title={<>No limits on identity</>}
        description={
          <>
            Ory is based on mature open source software and open standards. And
            it’s affordable for everyone. We also offer individual plans for
            enterprise customers, please contact us to learn more!
          </>
        }
        saas={[
          {
            theme: 'dark',
            title: 'Early Access',
            description: 'Get early access to the full Ory platform now',
            price: '$99',
            priceDescription: 'per Project/Member',
            button: (
              <Button
                to={'https://console.ory.sh/registration'}
                style={'filled'}
              >
                Request Access
              </Button>
            ),
            features: [
              {
                icon: CheckCircle,
                title: 'Flexible identity model *'
              },
              {
                icon: CheckCircle,
                title: '1 Member & Project'
              },
              {
                icon: CheckCircle,
                title: '100k API Calls / 24 hours'
              },
              {
                icon: CheckCircle,
                title: 'UI & Dashboard'
              },
              {
                icon: CheckCircle,
                title: 'Ory CLI'
              },
              {
                icon: CheckCircle,
                title: 'Community Support'
              }
            ]
          },
          {
            theme: 'light',
            title: 'Enterprise',
            description: 'Ory with dedicated support & custom hosting options',
            price: 'Individual',
            priceDescription: 'per Project/Member',
            button: (
              <Button
                to={'mailto:sales@ory.sh'}
                style={'outlined'}
                theme={'grey'}
              >
                Contact sales
              </Button>
            ),
            features: [
              {
                icon: CheckCircle,
                title: 'Flexible identity model *'
              },
              {
                icon: CheckCircle,
                title: '>1 Member & Project'
              },
              {
                icon: CheckCircle,
                title: 'No limits on API calls'
              },
              {
                icon: CheckCircle,
                title: 'UI & Dashboard'
              },
              {
                icon: CheckCircle,
                title: 'Ory CLI'
              },
              {
                icon: CheckCircle,
                title: 'HyperCare Support'
              }
            ]
          }
        ]}
        opensource={[
          {
            theme: 'light',
            title: 'Self-hosted',
            description:
              'Try out Ory locally or deploy self-hosted without any limits.',
            price: 'Free',
            priceDescription: '',
            button: (
              <Button to={'/docs'} style={'filled'}>
                Get Started
              </Button>
            ),
            featuresContainer: 'row',
            features: [
              {
                icon: CheckCircle,
                title: 'No Limits'
              },
              {
                icon: CheckCircle,
                title: 'Self-hosted'
              },
              {
                icon: CheckCircle,
                title: 'Write your own UI'
              },
              {
                icon: CheckCircle,
                title: 'Community Support'
              }
            ]
          }
        ]}
      />

      <Adopters {...adoptersDefault} />

      <FeatureList {...featureListPricing} />

      <Faq
        title={<>Frequently Asked Questions</>}
        description={
          <>
            If you cant find your question here, reach out to us on&nbsp;
            <Button style={'link-inline'} to={'https://github.com/ory'}>
              GitHub
            </Button>
            , our&nbsp;
            <Button style={'link-inline'} to={'https://slack.ory.sh/'}>
              Slack Channel
            </Button>
            &nbsp;or&nbsp;
            <Button
              style={'link-inline'}
              to={'mailto:office@ory.sh'}
              className={cn('link link-md link-news')}
            >
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
                and reliable software. Our software is open source and vetted by
                a large international community. Our unique pricing model does
                not charge you for identities.
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
                status updates can be found on our {''}
                <Button style={'link-inline'} to={'https://status.ory.sh/'}>
                  status page
                </Button>
                .
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
                Visa, MasterCard, and American Express credit cards are
                accepted. All payments are processed and secured by Stripe.
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
                Ory does not charge you for individual identities. We do have
                limits on database storage space. You can create as many
                identities as you require, but to prevent abuse of the system we
                limit the database storage.
              </>
            )
          }
        ]}
      />

      <Stats
        title={<>Billions of Identities</>}
        description={
          <>
            Companies from all over the world rely on Ory for their identity
            needs. Ory technology secures billions of identity requests.
          </>
        }
      />

      <Quotes {...quotesDefault} />
    </Layout>
  )
}

export default PricingPage
