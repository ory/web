import Layout from '../components/layout'
import React from 'react'
import CompressedHero from '../components/compressed-hero'
import Newsletter from '../components/newsletter'
import CompressedSection from '../components/compressed-section'
import SEO from '../components/seo'
import Stats from '../components/stats'
import { brandPrefix } from '../config'
import Collaborator from '../components/collaborator'
import ketoProcess from '../images/keto/keto.svg'
import ketoPolyglot from '../images/keto/keto_p.svg'
import Adopters from '../components/adopters'

const KetoAnimation = () => (
  <img
    alt="The ORY Keto Permission and Role Management"
    className="responsive"
    src={ketoProcess}
  />
)

const KetoSdk = () => (
  <img alt="ORY Keto SDKs" className="responsive" src={ketoPolyglot} />
)

const KetoPage = () => (
  <Layout
    theme="keto"
    appendix={'Keto'}
    githubLink="https://github.com/ory/keto"
  >
    <SEO
      description=""
      title={`${brandPrefix}Keto Permission and Role Management`}
    />
    <CompressedHero
      title="Access Control and Permission Management"
      subtitle="Control who is allowed to do what using established best practices (RBAC, ACL, ...) and easy configuration."
      cta={[
        {
          title: 'Get started',
          href: 'https://www.ory.sh/docs/keto/install',
          style: 'primary',
        },
        {
          title: 'GitHub',
          href: 'https://github.com/ory/keto',
          style: 'secondary',
        },
      ]}
      visual={<KetoAnimation />}
      mobile={[<KetoAnimation />]}
    />

    <Newsletter preselect={'keto'} />
    <CompressedSection
      right={<KetoSdk />}
      left={
        <>
          <h3>Polyglot</h3>
          <p>
            {brandPrefix}Keto is written in Go and we provide SDKs for every
            language. Our{' '}
            <a href="https://www.ory.sh/keto/docs/sdk/index">documentation</a> makes
            integrating {brandPrefix}Keto a snap.
          </p>
        </>
      }
      mobile={[
        <h3>Polyglot</h3>,
        <KetoSdk />,
        <p className="mobile-offset-32">
          {brandPrefix}Keto is written in Go and we provide SDKs for every
          language. Our{' '}
          <a href="https://www.ory.sh/keto/docs/sdk/index">documentation</a> makes
          integrating {brandPrefix}Keto a snap.
        </p>,
      ]}
    />

    <Stats />
    <Adopters />
    <Collaborator />
  </Layout>
)

export default KetoPage
