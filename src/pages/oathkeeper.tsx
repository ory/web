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
import oathkeeperProcess from '../images/oathkeeper/oathkeeper.svg'
import oathkeeperPolyglot from '../images/oathkeeper/oathkeeper_p.svg'
import Adopters from '../components/adopters'

const OathkeeperAnimation = () => (
  <img
    alt="The ORY Oathkeeper identity and access proxy"
    className="responsive"
    src={oathkeeperProcess}
  />
)

const OathkeeperSdk = () => (
  <img
    alt="ORY Oathkeeper SDKs"
    className="responsive"
    src={oathkeeperPolyglot}
  />
)

const IntegrationCodeBox = () => (
  <CodeBox
    tabs={[
      {
        filename: 'access-rules.yml',
        language: Languages.YML,
        code: `---
- upstream:
    url: http://my-backend-service
  match:
    url: http://my-app/some-route/<.*>
    methods:
      - GET
  authenticators:
    - handler: jwt
  authorizer:
    hander: allow
  mutators:
    - handler: headers
      config:
        headers:
          X-User: "{{ print .Subject }}"
# ...`,
      },
      {
        filename: 'config.yml',
        language: Languages.YML,
        code: `---
daemon:
  proxy:
    port: 4455
access_rules:
  repositories:
    - access-rules.yml
authenticators:
  jwt:
    enabled: true
    config:
      jwks_urls:
        - https://my-website.com/.well-known/jwks.json
# ...
`,
      },
    ]}
  />
)

const OathkeeperPage = () => (
  <Layout
    theme="oathkeeper"
    appendix={'Oathkeeper'}
    githubLink="https://github.com/ory/oathkeeper"
  >
    <SEO
      description=""
      title={`${brandPrefix}Oathkeeper Open Source Identity and Access Proxy (IAP).`}
    />

    <CompressedHero
      title="Configure how traffic interacts with your application"
      subtitle="Identity and Access Proxy (IAP). Authenticate and authorize all traffic, using Zero Trust / BeyondCorp as open source."
      cta={[
        {
          title: 'Get started',
          href: 'https://www.ory.sh/docs/oathkeeper',
          style: 'primary',
        },
        {
          title: 'GitHub',
          href: 'https://github.com/ory/oathkeeper',
          style: 'secondary',
        },
      ]}
      visual={<OathkeeperAnimation />}
      mobile={[<OathkeeperAnimation />]}
    />

    <Newsletter preselect={'oathkeeper'} />

    <CompressedSection
      expanded
      left={
        <>
          <h3>Easy integration</h3>
          <p>
            {brandPrefix}Oathkeeper is a cloud native Identity & Access Proxy /
            API (IAP) and Access Control Decision API. It authenticates,
            authorizes, and mutates incoming HTTP(s) requests, is Open Source,
            and written in Go.
          </p>
          <p>
            {brandPrefix}Oathkeeper is straightforward on any system. We provide
            pre-built binaries, Docker images, and support a number of package
            managers. Take a look at our{' '}
            <a href="https://www.ory.sh/docs/oathkeeper">documentation</a> and
            learn more.{' '}
          </p>
        </>
      }
      right={<IntegrationCodeBox />}
      mobile={[
        <h3>Easy integration</h3>,
        <IntegrationCodeBox />,
        <div className={'mobile-offset-32'}>
          <p>
            {brandPrefix}Oathkeeper is a cloud native Identity & Access Proxy /
            API (IAP) and Access Control Decision API. It authenticates,
            authorizes, and mutates incoming HTTP(s) requests, is Open Source,
            and written in Go.
          </p>
          <p>
            {brandPrefix}Oathkeeper is straightforward on any system. We provide
            pre-built binaries, Docker images, and support a number of package
            managers. Take a look at our{' '}
            <a href="https://www.ory.sh/docs/oathkeeper">documentation</a> and
            learn more.{' '}
          </p>
        </div>,
      ]}
    />

    <CompressedSection
      right={<OathkeeperSdk />}
      left={
        <>
          <h3>Polyglot</h3>
          <p>
            {brandPrefix}Oathkeeper is written in Go and we provide SDKs for
            every language. We work with any login system and it is easy to
            customize the login experience. Our{' '}
            <a href="https://www.ory.sh/docs/oathkeeper/sdk/">documentation</a>{' '}
            makes integrating {brandPrefix}Oathkeeper a snap.
          </p>
        </>
      }
      mobile={[
        <h3>Polyglot</h3>,
        <OathkeeperSdk />,
        <p className="mobile-offset-32">
          {brandPrefix}Oathkeeper is written in Go and we provide SDKs for every
          language. We work with any login system and it is easy to customize
          the login experience. Our{' '}
          <a href="https://www.ory.sh/docs/oathkeeper/sdk/">documentation</a>{' '}
          makes integrating {brandPrefix}Oathkeeper a snap.
        </p>,
      ]}
    />

    <Stats />
    <Adopters />
    <Collaborator />
  </Layout>
)

export default OathkeeperPage
