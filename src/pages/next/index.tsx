import {
  ArrowRight,
  CirclesThreePlus,
  Code,
  LockOpen,
  RocketLaunch,
  UserPlus
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
import Resource from '../../components/next/layouts/resource/resource'
import Security from '../../components/next/layouts/security/security'
import Stats from '../../components/next/layouts/stats/stats'
import heroIllustration from '../../images/illustrations/hero.svg'
import blues from '../../images/adopters/blues.svg'
import thoughtworks from '../../images/adopters/thoughtworks.svg'
import kyma from '../../images/adopters/kyma.svg'
import raspberrypi from '../../images/adopters/raspberrypi.svg'
import segment from '../../images/adopters/segment.svg'
import sainsburys from '../../images/adopters/sainsburys.svg'
import hootsuite from '../../images/adopters/hootsuite.svg'
import threerein from '../../images/adopters/threerein.svg'
import Features from '../../components/next/layouts/features/features'

const IndexPage = () => (
  <Layout>
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
          Sign up for early access
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
      overline={'Security'}
      title={'Ory as a service'}
      description={`Authenticate and manage users, set and check permissions, protect APIs, applications and data.
        Ory as a Service comes with for metrics and insights and can be managed fully from the intuitive user interface
        or dedicated CLI.`}
      image={<img loading="lazy" alt="" src={heroIllustration} />}
    />

    <FeatureImage
      mirror={true}
      overline={'Flexibility'}
      title={'Bring your own UX'}
      description={`You want to brand all user facing UIs and use your styles and designs?
        No problem with Ory's headless integration. You want custom auth flows? Done.
        And this is included without extra charges.`}
      image={<img loading="lazy" alt="" src={heroIllustration} />}
      buttons={
        <Button
          style={'link'}
          to={'/'}
          iconRight={<ArrowRight weight={'bold'} size={16} />}
        >
          Read more
        </Button>
      }
    />
    <Features
      overline={'Top Features'}
      title={'Auth integration in 1.. 2.. done!'}
      buttons={
        <Button to={'/'} style={'link'} iconRight={<ArrowRight size={16} />}>
          See our roadmap
        </Button>
      }
      feature={[
        {
          icon: <Code size={32} />,
          title: 'Ory is open source',
          description: `Ory's heart and soul are rooted in the open source community.
          Our commitment to open software will stay unchanged forever.`
        },
        {
          icon: <UserPlus size={32} />,
          title: `No limits on identities`,
          description: `The unique pricing model does not charge you for Monthly Active Users.
          Choose a flexible and transparent plan that adapts to your needs.`
        },
        {
          icon: <CirclesThreePlus size={32} />,
          title: `More features`,
          description: `Ory draws from a large set of features:
          IAM, Permissions and Roles, Zero-Trust, OAuth2, OIDC, Integrations, global low latency and many more.`
        },
        {
          icon: <LockOpen size={32} />,
          title: `No lock in`,
          description: `We support the migration from Ory open source to Ory as a Service, and the other way around.
          Never worry about cloud lock in again.`
        }
      ]}
    />
    <Stats />
    <Security />
    <Coding />
    <Resource />
    <Quickstart />
  </Layout>
)

export default IndexPage
