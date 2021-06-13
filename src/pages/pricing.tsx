import React from 'react'
import Adopters from '../components/layouts/adopters/adopters'
import Stats from '../components/layouts/stats/stats'
import FeatureList from '../components/layouts/featurelist/feature-list'
import Layout from '../components/layouts/layout/layout'
import Pricing from '../components/layouts/pricing/pricing'
import Quotes from '../components/layouts/quotes/quotes'
import Faq from '../components/layouts/faq/faq'
import Button from '../components/freestanding/button/button'
import cn from 'classnames'
import SEO from '../components/layouts/seo/seo'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'

const PricingPage = () => {
  const CheckCircle = (
    <IconWrapper icon={'CheckCircleBold'} size={'16'} color={'success-primary'} />
  )
  const CircleThreePlus = (
    <IconWrapper color={'base-white'} icon={'CirclesThreePlus'} size={'24'} />
  )
  const MapTriFold = (
    <IconWrapper color={'base-white'} icon={'MapTrifold'} size={'24'} />
  )
  const ArrowRight = <IconWrapper icon={'ArrowRight'} size={'16'} />
  const Flag = (
    <IconWrapper icon={'FlagBold'} size={'16'} color={'themed-primary'} />
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
                Get started
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

      <FeatureList
        features={[
          {
            icon: CircleThreePlus,
            title: 'Features',
            description:
              'Sign up now and instantly access these features. All features except the Ory CLI and user interfaces are included when self hosting.',
            button: (
              <Button style={'text'} to={'/docs'} iconRight={ArrowRight}>
                Read the docs
              </Button>
            ),
            features: [
              {
                title: 'Ory CLI',
                description:
                  'Control the Ory platform from the command line with an intuitive and accessible syntax. ',
                icon: CheckCircle
              },
              {
                title: 'Log in & Sign up',
                description:
                  'The basics of IAM: Login & register users fast and without complicated flows and store credentials securely.',
                icon: CheckCircle
              },
              {
                title: 'Account Management',
                description:
                  'Manage your users, enable email verification, let users pick new passwords and change their profile data.',
                icon: CheckCircle
              },
              {
                title: 'User Interface & Dashboards',
                description:
                  'Display stats in a smooth and responsive dashboard. We also offer presets for all common user interfaces.',
                icon: CheckCircle
              },
              {
                title: 'Identity Model',
                description:
                  'A flexible identity model adapts to your business needs. You can use one of our provided presets or cook up your own identity model.',
                icon: CheckCircle
              },
              {
                title: 'Social Logins',
                description:
                  'Simplify your users experience and let them use their existing accounts at Google, GitHub, Apple etc. to sign up and log in. All OIDC providers are supported.',
                icon: CheckCircle
              }
            ]
          },
          {
            icon: MapTriFold,
            title: 'Features landing in 2021',
            description:
              'We are currently working on bringing these features into the Ory Cloud.',
            button: (
              <Button
                style={'text'}
                to={'/docs/ecosystem/roadmap'}
                iconRight={ArrowRight}
              >
                Visit the Ory roadmap
              </Button>
            ),
            features: [
              {
                icon: Flag,
                title: 'Advanced Identity and Access Management',
                description:
                  'Multifactor authentication, including passwordless, WebAuthn, TOTP; Ability to use your own UI and Branding as well as webhooks to define and trigger actions.'
              },
              {
                icon: Flag,
                title: 'Permissions & Roles',
                description:
                  'From a member of the marketing team, to an admin in your support staff— give everyone the right level of access to sensitive data.'
              },
              {
                icon: Flag,
                title: 'Oauth2 & OpenID Connect',
                description:
                  'Become an OAuth2.0 provider, enable complex use cases and machine2machine interactions, interface your business with third party systems.'
              },
              {
                icon: Flag,
                title: 'Integrations',
                description:
                  'Payments integration powered by Stripe as well as Email integration to send out emails in bulk or individually.'
              }
            ]
          }
        ]}
      />

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
