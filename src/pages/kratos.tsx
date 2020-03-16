import Layout from '../components/layout'
import React from 'react'
import Hero from '../components/hero'
import Newsletter from '../components/newsletter'
import Section from '../components/section'
import SEO from '../components/seo'
import kratosPolyglot from '../images/kratos/svg_kratos_p.svg'
import Projects from '../components/projects'
import Adopters from '../components/adopters'
import Stats from '../components/stats'
import CodeBox, { js, html, Languages } from '../components/codebox'
import kratosProcess from '../images/kratos/svg_kratos.svg'
import { brandPrefix } from '../config'
import Collaborator from '../components/collaborator'

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
  <Layout theme="kratos" appendix={'Kratos'}>
    <SEO
      description=""
      title={`${brandPrefix}Kratos Cloud Native Identity and User Management System`}
    />
    <Hero
      title="Cloud Native Identity and  User Management System"
      subtitle="Use configurable authentication mechanisms and master user management in the cloud."
      cta={[
        {
          title: 'Docs',
          href: 'https://www.ory.sh/docs/kratos',
          style: 'primary',
        },
        {
          title: 'Tutorial',
          href: 'https://www.ory.sh/docs/next/kratos/quickstart',
          style: 'secondary',
        },
      ]}
    />
    <Newsletter />
    <Section
      left={
        <>
          <h3>What is {brandPrefix}Kratos?</h3>
          <p>
            {brandPrefix}Kratos is a cloud native user management system. It
            provides user login and registration, multi-factor authentication,
            and user information storage with a headless API. It is fully
            configurable and supports a wide range of protocols such as Google
            Authenticator, and stores user information using JSON Schema. Take a
            look at our{' '}
            <a href="https://www.ory.sh/docs/kratos">documentation</a> and learn
            more.
          </p>
        </>
      }
      wide
      right={
        <img
          alt="The ORY Kratos user login and registration service"
          className="responsive"
          src={kratosProcess}
        />
      }
      mobile={[
        <h3>What is {brandPrefix}Kratos?</h3>,
        <img
          alt="The ORY Kratos user login and registration service"
          className="responsive"
          src={kratosProcess}
        />,
        <p className="mobile-offset-32">
          {brandPrefix}Kratos is a user login and registration service that uses
          a variety of configurable authentications for instance "Sign in with
          GitHub." Its multi-factor authentication supports a wide range of
          protocols such as Google Authenticator. Kratos stores user information
          using JSON schema, and its headless API is so nice and easy. Take a
          look at our <a href="https://www.ory.sh/docs/kratos">documentation</a>{' '}
          and learn more.
        </p>,
      ]}
    />
    <Section
      dark
      right={<img className="responsive" src={kratosPolyglot} />}
      left={
        <>
          <h3>Polyglot</h3>
          <p>
            {brandPrefix}Kratos is written in Go and we provide SDKs for every
            language. We work with any UI framework and interfacing with the
            login, registration and profile management is easy. Our{' '}
            <a href="https://www.ory.sh/docs/kratos">documentation</a> makes
            integrating {brandPrefix}Kratos a snap.
          </p>
        </>
      }
      mobile={[
        <h3>Polyglot</h3>,
        <img className="responsive" src={kratosPolyglot} />,
        <p className="mobile-offset-32">
          {brandPrefix}Kratos is written in Go and we provide SDKs for every
          language. We work with any UI framework and interfacing with the
          login, registration and profile management is easy. Our{' '}
          <a href="https://www.ory.sh/docs/kratos">documentation</a> makes
          integrating {brandPrefix}Kratos a snap.
        </p>,
      ]}
    />
    <Section
      left={
        <>
          <h3>Easy integration</h3>
          <p>
            {brandPrefix}Kratos works with any UI framework and only a few lines
            of code are required.
          </p>
          <p>
            ORY technology works on the network. It interferes as little as
            possible with your code so you can concentrate on building your
            applications.
          </p>
          <p>
            <a href="https://www.ory.sh/docs/kratos" className="cta tertiary">
              Learn more
            </a>
          </p>
        </>
      }
      wide
      right={<IntegrationCodeBox />}
      mobile={[
        <h3>Easy integration</h3>,
        <IntegrationCodeBox />,
        <div className={'mobile-offset-32'}>
          <p>
            {brandPrefix}Kratos works with any UI framework and only a few lines
            of code are required.
          </p>
          <p>
            ORY technology works on the network. It interferes as little as
            possible with your code so you can concentrate on building your
            applications.
          </p>
        </div>,
      ]}
    />
    <Projects />
    <Adopters />
    <Stats />
    <Collaborator />
  </Layout>
)

export default KratosPage
