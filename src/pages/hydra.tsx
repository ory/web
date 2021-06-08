import React from 'react'
import Button from '../components/freestanding/button/button'
import FeatureImage from '../components/layouts/feature-image/feature-image'
import Newsletter from '../components/newsletter'
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
  const ArrowRight = <IconWrapper color={'themed-primary'} icon={'ArrowRight'} size={'16'} />

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
        title={'OAuth 2.0 and OpenID Certified® OpenID Connect Server'}
        description={
          'Secure access to your applications and APIs, and authenticate third party users.'
        }
        image={<img loading="lazy" alt="" src={hydraProcess} />}
      />
      <Newsletter preselect="hydra" />

      <FeatureImage
        overline={'Start in minutes'}
        title={<>Easy Integration</>}
        description={
          <>
            Ory / Hydra is Open Source and OpenID Connect Certified® technology
            that integrates with any login system. Get started in minutes, and
            provide secure access to your application and API endpoints. Ory /
            Hydra works with any login system and only a few lines of code are
            required. Head over to our documentation and learn more.
          </>
        }
        buttons={
          <>
            <Button to={'/docs/hydra/'} style={'link'} iconRight={ArrowRight}>
              Check out the docs
            </Button>
          </>
        }
        image={<IntegrationCodeBox />}
      />

      <FeatureImage
        mirror={true}
        overline={'Polyglot'}
        title={<>SDKs for all languages</>}
        description={
          <>
            Ory / Hydra is written in Go and we provide SDKs for almost every
            language including Dart, .NET, Go, Java, PHP, Python, Ruby, Rust and
            Typescript. We work with any login system and it is easy to
            customize the login experience. Our documentation makes integrating
            Ory / Hydra a snap.
          </>
        }
        buttons={
          <>
            <Button
              to={'/docs/keto/install/'}
              style={'link'}
              iconRight={ArrowRight}
            >
              Install Ory / Hydra
            </Button>
          </>
        }
        image={<img loading="lazy" alt="" src={hydraPolyglot} />}
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
