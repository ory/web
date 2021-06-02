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
import Newsletter from '../components/newsletter'
import Footer from '../components/layouts/footer/footer'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import kratosPolyglot from '../images/kratos/kratos_p.svg'
import kratosProcess from '../images/kratos/kratos.svg'
import CodeBox, { Languages } from '../components/codebox'
import cn from 'classnames'
import SEO from '../components/layouts/seo/seo'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Stats from '../components/layouts/stats/stats'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'

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
}`
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
}`
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
</div>`
      }
    ]}
  />
)

const IndexPage = () => (
  <Layout>
    <SEO
      description="Open source user management and identity server."
      title={`Ory Kratos - Cloud Native Identity and User Management System`}
    />
    <Hero
      title={'Identity and User Management System'}
      description={
        ' Use configurable authentication mechanisms and master user management in the cloud.'
      }
      image={<img loading="lazy" alt="" src={kratosProcess} />}
    />

    <Newsletter preselect="kratos" />

    <FeatureImage
      overline={'Start in minutes'}
      title={<>Easy Integration</>}
      description={
        <>
          Ory / Kratos is a cloud native user management system. It provides
          user login and registration, multi-factor authentication, and user
          information storage with a headless API. It is fully configurable and
          supports a wide range of protocols such as Google Authenticator, and
          stores user information using JSON Schema. Ory / Kratos works with any
          UI framework and only a few lines of code are required. Take a look at
          our documentation and learn more.
        </>
      }
      buttons={
        <>
          <Button
            to={'/docs/kratos/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
            Check out the docs
          </Button>
        </>
      }
      image={<IntegrationCodeBox />}
    />

    <FeatureImage
      mirror={true}
      overline={'Polyglot'}
      title={<>SDKs for all languages</>}
      description={
        <>
          Ory / Kratos is written in Go and we provide SDKs for every language.
          We work with any UI framework and interfacing with the login,
          registration and profile management is easy. Our documentation makes
          integrating Ory / Kratos a snap.
        </>
      }
      buttons={
        <>
          <Button
            to={'/docs/kratos/install/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
            Install Ory / Kratos
          </Button>
        </>
      }
      image={<img loading="lazy" alt="" src={kratosPolyglot} />}
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
    <Quickstart {...quickstartOpenSource} />
  </Layout>
)

export default IndexPage
