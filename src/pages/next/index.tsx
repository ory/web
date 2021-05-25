import {
  ArrowRight,
  BookOpen,
  CirclesThreePlus,
  Code,
  GithubLogo,
  GitMerge,
  LinkedinLogo,
  LockOpen,
  RocketLaunch,
  SlackLogo,
  Terminal,
  TwitterLogo,
  UserPlus,
  Users,
  YoutubeLogo
} from 'phosphor-react'
import React from 'react'
import Button from '../../components/next/freestanding/button/button'
import ColourWrapper from '../../components/next/freestanding/colour/colour-wrapper'
import Molecule from '../../components/next/freestanding/molecule/molecule'
import Adopters from '../../components/next/layouts/adopters/adopters'
import Coding from '../../components/next/layouts/coding/coding'
import FeatureImage from '../../components/next/layouts/feature-image/feature-image'
import Hero from '../../components/next/layouts/hero/hero'
import Layout from '../../components/next/layouts/layout/layout'
import Quickstart from '../../components/next/layouts/quickstart/quickstart'
import Security from '../../components/next/layouts/security/security'
import Stats from '../../components/next/layouts/stats/stats'
import Features from '../../components/next/layouts/features/features'
import Quotes from '../../components/next/layouts/quotes/quotes'
import heroIllustration from '../../images/illustrations/hero.png'
import headlessIllustration from '../../images/illustrations/examplelogin.svg'
import dashboardIllustration from '../../images/illustrations/dashboard.svg'
import codeboxIllustration from '../../images/illustrations/codebox.png'
import blues from '../../images/adopters/blues.svg'
import thoughtworks from '../../images/adopters/thoughtworks.svg'
import kyma from '../../images/adopters/kyma.svg'
import raspberrypi from '../../images/adopters/raspberrypi.svg'
import segment from '../../images/adopters/segment.svg'
import sainsburys from '../../images/adopters/sainsburys.svg'
import hootsuite from '../../images/adopters/hootsuite.svg'
import threerein from '../../images/adopters/threerein.svg'
import { pl32 } from '../../components/next/freestanding/utils/padding.module.css'
import cn from 'classnames'
import SEO from '../../components/next/layouts/seo/seo'
import Footer from '../../components/next/layouts/footer/footer'

