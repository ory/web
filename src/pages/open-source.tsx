import React from 'react'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Stats from '../components/layouts/stats/stats'
import Quotes from '../components/layouts/quotes/quotes'
import SEO from '../components/layouts/seo/seo'
import Projects from '../components/layouts/projects/projects'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Adopters from '../components/layouts/adopters/adopters'
import Button from '../components/freestanding/button/button'
import codeboxIllustration from '../images/illustrations/codebox.svg'
import { ArrowRight, BookOpen, GitMerge, Terminal } from 'phosphor-react'
import Coding from '../components/layouts/coding/coding'

const IndexPage = () => (
  <Layout>
    <SEO
      description={
        'Implement a secure, modern Auth system in minutes with open source from Ory. Works in both new and existing systems.'
      }
      title={'Open Source Auth Solutions For Everyone'}
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
    <Quotes {...quotesDefault} />
    <Quickstart {...quickstartOpenSource} />
  </Layout>
)

export default IndexPage
