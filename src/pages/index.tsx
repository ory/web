import {
  ArrowRight,
  BookOpen,
  CirclesThreePlus,
  Code,
  GitMerge,
  LockOpen,
  RocketLaunch,
  Terminal,
  UserPlus
} from 'phosphor-react'
import React from 'react'
import Button from '../components/freestanding/button/button'
import Adopters from '../components/layouts/adopters/adopters'
import Coding from '../components/layouts/coding/coding'
import FeatureImage from '../components/layouts/feature-image/feature-image'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartDefault } from '../components/layouts/quickstart/quickstart-content'
import Security from '../components/layouts/security/security'
import Stats from '../components/layouts/stats/stats'
import Features from '../components/layouts/features/features'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import heroIllustration from '../images/illustrations/hero.svg'
import headlessIllustration from '../images/illustrations/examplelogin.svg'
import dashboardIllustration from '../images/illustrations/dashboard.svg'
import codeboxIllustration from '../images/illustrations/codebox.svg'

import SEO from '../components/layouts/seo/seo'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'

const IndexPage = () => (
  <Layout>
    <SEO
      description={
        'Ory is a certified and battle-tested identity solution backed by a large Open Source community and trusted by Fortune500 orgs.'
      }
      title={
        'Ory - Open Source Identity Solutions For Everyone'
      }
      keywords={
        'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
      }
    />

    <Hero
      title={'Never Build Auth Again'}
      description={
        'Login, register and manage your users with a reliable and certified solution trusted by Fortune 500 companies.'
      }
      buttons={
        <Button
          to={'https://console.ory.sh/registration'}
          style={'filled'}
          iconLeft={<RocketLaunch size={24} />}
        >
          Get Started
        </Button>
      }
      image={
        <img
          width={'100%'}
          height={'100%'}
          loading="lazy"
          alt=""
          src={heroIllustration}
        />
      }
    />

    <Adopters {...adoptersDefault} />

    <FeatureImage
      mirror={true}
      overline={'Security'}
      title={<>Ory as a service</>}
      description={
        <>
          Authenticate and manage users, set and check permissions, protect
          APIs, applications and data. Ory as a Service comes with a dashboard
          for metrics and insights and can be managed from the user interface or
          CLI.
        </>
      }
      buttons={
        <Button to={'https://console.ory.sh'} style={'filled'}>
          Get Started
        </Button>
      }
      image={
        <img
          width={'100%'}
          height={'100%'}
          loading="lazy"
          alt=""
          src={dashboardIllustration}
        />
      }
    />

    <FeatureImage
      overline={'Flexibility'}
      title={<>Bring your own UX</>}
      description={
        <>
          You want to brand user facing UIs and use your styles and design? No
          problem with headless integration. You want custom auth flows? Done.
          This feature is included without extra charges.
        </>
      }
      buttons={
        <Button to={'https://console.ory.sh'} style={'filled'}>
          Get Started
        </Button>
      }
      image={
        <img
          width={'100%'}
          height={'100%'}
          loading="lazy"
          alt=""
          src={headlessIllustration}
        />
      }
    />

    <Coding
      overline={'Made for developers'}
      title={<>Improve your developer experience</>}
      description={
        <>
          At Ory, our mission is to improve the overall developer experience. We
          provide SDKs, documentation, tutorials, CLIs and community support.
          Our open source approach lets you to participate in API and
          architecture discussions - your next PR will be shipped in Ory.
        </>
      }
      buttons={
        <>
          <Button
            to={'/docs/get-started'}
            style={'filled'}
            iconLeft={<BookOpen size={24} weight={'duotone'} />}
          >
            Get started
          </Button>
        </>
      }
      visual={
        <img
          width={'100%'}
          height={'100%'}
          loading="lazy"
          alt=""
          src={codeboxIllustration}
        />
      }
      content={[
        {
          icon: <Terminal size={32} weight={'duotone'} />,
          title: <>Powerful tools</>,
          description: (
            <>
              Ory ships REST APIs, gRPC APIs, SDKs, and CLIs for all operating
              systems and CPUs.
            </>
          ),
          button: (
            <Button
              to={'/docs/guides/ory-cli-install-use'}
              style={'link'}
              theme={'dark'}
              iconRight={<ArrowRight size={16} weight={'bold'} />}
            >
              Install the CLI
            </Button>
          )
        },
        {
          icon: <GitMerge size={32} weight={'duotone'} />,
          title: <>Based on Open Source</>,
          description: (
            <>
              Participate in discussions, feature requests, and PRs on GitHub.
            </>
          ),
          button: (
            <Button
              to={'https://github.com/ory/'}
              style={'link'}
              theme={'dark'}
              iconRight={<ArrowRight size={16} weight={'bold'} />}
            >
              Star us on GitHub
            </Button>
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

    <Features
      overline={'Modular Integration'}
      title={<>Auth integration in 1.. 2.. done</>}
      buttons={
        <Button
          to={'https://console.ory.sh/registration'}
          style={'link'}
          iconRight={<ArrowRight size={16} weight={'bold'} />}
        >
          Get Started
        </Button>
      }
      feature={[
        {
          icon: <Code size={32} weight={'duotone'} />,
          title: <>Ory is open source</>,
          description: (
            <>
              Ory's heart and soul are rooted in Open Source. Our commitment to
              open software will stay unchanged.
            </>
          )
        },
        {
          icon: <UserPlus size={32} weight={'duotone'} />,
          title: <>No limits on identities</>,
          description: (
            <>
              Dont pay for Monthly Active Users. Pay for what you use.Choose a
              transparent plan that adapts to your needs.
            </>
          )
        },
        {
          icon: <CirclesThreePlus size={32} weight={'duotone'} />,
          title: <>More features</>,
          description: (
            <>
              Ory draws from a large set of features: IAM, Permissions and
              Roles, Zero-Trust, OAuth2, OIDC, Integrations and more.
            </>
          )
        },
        {
          icon: <LockOpen size={32} weight={'duotone'} />,
          title: <>No lock in</>,
          description: (
            <>
              We support the migration from Ory open source to Ory as a Service,
              and the other way around. Don't worry about lock in.
            </>
          )
        }
      ]}
    />

    <Quotes {...quotesDefault} />
    <Quickstart {...quickstartDefault} />
  </Layout>
)

export default IndexPage