const IndexPage = () => (
  <Layout>
    <SEO
      description={
        'Implement OAuth 2.0 and OpenID Connect in minutes with open source from Ory. Works in both new and existing systems.'
      }
      title={
        'Ory - Open Source OAuth2 and OpenID Connect Access Control & API Security'
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
          to={'https://console.ory.sh'}
          style={'filled'}
          iconLeft={<RocketLaunch size={24} />}
        >
          Get Started
        </Button>
      }
      image={<img loading="lazy" alt="" src={heroIllustration} />}
    />

    <Adopters
      adopters={[
        {
          title: 'BluesWireless',
          image: blues,
          url: 'https://blues.io/',
          pos: 1
        },
        {
          title: 'ThoughtWorks',
          image: thoughtworks,
          url: 'https://www.thoughtworks.com',
          pos: 8
        },
        {
          title: 'Segment',
          image: segment,
          url: 'https://segment.com/',
          pos: 5
        },
        {
          title: 'Raspberry Pi',
          image: raspberrypi,
          url: 'https://www.raspberrypi.org/',
          pos: 3
        },
        {
          title: `Sainsbury's`,
          image: sainsburys,
          url: 'https://www.sainsburys.co.uk/',
          pos: 2
        },
        {
          title: 'Hootsuite',
          image: hootsuite,
          url: 'https://hootsuite.com',
          pos: 7
        },
        {
          title: 'Kyma Project',
          image: kyma,
          url: 'https://kyma-project.io/',
          pos: 4
        },
        {
          title: '3REIN',
          image: threerein,
          url: 'https://3rein.com/',
          pos: 6
        }
      ]}
    />

    <FeatureImage
      mirror={true}
      overline={'Security'}
      title={<>Ory as a service</>}
      description={
        <>
          Authenticate and manage users, set and check permissions, protect
          APIs, applications and data. <br /> Ory as a Service comes with a
          dashboard for metrics and insights and can be managed from the user
          interface or CLI.
        </>
      }
      buttons={
        <Button to={'https://console.ory.sh'} style={'filled'}>
          Get Started
        </Button>
      }
      image={<img loading="lazy" alt="" src={dashboardIllustration} />}
    />

    <FeatureImage
      overline={'Flexibility'}
      title={<>Bring your own UX</>}
      description={
        <>
          You want to brand user facing UIs and use your styles and design? No
          problem with headless integration. <br />
          You want custom auth flows? Done.
          <br />
          This feature is included without extra charges.
        </>
      }
      buttons={
        <Button to={'https://console.ory.sh'} style={'filled'}>
          Get Started
        </Button>
      }
      image={<img loading="lazy" alt="" src={headlessIllustration} />}
    />

    <Coding
      overline={'Made for developers'}
      title={<>Improve your developer experience</>}
      description={
        <>
          At Ory, our mission is to improve the overall developer experience. We
          provide SDKs, documentation, tutorials, CLIs and community support.
          <br />
          Our open source approach lets you to participate in API and
          architecture discussions - your next PR will be shipped in Ory.
        </>
      }
      buttons={
        <>
          <Button to={'https://console.ory.sh/registration'} style={'filled'}>
            Get Started
          </Button>
        </>
      }
      visual={<img loading="lazy" alt="" src={codeboxIllustration} />}
      content={[
        {
          icon: <Terminal size={32} />,
          title: <>Powerful tools</>,
          description: (
            <>
              Ory ships REST APIs, gRPC APIs, SDKs, and CLIs for all operating
              systems and CPUs.
            </>
          ),
          button: (
            <Button
              to={'/docs'}
              style={'link'}
              iconRight={<ArrowRight size={16} />}
            >
              Read the docs
            </Button>
          )
        },
        {
          icon: <GitMerge size={32} />,
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
              iconRight={<ArrowRight size={16} />}
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
      title={
        <>
          Auth integration in 1.. 2..
          <br /> done
        </>
      }
      buttons={
        <Button
          to={'https://console.ory.sh/registration'}
          style={'link'}
          iconRight={<ArrowRight size={16} />}
        >
          Get Started
        </Button>
      }
      feature={[
        {
          icon: <Code size={32} />,
          title: <>Ory is open source</>,
          description: (
            <>
              Ory's heart and soul are rooted in Open Source. Our commitment to
              open software will stay unchanged.
            </>
          )
        },
        {
          icon: <UserPlus size={32} />,
          title: <>No limits on identities</>,
          description: (
            <>
              Dont pay for Monthly Active Users. Pay for what you use.Choose a
              transparent plan that adapts to your needs.
            </>
          )
        },
        {
          icon: <CirclesThreePlus size={32} />,
          title: <>More features</>,
          description: (
            <>
              Ory draws from a large set of features: IAM, Permissions and
              Roles, Zero-Trust, OAuth2, OIDC, Integrations and many more.
            </>
          )
        },
        {
          icon: <LockOpen size={32} />,
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

    <Quotes
      title={<>What our customers say</>}
      quotes={[
        {
          logo: (
            <ColourWrapper text={'kratos-primary'}>
              <img src={sainsburys} loading="lazy" alt={"Sainsbury's Logo"} />
            </ColourWrapper>
          ),
          description: (
            <>
              We like using Ory because it’s API first design made it super easy
              to integrate with the rest our stack.
            </>
          ),
          person: `Paul Harman`,
          jobTitle: `Engineering Manager, Sainsbury’s Tech`
        },
        {
          logo: (
            <img src={thoughtworks} loading="lazy" alt={'Thoughtworks Logo'} />
          ),
          description: (
            <>
              With Ory, I can build custom and secure ID infrastructure and APIs
              that fit perfectly into my client's ever-evolving cloud
              environments.
            </>
          ),
          person: `Ken Adler`,
          jobTitle: `Identity & Infosec, Thoughtworks`
        },
        {
          logo: <img src={blues} loading="lazy" alt={'Blues Logo'} />,
          description: (
            <>
              I needed an Auth System that would work with modern setups. Ory
              fit the bill perfectly and just works.
            </>
          ),
          person: `Steff Kelsey`,
          jobTitle: `VP of Engineering. Blues Inc.`
        }
      ]}
    />

    <Quickstart
      title={<>Ready to get started?</>}
      description={
        <>
          Explore Ory and the future of identity. Contact us
          <br /> for a custom support package for your business.
        </>
      }
      buttons={
        <>
          <Button
            style={'filled'}
            to={'https://console.ory.sh/registration'}
            iconLeft={<RocketLaunch size={24} />}
          >
            Get started
          </Button>
        </>
      }
      content={[
        {
          icon: <BookOpen size={32} />,
          title: <>Check out our docs</>,
          description: (
            <>
              Visit our documentation to learn more about technical concepts,
              read tutorials and guides as well as an extensive API reference.
            </>
          ),
          button: (
            <Button
              to={'/docs'}
              style={'link'}
              iconRight={<ArrowRight size={16} />}
            >
              Read the docs
            </Button>
          )
        },
        {
          icon: <Users size={32} />,
          title: <>Join a diverse community</>,
          description: (
            <>
              Make yourself heard in chat and contribute code and insights to
              the open source projects at the heart of Ory.
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
        }
      ]}
    />
  </Layout>
)

export default IndexPage
