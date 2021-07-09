import React from 'react'

import CodeBox, { Languages } from '../components/codebox'
import Button from '../components/freestanding/button/button'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'
import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import FeatureImage from '../components/layouts/feature-image/feature-image'
import FeatureList from '../components/layouts/featurelist/feature-list'
import { featureListOathkeeper } from '../components/layouts/featurelist/feature-list-content'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import Newsletter from '../components/newsletter'

import oathkeeperProcess from '../images/oathkeeper/oathkeeper.svg'
import oathkeeperPolyglot from '../images/oathkeeper/oathkeeper_p.svg'

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
    handler: allow
  mutators:
    - handler: headers
      config:
        headers:
          X-User: "{{ print .Subject }}"
# ...`
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
`
      }
    ]}
  />
)

const IndexPage = () => {
  const ArrowRight = <i className={'themed-primary ph-arrow-right size16'} />
  const CheckCircleHero = <i className={'base-white ph-check-circle size24'} />
  return (
    <Layout>
      <SEO
        description={
          'Oathkeeper Open Source Identity and Access Proxy (IAP). Authenticate and authorize traffic using Zero Trust.'
        }
        title={'Ory Oathkeeper - Open Source Identity and Access Proxy (IAP)'}
      />

      <Hero
        title={'Control Incoming Traffic'}
        description={
          'Authenticate and authorize all traffic with a Zero Trust security model.'
        }
        buttons={
          <Button
            to={'/oathkeeper/docs/configure-deploy/'}
            style={'filled'}
            iconRight={CheckCircleHero}
          >
            Get Started
          </Button>
        }
        image={
          <img
            className="responsive"
            loading="lazy"
            alt="Example use of Oathkeeper IAM capabilities inside a UI"
            src={oathkeeperProcess}
          />
        }
      />

      <Newsletter preselect="oathkeeper" />

      <FeatureList {...featureListOathkeeper} />

      <FeatureImage
        overline={'Start in minutes'}
        title={<>Easy Integration</>}
        description={
          <>
            Ory Oathkeeper is an Open Source cloud native Identity & Access
            Proxy / API (IAP) and Access Control Decision API. It authenticates,
            authorizes, and mutates incoming HTTP(s) requests, and is written in
            Go. Implementation is straightforward on any system.
          </>
        }
        buttons={
          <>
            <Button
              to={'/docs/oathkeeper/'}
              style={'link'}
              iconRight={ArrowRight}
            >
              Check out the documentation
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
            Ory Oathkeeper is written in Go and we provide SDKs for almost every
            language including Dart, .NET, Go, Java, PHP, Python, Ruby, Rust and
            Typescript. Our documentation makes integrating Ory Oathkeeper a
            snap.
          </>
        }
        buttons={
          <>
            <Button
              to={'/oathkeeper/docs/configure-deploy/'}
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
            alt="Oathkeeper SDKs for any programming language"
            src={oathkeeperPolyglot}
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
