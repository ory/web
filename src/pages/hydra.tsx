import Layout from '../components/layout'
import React from 'react'
import CompressedHero from '../components/compressed-hero'
import Newsletter from '../components/newsletter'
import CompressedSection from '../components/compressed-section'
import SEO from '../components/seo'
import Stats from '../components/stats'
import CodeBox, { Languages } from '../components/codebox'
import { brandPrefix } from '../config'
import Collaborator from '../components/collaborator'
import hydraProcess from '../images/hydra/hydra.svg'
import hydraPolyglot from '../images/hydra/hydra_p.svg'
import Adopters from '../components/adopters'

const HydraAnimation = () => (
  <img
    loading="lazy"
    alt="The ORY Hydra login and consent flow"
    className="responsive"
    src={hydraProcess}
  />
)

const HydraSdk = () => (
  <img
    loading="lazy"
    alt="ORY Hydra SDKs"
    className="responsive"
    src={hydraPolyglot}
  />
)

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

const HydraPage = () => (
  <Layout
    theme="hydra"
    appendix={'Hydra'}
    githubLink="https://github.com/ory/hydra"
    discussionsLink="https://github.com/ory/hydra/discussions"
  >
    <SEO
      description=""
      title={
        process.env.GATSBY_DOMAIN === 'gethydra.sh'
          ? 'Open Source OAuth 2.0 and OpenID Connect Server - gethydra.sh'
          : `${brandPrefix}Hydra Open Source OAuth 2.0 and OpenID Connect Server - ory.sh`
      }
    />

    <CompressedHero
      title="OAuth 2.0 and OpenID Certified® OpenID Connect Server"
      subtitle="Secure access to your applications and APIs, and authenticate third party users."
      cta={[
        {
          title: 'Get started',
          href: 'https://www.ory.sh/docs/hydra/5min-tutorial',
          style: 'primary'
        },
        {
          title: 'GitHub',
          href: 'https://github.com/ory/hydra',
          style: 'secondary'
        }
      ]}
      visual={<HydraAnimation />}
      mobile={[<HydraAnimation />]}
    />

    <Newsletter preselect="hydra" />
    <CompressedSection
      expanded
      left={
        <>
          <h3>Easy integration</h3>
          <p>
            {brandPrefix}Hydra is Open Source and OpenID Connect Certified&reg;
            technology that integrates with any login system. Get started in
            minutes, and provide secure access to your application and API
            endpoints.
          </p>
          <p>
            {brandPrefix}Hydra works with any login system and only a few lines
            of code are required. Head over to our{' '}
            <a href="https://www.ory.sh/docs/hydra">documentation</a> and learn
            more.{' '}
          </p>
        </>
      }
      right={<IntegrationCodeBox />}
      mobile={[
        <h3>Easy integration</h3>,
        <IntegrationCodeBox />,
        <div className={'mobile-offset-32'}>
          <p>
            {brandPrefix}Hydra is Open Source and OpenID Connect Certified&reg;
            technology that integrates with any login system. Get started in
            minutes, and provide secure access to your application and API
            endpoints.
          </p>
          <p>
            {brandPrefix}Hydra works with any login system and only a few lines
            of code are required. Head over to our{' '}
            <a href="https://www.ory.sh/docs/hydra">documentation</a> and learn
            more.{' '}
          </p>
        </div>
      ]}
    />

    <CompressedSection
      right={<HydraSdk />}
      left={
        <>
          <h3>Polyglot</h3>
          <p>
            {brandPrefix}Hydra is written in Go and we provide SDKs for every
            language. We work with any login system and it is easy to customize
            the login experience. Our{' '}
            <a href="https://www.ory.sh/docs/hydra/sdk/">documentation</a> makes
            integrating {brandPrefix}Hydra a snap.
          </p>
        </>
      }
      mobile={[
        <h3>Polyglot</h3>,
        <HydraSdk />,
        <p className="mobile-offset-32">
          {brandPrefix}Hydra is written in Go and we provide SDKs for every
          language. We work with any login system and it is easy to customize
          the login experience. Our{' '}
          <a href="https://www.ory.sh/docs/hydra/sdk/">documentation</a> makes
          integrating {brandPrefix}Hydra a snap.
        </p>
      ]}
    />

    <Stats />
    <Adopters />
    <Collaborator />
  </Layout>
)

export default HydraPage
