import React from 'react'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Stats from '../components/layouts/stats/stats'
import Quotes from '../components/layouts/quotes/quotes'
import opensource from '../images/illustrations/opensource.svg'
import SEO from '../components/layouts/seo/seo'
import Projects from '../components/layouts/projects/projects'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'

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

    <Projects
      overline={'Identity Server'}
      title={<>Ory Open Source</>}
      description={
        <>
          Onboard users, register and manage identities. Interface with third parties and control access to applications using modern and secure standards. Supported by a large open source community.
        </>
      }
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
    <Quotes {...quotesDefault} />
    <Quickstart {...quickstartOpenSource} />
  </Layout>
)

export default IndexPage
