import Layout from '../components/layout'
import React from 'react'
import CompressedHero from '../components/compressed-hero'
import Newsletter from '../components/newsletter'
import CompressedSection from '../components/compressed-section'
import SEO from '../components/seo'
import Stats from '../components/stats'
import CodeBox, { Languages } from '../components/codebox'
import { brandPrefix } from '../config'
import Collaborator from '../components/collaborator'
import kratosProcess from '../images/kratos/kratos.svg'
import kratosPolyglot from '../images/kratos/kratos_p.svg'
import Adopters from '../components/adopters'

const KratosAnimation = () => (
  <img
    alt="The ORY Kratos user login and registration service"
    className="responsive"
    src={kratosProcess}
  />
)

const KratosSdk = () => (
  <img alt="ORY Kratos SDKs" className="responsive" src={kratosPolyglot} />
)

const IntegrationCodeBox = () => (
  <CodeBox
    tabs={[
      {
        filename: 'login.js',
        language: Languages.JavaScript,
        code: `const kratosAdminURL = process.env.KRATOS_ADMIN_URL
// express.get('/auth/login', loginRoute)
export const loginRoute = (req, res) => {
    const request = req.query["request"]
    const url = new URL(\`\${kratosAdminURL}/auth/browser/requests/login\`)
    url.searchParams.set('request', request)
    fetch(url.toString())
        .then(r => r.json())
        .then((kratos) => res.render('loginView', { kratos }))
}`,
      },
      {
        filename: 'registration.js',
        language: Languages.JavaScript,
        code: `const kratosAdminURL = process.env.KRATOS_ADMIN_URL
// express.get('/auth/registration', registrationRoute)
export const registrationRoute = (req, res) => {
    const request = req.query["request"]
    const url = new URL(\`\${kratosAdminURL}/auth/browser/requests/registration\`)
    url.searchParams.set('request', request)
    fetch(url.toString())
        .then(r => r.json())
        .then((kratos) => res.render('registrationView', { kratos }))
}`,
      },
      {
        filename: 'login.tmpl',
        language: Languages.HTML,
        code: `<div class="login-view">
  <form action="{{kratos.methods.password.config.action}}" method="{{kratos.methods.password.config.method}}">
    {{#each kratos.methods.password.config.fields}}
      <input name="{{name}}" type="{{type}}" value="{{value}}">
    {{/each}}
    <button type="submit">Sign In</button>
  </form>
</div>`,
      },
    ]}
  />
)

const KratosPage = () => (
  <Layout
    theme="kratos"
    appendix={'Kratos'}
    githubLink="https://github.com/ory/kratos"
  >
    <SEO
      description=""
      title={`${brandPrefix}Kratos Cloud Native Identity and User Management System`}
    />

    <CompressedHero
      title="Cloud Native Identity and User Management System"
      subtitle="Use configurable authentication mechanisms and master user management in the cloud."
      cta={[
        {
          title: 'Get started',
          href: 'https://www.ory.sh/docs/kratos/quickstart',
          style: 'primary',
          openInNewWindow: true,
        },
        {
          title: 'GitHub',
          href: 'https://github.com/ory/kratos',
          style: 'secondary',
        },
      ]}
      visual={<KratosAnimation />}
      mobile={[<KratosAnimation />]}
    />

    <Newsletter preselect={'kratos'} />
    <CompressedSection
      expanded
      left={
        <>
          <h3>Easy integration</h3>
          <p>
            {brandPrefix}Kratos is a cloud native user management system. It
            provides user login and registration, multi-factor authentication,
            and user information storage with a headless API. It is fully
            configurable and supports a wide range of protocols such as Google
            Authenticator, and stores user information using JSON Schema.
          </p>
          <p>
            {brandPrefix}Kratos works with any UI framework and only a few lines
            of code are required. Take a look at our{' '}
            <a href="https://www.ory.sh/docs/kratos">documentation</a> and learn
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
            {brandPrefix}Kratos is a cloud native user management system. It
            provides user login and registration, multi-factor authentication,
            and user information storage with a headless API. It is fully
            configurable and supports a wide range of protocols such as Google
            Authenticator, and stores user information using JSON Schema.
          </p>
          <p>
            {brandPrefix}Kratos works with any UI framework and only a few lines
            of code are required. Take a look at our{' '}
            <a href="https://www.ory.sh/docs/kratos">documentation</a> and learn
            more.{' '}
          </p>
        </div>,
      ]}
    />

    <CompressedSection
      right={<KratosSdk />}
      left={
        <>
          <h3>Polyglot</h3>
          <p>
            {brandPrefix}Kratos is written in Go and we provide SDKs for every
            language. We work with any UI framework and interfacing with the
            login, registration and profile management is easy. Our{' '}
            <a href="https://www.ory.sh/docs/kratos/sdk">documentation</a> makes
            integrating {brandPrefix}Kratos a snap.
          </p>
        </>
      }
      mobile={[
        <h3>Polyglot</h3>,
        <KratosSdk />,
        <p className="mobile-offset-32">
          {brandPrefix}Kratos is written in Go and we provide SDKs for every
          language. We work with any UI framework and interfacing with the
          login, registration and profile management is easy. Our{' '}
          <a href="https://www.ory.sh/docs/kratos/sdk">documentation</a> makes
          integrating {brandPrefix}Kratos a snap.
        </p>,
      ]}
    />

    <Stats />
    <Adopters />
    <Collaborator />
  </Layout>
)

export default KratosPage
