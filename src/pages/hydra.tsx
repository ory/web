import React from 'react'
import Button from '../components/freestanding/button/button'
import FeatureImage from '../components/layouts/feature-image/feature-image'
import Newsletter from '../components/newsletter'
import FeatureList from '../components/layouts/featurelist/feature-list'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import hydraPolyglot from '../images/hydra/hydra_p.svg'
import hydraProcess from '../images/hydra/hydra.svg'
import CodeBox, { Languages } from '../components/codebox'
import SEO from '../components/layouts/seo/seo'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Adopters from '../components/layouts/adopters/adopters'
import Stats from '../components/layouts/stats/stats'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'
import YoutubeEmbed from '../components/layouts/embed/embed'

const IntegrationCodeBox = () => (
  <CodeBox
    tabs={[
      {
        filename: 'login.js',
        language: Languages.JavaScript,
        code: `fetch('https://hydra-admin-api/oauth2/auth/requests/login/accept?login_challenge=12345', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        subject: 'john.doe@mydomain.com',
        remember: true
    }),
})
    .then((res) => res.json())`
      },
      {
        filename: 'consent.js',
        language: Languages.JavaScript,
        code: `fetch('https://hydra-admin-api/oauth2/auth/requests/consent/accept?consent_challenge=12345', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        grant_scope: ['openid', 'offline', 'photos.read'],
        session: {
            access_token: { subscription_plan: 'small', foo: 'bar' },
            id_token: { phone: '+123 321 123 321', foo: 'bar' }
        }
    }),
})
    .then((res) => res.json())`
      }
    ]}
  />
)

const IndexPage = () => {
  const ArrowRight = (
    <IconWrapper color={'themed-primary'} icon={'ArrowRight'} size={'16'} />
  )
  const CheckCircle = (
    <IconWrapper
      icon={'CheckCircleBold'}
      size={'16'}
      color={'success-primary'}
    />
  )
  const CheckCircleHero = (
    <IconWrapper color={'base-white'} icon={'CheckCircle'} size={'24'} />
  )
  const CircleThreePlus = (
    <IconWrapper color={'base-white'} icon={'CirclesThreePlus'} size={'24'} />
  )

  return (
    <Layout>
      <SEO
        description="Open Source OAuth 2.0 and OpenID Connect Server - gethydra.sh."
        title={
          process.env.GATSBY_DOMAIN === 'gethydra.sh'
            ? 'Open Source OAuth 2.0 and OpenID Connect Server - gethydra.sh'
            : `Ory Hydra - Open Source OAuth 2.0 and OpenID Connect Server`
        }
      />

      <Hero
        title={'OAuth 2.0 and OIDC Certified® Server'}
        description={
          'Authenticate third party users and secure access to your Apps and APIs.'
        }
        buttons={
          <Button
            to={'/hydra/docs/5min-tutorial/'}
            style={'filled'}
            iconRight={CheckCircle}
          >
            Get Started
          </Button>
        }
        image={
          <img
            className="responsive"
            loading="lazy"
            alt="Example OAuth2 flow with headless UI using Hydra"
            src={hydraProcess}
          />
        }
      />

      <Newsletter preselect="hydra" />

      <FeatureImage
        overline={'Proven Scalability'}
        title={<>Scale to millions</>}
        description={
          <>
            Ory Hydra powers Sainsbury's My ID with millions of customers and
            serving hundreds of users per second. Watch the video to learn more!
          </>
        }
        buttons={
          <>
            <Button
              to={'/hydra/docs/5min-tutorial'}
              style={'link'}
              iconRight={ArrowRight}
            >
              Get started
            </Button>
          </>
        }
        image={
          <YoutubeEmbed embedId="xcOjpLjy_rY?modestbranding=1&autohide=1&showinfo=0&controls=0" />
        }
      />

<FeatureList
        features={[
          {
            icon: CircleThreePlus,
            title: 'Ory Hydra Features',
            description:
              'Issue OAuth 2.0 Access, Refresh and ID tokens in a secure and efficient manner. Ory Hydra secures critical environments for billions of users. ',
            button: (
              <Button style={'text'} to={'/docs'} iconRight={ArrowRight}>
                Read the docs
              </Button>
            ),
            features: [
              {
                title: 'Flexible User Management',
                description:
                  'Implement the full Open Authorization 2.0 standard in your technology stack. Ory Hydra integrates with any open source (e.g. Ory Kratos) or proprietary IAM system.',
                icon: CheckCircle
              },
              {
                title: 'OpenID Certified®',
                description:
                  'Rely on an OpenID Certified® OIDC Provider. Ory Hydra implements all flows specified by the IETF and OpenID Foundation.',
                icon: CheckCircle
              },
              {
                title: 'Headless Interface and APIs',
                description:
                  'Use your own branding and user interfaces for all OAuth2.0 and OIDC flows. Ory Hydra lets you use your styles and flows powered by a REST API and intuitive CLI.',
                icon: CheckCircle
              },
              {
                title: 'Compatible with MITreid',
                description:
                  'Migrate from MITREid Connect to Ory Hydra. Migration documentation is provided.',
                icon: CheckCircle
              },
              {
                title: 'Cryptographic Key Storage',
                description:
                  'Store cryptographic keys for e.g. signing JWTs securely and manage OAuth 2.0 clients directly from the CLI.',
                icon: CheckCircle
              },              
              {
                title: 'Security First and High Performance',
                description:
                  'Sleep easy, knowing that Ory Hydra is secured against attack vectors and scales as required. Ory Hydra serves tokens to millions of users weekly and just works.',
                icon: CheckCircle
              }
            ]
          }
        ]}
      />

      <FeatureImage
        mirror={true}
        overline={'Start in minutes'}
        title={<>Easy Integration</>}
        description={
          <>
            Ory Hydra is Open Source and OpenID Connect Certified® technology
            that integrates with any login system. Get started in minutes, only
            a few lines of code are required.
          </>
        }
        buttons={
          <>
            <Button to={'/docs/hydra/'} style={'link'} iconRight={ArrowRight}>
              Check out the documentation
            </Button>
          </>
        }
        image={<IntegrationCodeBox />}
      />

      <FeatureImage
        overline={'Polyglot'}
        title={<>SDKs for all languages</>}
        description={
          <>
            Ory Hydra is written in Go and we provide SDKs for almost every
            language including Dart, .NET, Go, Java, PHP, Python, Ruby, Rust and
            Typescript. We work with any login system and it is easy to
            customize the login experience. Our documentation makes integrating
            Ory Hydra a snap.
          </>
        }
        buttons={
          <>
            <Button
              to={'/hydra/docs/5min-tutorial/'}
              style={'link'}
              iconRight={ArrowRight}
            >
              Run the Quickstart
            </Button>
          </>
        }
        image={
          <img
            className="responsive"
            loading="lazy"
            alt="Hydra SDKs for any programming language"
            src={hydraPolyglot}
          />
        }
      />
      <Adopters {...adoptersDefault} />
      <Stats
        title={<>Billions of Identities</>}
        description={
          <>
            Companies from all over the world rely on Ory for their identity
            needs. Ory technology secures billions of identity requests.
          </>
        }
      />
      <Quickstart {...quickstartOpenSource} />
    </Layout>
  )
}

export default IndexPage
