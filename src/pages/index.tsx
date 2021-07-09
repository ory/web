import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../components/freestanding/button/button'
import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Coding from '../components/layouts/coding/coding'
import FeatureImage from '../components/layouts/feature-image/feature-image'
import Features from '../components/layouts/features/features'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartDefault } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'

import CodeBoxImage from '../images/illustrations/codebox.png'

const IndexPage = () => {
  const RocketLaunch = <i className="ph-rocket-launch base-white size24" />
  const BookOpen = (
    <i className="ph-book-open ph-book-open-duotone base-white size24" />
  )
  const ArrowRightWhite = (
    <i className="ph-arrow-right-bold base-white size16" />
  )
  const ArrowRightThemed = (
    <i className="ph-arrow-right-bold themed-primary size16" />
  )
  const Terminal = <i className="ph-terminal themed-primary size32" />
  const GitMerge = <i className="ph-git-merge themed-primary size32" />
  const Code = <i className="ph-code themed-primary size32" />
  const LockOpen = <i className="ph-lock-open themed-primary size32" />
  const UserPlus = <i className="ph-user-plus themed-primary size32" />
  const CirclesThreePlus = (
    <i className="ph-circles-three-plus themed-primary size32" />
  )

  return (
    <Layout>
      <SEO
        description={
          'Ory is a certified and battle-tested identity solution backed by a large Open Source community and trusted by Fortune500 orgs.'
        }
        title={'Ory - Open Source Identity Solutions For Everyone'}
        keywords={
          'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
        }
      />

      <Hero
        title={'Open Source Identity Platform For Everyone'}
        description={
          'Secure cloud applications and authenticate, authorize and manage users. Ory is built on open standards and secures billions of requests in production every month.'
        }
        buttons={
          <Button
            to={'https://console.ory.sh/registration'}
            style={'filled'}
            iconRight={RocketLaunch}
          >
            Request Access
          </Button>
        }
        image={
          <StaticImage
            src="../images/illustrations/hero.png"
            loading="lazy"
            alt="Overview of the Ory Console"
            className="responsive"
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
            for metrics and insights and can be managed from the user interface
            or CLI.
          </>
        }
        buttons={
          <Button to={'https://console.ory.sh'} style={'filled'}>
            Request Access
          </Button>
        }
        image={
          <StaticImage
            loading="lazy"
            className="responsive"
            alt="Ory Project Dashboard"
            src="../images/illustrations/dashboard.png"
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
            Request Access
          </Button>
        }
        image={
          <StaticImage
            loading="lazy"
            className="responsive"
            alt="Individual styling on user interfaces"
            src="../images/illustrations/examplelogin.png"
          />
        }
      />

      <Coding
        overline={'Made for developers'}
        title={<>Improve your developer experience</>}
        description={
          <>
            At Ory, our mission is to improve the overall developer experience.
            We provide SDKs, documentation, tutorials, CLIs and community
            support. Our open source approach lets you to participate in API and
            architecture discussions - your next PR will be shipped in Ory.
          </>
        }
        buttons={
          <>
            <Button
              to={'/docs/get-started'}
              style={'filled'}
              iconLeft={BookOpen}
            >
              Get started
            </Button>
          </>
        }
        visual={
          <img
            loading="lazy"
            className="responsive"
            alt="Example code and terminal response when integrating Ory"
            src={CodeBoxImage}
          />
        }
        content={[
          {
            icon: Terminal,
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
                iconRight={ArrowRightWhite}
              >
                Install the CLI
              </Button>
            )
          },
          {
            icon: GitMerge,
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
                iconRight={ArrowRightWhite}
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
            iconRight={ArrowRightThemed}
          >
            Request Access
          </Button>
        }
        feature={[
          {
            icon: Code,
            title: <>Ory is open source</>,
            description: (
              <>
                Ory's heart and soul are rooted in Open Source. Our commitment
                to open software will stay unchanged.
              </>
            )
          },
          {
            icon: UserPlus,
            title: <>No limits on identities</>,
            description: (
              <>
                Dont pay for Monthly Active Users. Pay for what you use.Choose a
                transparent plan that adapts to your needs.
              </>
            )
          },
          {
            icon: CirclesThreePlus,
            title: <>More features</>,
            description: (
              <>
                Ory draws from a large set of features: IAM, Permissions and
                Roles, Zero-Trust, OAuth2, OIDC, Integrations and more.
              </>
            )
          },
          {
            icon: LockOpen,
            title: <>No lock in</>,
            description: (
              <>
                We support the migration from Ory open source to Ory as a
                Service, and the other way around. Don't worry about lock in.
              </>
            )
          }
        ]}
      />

      <Quotes {...quotesDefault} />
      <Quickstart {...quickstartDefault} />
    </Layout>
  )
}

export default IndexPage
