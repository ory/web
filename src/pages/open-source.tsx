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
import Footer from '../components/layouts/footer/footer'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import Stats from '../components/layouts/stats/stats'
import Quotes from '../components/layouts/quotes/quotes'
import opensource from '../images/illustrations/opensource.svg'
import kratos from '../images/kratos/kratos.svg'
import hydra from '../images/hydra/hydra.svg'
import keto from '../images/keto/keto.svg'
import oathkeeper from '../images/oathkeeper/oathkeeper.svg'
import blues from '../images/adopters/blues.svg'
import thoughtworks from '../images/adopters/thoughtworks.svg'
import kyma from '../images/adopters/kyma.svg'
import raspberrypi from '../images/adopters/raspberrypi.svg'
import segment from '../images/adopters/segment.svg'
import sainsburys from '../images/adopters/sainsburys.svg'
import hootsuite from '../images/adopters/hootsuite.svg'
import threerein from '../images/adopters/threerein.svg'
import { pl32 } from '../components/freestanding/utils/padding.module.css'
import cn from 'classnames'
import SEO from '../components/layouts/seo/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      description={
        'Implement a secure, modern Auth system in minutes with open source from Ory. Works in both new and existing systems.'
      }
      title={'Open Source Auth Solutions For Everyone'}
    />

    <Hero
      title={'Ory is Open Source'}
      description={
        ' The heart and roots of Ory are Open Source. We believe in the power of open and transparent collaboration to provide a common identity infrastructure.'
      }
      image={<img loading="lazy" alt="" src={opensource} />}
    />

    <Quickstart
      title={<>Ready to get started?</>}
      description={
        <>
          Explore Ory and the future of identity.
          <br />
          Make yourself heard in discussions and contribute directly to Ory on
          GitHub.
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
    <Stats
      title={<>Billions of Identities</>}
      description={
        <>
          Companies from all over the world rely on Ory for their identity
          needs. Ory technology secures billions of identity requests.
        </>
      }
    />

    <FeatureImage
      overline={'User & Identity Management'}
      title={<>Ory Kratos</>}
      description={
        <>
          Grow your users, easily register and manage user identities, using
          custom flows in your look and feel.
        </>
      }
      buttons={
        <>
          <Button
            to={'/docs/kratos/install/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
            Install Kratos
          </Button>
        </>
      }
      image={<img loading="lazy" alt="" src={kratos} />}
    />

    <FeatureImage
      mirror={true}
      overline={'OAuth 2.0 and OpenId Connect'}
      title={<>Ory Hydra</>}
      description={
        <>
          Keep threats out and easily verify who is a user and customize sign in
          flows that fit you and your users.
        </>
      }
      buttons={
        <>
          <Button
            to={'/docs/hydra/install/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
            Install Hydra
          </Button>
        </>
      }
      image={<img loading="lazy" alt="" src={hydra} />}
    />

    <FeatureImage
      overline={'Authorization'}
      title={<>Ory Keto</>}
      description={
        <>
          Personalize experiences using customer specific access rules, define
          roles, and give customers individual access to your service.
        </>
      }
      buttons={
        <>
          <Button
            to={'/docs/keto/install/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
            Install Keto
          </Button>
        </>
      }
      image={<img loading="lazy" alt="" src={keto} />}
    />

    <FeatureImage
      mirror={true}
      overline={'Zero Trust Networking'}
      title={<>Ory Oathkeeper</>}
      description={
        <>
          Be in full control - secure webfacing applications and services by
          implementing Zero Trust Network Architecture.
        </>
      }
      buttons={
        <>
          <Button
            to={'/docs/oathkeeper/install/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
            Install Oathkeeper
          </Button>
        </>
      }
      image={<img loading="lazy" alt="" src={oathkeeper} />}
    />

    <Quotes
      title={
        <>
          Read about our
          <br /> users experience
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
  </Layout>
)

export default IndexPage
