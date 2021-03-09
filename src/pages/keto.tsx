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
    loading="lazy"
    alt="The Ory Access and Policy Server"
    className="responsive"
    src={ketoProcess}
  />
)

const KetoSdk = () => (
  <img
    loading="lazy"
    alt="Ory Keto SDKs"
    className="responsive"
    src={ketoPolyglot}
  />
)

const KetoPage = () => (
  <Layout
    theme="keto"
    appendix={'Keto'}
    githubLink="https://github.com/ory/keto"
    discussionsLink="https://github.com/ory/keto/discussions"
  >
    <SEO
      description="Authorization Server based on Google Zanzibar, providing RBAC, ABAC and ACL"
      title={`${brandPrefix}Keto Permission and Role Management`}
    />
    <CompressedHero
      title="Global access control"
      subtitle="Manage user roles, rights, and permissions with ACL based on Google Zanzibar"
      cta={[
        {
          title: 'Get started',
          href: 'https://www.ory.sh/docs/keto/install',
          style: 'primary'
        },
        {
          title: 'GitHub',
          href: 'https://github.com/ory/keto',
          style: 'secondary'
        }
      ]}
      visual={<KetoAnimation />}
    />

    <Newsletter preselect={'keto'} />
    <CompressedSection
      expanded
      left={
        <>
          <h3>Easy integration</h3>
          <p>
            {brandPrefix}Keto is a cloud native global access control server. It
            is fully configurable, completely headless, and based on Google
            Zanzibar. Take a global view of permissions management and scale on
            any system.
          </p>
          <p>
            Take a look at our{' '}
            <a href="https://www.ory.sh/docs/keto">documentation</a> and learn
            more.{' '}
          </p>
        </>
      }
      right={<IntegrationCodeBox />}
      mobile={[
        <h3>Easy integration</h3>,
        <IntegrationCodeBox />,
        <div className={'mobile-offset-32'}>
          <p>
            {brandPrefix}Keto is a cloud native global access control server. It
            is fully configurable, completely headless, and based on Google
            Zanzibar. Take a global view of permissions management and scale on
            any system.
          </p>
          <p>
            Take a look at our{' '}
            <a href="https://www.ory.sh/docs/keto">documentation</a> and learn
            more.{' '}
          </p>
        </div>
      ]}
    />
    <CompressedSection
      right={<KetoSdk />}
      left={
        <>
          <h3>Polyglot</h3>
          <p>
            {brandPrefix}Keto is written in Go and we provide SDKs for every
            language. Our{' '}
            <a href="https://www.ory.sh/keto/docs/sdk/index">documentation</a>{' '}
            makes integrating {brandPrefix}Keto a snap.
          </p>
        </>
      }
      mobile={[
        <h3>Polyglot</h3>,
        <KetoSdk />,
        <p className="mobile-offset-32">
          {brandPrefix}Keto is written in Go and we provide SDKs for every
          language. Our{' '}
          <a href="https://www.ory.sh/keto/docs/sdk/index">documentation</a>{' '}
          makes integrating {brandPrefix}Keto a snap.
        </p>
      ]}
    />

    <Collaborator />
    <Adopters onlyFeatured={true} />
    <Stats />
  </Layout>
)

export default KetoPage
