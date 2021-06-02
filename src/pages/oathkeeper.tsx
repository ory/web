import {
  ArrowRight,
  BookOpen,
  CirclesThreePlus,
  Code,
  GitMerge,
  LockOpen,
  RocketLaunch,
  Terminal,
  UserPlus,
  Users
} from 'phosphor-react'
import React from 'react'
import Button from '../components/freestanding/button/button'
import ColourWrapper from '../components/freestanding/colour/colour-wrapper'
import Molecule from '../components/freestanding/molecule/molecule'
import Adopters from '../components/layouts/adopters/adopters'
import Coding from '../components/layouts/coding/coding'
import FeatureImage from '../components/layouts/feature-image/feature-image'
import Newsletter from '../components/newsletter'
import Footer from '../components/layouts/footer/footer'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import oathkeeperPolyglot from '../images/oathkeeper/oathkeeper_p.svg'
import oathkeeperProcess from '../images/oathkeeper/oathkeeper.svg'
import CodeBox, { Languages } from '../components/codebox'
import cn from 'classnames'
import SEO from '../components/layouts/seo/seo'

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

const IndexPage = () => (
  <Layout>
    <SEO
      description={
        'Oathkeeper Open Source Identity and Access Proxy (IAP). Authenticate and authorize all traffic, using Zero Trust.'
      }
      title={'Open Source Identity and Access Proxy (IAP)'}
    />

    <Hero
      title={'Global access control'}
      description={
        'Manage user roles, rights, and permissions with ACL based on Google Zanzibar'
      }
      image={<img loading="lazy" alt="" src={oathkeeperProcess} />}
    />

    <Newsletter preselect="oathkeeper" />

    <FeatureImage
      overline={'Start in minutes'}
      title={<>Easy Integration</>}
      description={
        <>
          Ory / Oathkeeper is a cloud native Identity & Access Proxy / API (IAP)
          and Access Control Decision API. It authenticates, authorizes, and
          mutates incoming HTTP(s) requests, is Open Source, and written in Go.
          Ory / Oathkeeper is straightforward on any system. We provide
          pre-built binaries, Docker images, and support a number of package
          managers.
        </>
      }
      buttons={
        <>
          <Button
            to={'/docs/oathkeeper/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
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
          Ory / Oathkeeper is written in Go and we provide SDKs for almost every
          language including Dart, .NET, Go, Java, PHP, Python, Ruby, Rust and
          Typescript. Our documentation makes integrating Ory / Oathkeeper a
          snap.
        </>
      }
      buttons={
        <>
          <Button
            to={'/docs/oathkeeper/next/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
            Install Ory / Oathkeeper
          </Button>
        </>
      }
      image={<img loading="lazy" alt="" src={oathkeeperPolyglot} />}
    />

    <Quickstart
      title={<>Ready to get started?</>}
      description={
        <>
          Explore Ory and the future of identity. Make yourself heard in
          discussions and contribute on GitHub. Your code will be shipped in the
          next version.
        </>
      }
      buttons={
        <>
          <Button
            style={'link'}
            to={'/docs/ecosystem/projects'}
            iconRight={<ArrowRight size={16} />}
          >
            Open Source Documentation
          </Button>
        </>
      }
      content={[
        {
          icon: <BookOpen size={32} />,
          title: (
            <>
              Slack:
              <br />
              Developer Chat
            </>
          ),
          description: (
            <>
              A community to help you succeed. Become a hero for developers, ask
              questions & participate in events.
            </>
          ),
          button: (
            <Button
              to={'https://slack.ory.sh/'}
              style={'link'}
              iconRight={<ArrowRight size={16} />}
            >
              Join the chat
            </Button>
          )
        },
        {
          icon: <Users size={32} />,
          title: (
            <>
              GitHub:
              <br /> Discussions & Code
            </>
          ),
          description: (
            <>
              Make yourself heard on GitHub and contribute code and insights to
              the open source projects at the heart of Ory.
            </>
          ),
          button: (
            <Button
              to={'https://github.com/ory/'}
              style={'link'}
              iconRight={<ArrowRight size={16} />}
            >
              Explore ecosystem
            </Button>
          )
        }
      ]}
    />
  </Layout>
)

export default IndexPage
