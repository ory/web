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
import Button from '../../components/next/freestanding/button/button'
import ColourWrapper from '../../components/next/freestanding/colour/colour-wrapper'
import Molecule from '../../components/next/freestanding/molecule/molecule'
import Adopters from '../../components/next/layouts/adopters/adopters'
import Coding from '../../components/next/layouts/coding/coding'
import FeatureFour from '../../components/next/layouts/feature-four/feature-four'
import FeatureImage from '../../components/next/layouts/feature-image/feature-image'
import FeatureOne from '../../components/next/layouts/feature-one/feature-one'
import FeatureThree from '../../components/next/layouts/feature-three/feature-three'
import FeatureTwo from '../../components/next/layouts/feature-two/feature-two'
import Footer from '../../components/next/layouts/footer/footer'
import Hero from '../../components/next/layouts/hero/hero'
import Layout from '../../components/next/layouts/layout/layout'
import Quickstart from '../../components/next/layouts/quickstart/quickstart'
import Security from '../../components/next/layouts/security/security'
import Stats from '../../components/next/layouts/stats/stats'
import Features from '../../components/next/layouts/features/features'
import Quotes from '../../components/next/layouts/quotes/quotes'
import hydraPolyglot from '../../images/hydra/hydra_p.svg'
import opensource from '../../images/illustrations/opensource.svg'
import hydraProcess from '../../images/hydra/hydra.svg'
import CodeBox, { Languages } from '../../components/codebox'
import cn from 'classnames'

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

const IndexPage = () => (
  <Layout>
    <Hero
      title={'OAuth 2.0 and OpenID Certified® OpenID Connect Server'}
      description={
        ' Secure access to your applications and APIs, and authenticate third party users.'
      }
      image={<img loading="lazy" alt="" src={hydraProcess} />}
    />

    <FeatureImage
      overline={'Start in minutes'}
      title={<>Easy Integration</>}
      description={
        <>
          Ory / Hydra is Open Source and OpenID Connect Certified® technology
          that integrates with any login system. Get started in minutes, and
          provide secure access to your application and API endpoints.
          <br />
          Ory / Hydra works with any login system and only a few lines of code
          are required.
          <br />
          Head over to our documentation and learn more.
        </>
      }
      buttons={
        <>
          <Button
            to={'docs/hydra/'}
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
          Ory / Hydra  is written in Go and we provide SDKs for almost every language including Dart, .NET, Go, Java, PHP, Python, Ruby, Rust and Typescript.
          <br />
          We work with any login system and it is easy to customize the login
          experience.
          <br />
          Our documentation makes integrating Ory / Hydra a snap.
        </>
      }
      buttons={
        <>
          <Button
            to={'docs/hydra/next/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
            Install Ory / Hydra
          </Button>
        </>
      }
      image={<img loading="lazy" alt="" src={hydraPolyglot} />}
    />

    <Quickstart
      title={<>Ready to get started?</>}
      description={
        <>
          Explore Ory and the future of identity.
          <br />
          Make yourself heard in discussions and contribute on GitHub.
          <br />
          Your code will be shipped in the next version.
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
              to={'/chat'}
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
