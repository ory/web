import React from 'react'

import Button from '../components/freestanding/button/button'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'
import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Coding from '../components/layouts/coding/coding'
import Layout from '../components/layouts/layout/layout'
import Projects from '../components/layouts/projects/projects'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'

import codeboxIllustration from '../images/illustrations/codebox.svg'

const IndexPage = () => {
  const BookOpen = (
    <i className={'base-white ph-book-open ph-book-open-duotone size24'} />
  )
  const Terminal = (
    <i className={'themed-primary ph-terminal ph-terminal-duotone size32'} />
  )
  const ArrowRight = <i className={'base-white ph-arrow-right-bold size16'} />
  const GitMerge = (
    <i className={'themed-primary ph-git-merge ph-git-merge-duotone size32'} />
  )

  return (
    <Layout>
      <SEO
        description={
          'Adopt a secure, modern Auth system for the cloud with open source from Ory. Fast, modular integration into any tech stack.'
        }
        title={'Ory - Open Source Auth Solutions For Everyone'}
      />

      <Projects
        overline={'Identity Server'}
        title={<>Ory Open Source</>}
        description={
          <>
            Onboard users, register and manage identities. Interface with third
            parties and control access to applications using modern and secure
            standards. Supported by a large open source community.
          </>
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
              to={'/docs/open-source'}
              style={'filled'}
              iconLeft={BookOpen}
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
                iconRight={ArrowRight}
              >
                Install the CLI
              </Button>
            )
          },
          {
            icon: GitMerge,
            title: <>Open Source</>,
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
                iconRight={ArrowRight}
              >
                Star us on GitHub
              </Button>
            )
          }
        ]}
      />

      <Quotes {...quotesDefault} />
      <Quickstart {...quickstartOpenSource} />
    </Layout>
  )
}

export default IndexPage
