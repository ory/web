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
import heroIllustration from '../../images/illustrations/hero.svg'
import headlessIllustration from '../../images/illustrations/headless.png'
import dashboardIllustration from '../../images/illustrations/dashboard_small.png'
import codeboxIllustration from '../../images/illustrations/codebox.svg'
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
    <SEO title={'Ory'} description={''} />

    <Hero
      title={'Never Build Auth Again'}
      description={
        'Login, register and manage your users with a reliable and certified solution trusted by Fortune 500 companies.'
      }
      buttons={
        <Button
          to={'/products'}
          style={'filled'}
          iconLeft={<RocketLaunch size={24} />}
        >
          Get Started Today
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
          APIs, applications and data. Ory as a Service comes with dashboards
          for metrics and insights and can be managed fully from the intuitive
          user interface or dedicated CLI.
        </>
      }
      image={<img loading="lazy" alt="" src={dashboardIllustration} />}
    />

    <FeatureImage
      overline={'Flexibility'}
      title={<>Bring your own UX</>}
      description={
        <>
          You want to brand user facing UIs and use your styles and design? No
          problem with headless integration. You want custom auth flows? Done.
          And this is included without extra charges.
        </>
      }
      image={<img loading="lazy" alt="" src={headlessIllustration} />}
    />

    <Coding
      overline={'Made for developers'}
      title={<>Improve your developer experience</>}
      description={
        <>
          At Ory, our mission is to improve the overall developer experience. We
          ship SDKs for all programming languages, documentation, tutorials and
          intuitive CLIs. Our open source approach lets you to participate in
          API and architecture discussions - your next PR will be shipped in
          Ory.
        </>
      }
      buttons={
        <>
          <Button to={'/'} style={'filled'}>
            Get Started Today
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
              to={'/'}
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
              Participate in discussions, feature requests, bug fixes, and PRs,
              the way you are used to from open source.
            </>
          ),
          button: (
            <Button
              to={'/'}
              style={'link'}
              iconRight={<ArrowRight size={16} />}
            >
              Star us on GitHub
            </Button>
          )
        }
      ]}
    />

    <Stats />

    <Features
      overline={'Top Features'}
      title={
        <>
          Auth integration in 1.. 2..
          <br /> done!
        </>
      }
      buttons={
        <Button to={'/'} style={'link'} iconRight={<ArrowRight size={16} />}>
          See our roadmap
        </Button>
      }
      feature={[
        {
          icon: <Code size={32} />,
          title: <>Ory is open source</>,
          description: (
            <>
              Ory's heart and soul are rooted in the open source community. Our
              commitment to open software will stay unchanged.
            </>
          )
        },
        {
          icon: <UserPlus size={32} />,
          title: <>No limits on identities</>,
          description: (
            <>
              The unique pricing model does not charge you for Monthly Active
              Users. Choose a transparent plan that adapts to your needs.
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
      title={
        <>
          Read about our
          <br /> customers experience
        </>
      }
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
              Securing modern digital systems requires new approaches to
              identity. With Ory, I can build custom and secure ID
              infrastructure and APIs that fit perfectly into my client's
              ever-evolving cloud environments.
            </>
          ),
          person: `Ken Adler`,
          jobTitle: `Identity & Infosec, Thoughtworks`
        },
        {
          logo: <img src={blues} loading="lazy" alt={'Blues Logo'} />,
          description: (
            <>
              I needed an Auth System that would work with modern setups, and I
              did not want to write it myself. Ory fit the bill perfectly and
              just works.
            </>
          ),
          person: `Steff Kelsey`,
          jobTitle: `Head of Engineering. Blues Wireless`
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
            to={'/'}
            iconLeft={<RocketLaunch size={24} />}
          >
            Get started today
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
              to={'/'}
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
              to={'/'}
              style={'link'}
              iconRight={<ArrowRight size={16} />}
            >
              Read more
            </Button>
          )
        }
      ]}
    />
  </Layout>
)

export default IndexPage
