import React from 'react'
import Button from '../components/freestanding/button/button'
import Adopters from '../components/layouts/adopters/adopters'
import FeatureList from '../components/layouts/featurelist/feature-list'
import FeatureImage from '../components/layouts/feature-image/feature-image'
import Newsletter from '../components/newsletter'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import kratosPolyglot from '../images/kratos/kratos_p.svg'
import kratosProcess from '../images/kratos/kratos.svg'
import CodeBox, { Languages } from '../components/codebox'
import SEO from '../components/layouts/seo/seo'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Stats from '../components/layouts/stats/stats'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'

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

const IndexPage = () => {
  const ArrowRight = (
    <IconWrapper color={'themed-primary'} icon={'ArrowRight'} size={'16'} />
  )
  const CheckCircle = (
    <IconWrapper
      icon={'CheckCircleBold'}
      size={'16'}
      color={'success-primary'}
    />
  )
  const CheckCircleHero = (
    <IconWrapper color={'base-white'} icon={'CheckCircle'} size={'24'} />
  )
  const CircleThreePlus = (
    <IconWrapper color={'base-white'} icon={'CirclesThreePlus'} size={'24'} />
  )
  return (
    <Layout>
      <SEO
        description="Open source user management and identity server."
        title={`Ory Kratos - Cloud Native Identity and User Management System`}
      />
      <Hero
        title={'Identity & User Management'}
        description={
          'Use configurable authentication and master user management in the cloud.'
        }
        buttons={
          <Button
            to={'/kratos/docs/quickstart'}
            style={'filled'}
            iconRight={CheckCircleHero}
          >
            Get Started
          </Button>
        }
        image={
          <img
            className="responsive"
            loading="lazy"
            alt="Examples of headless Login and Registrations forms with different styles using Kratos"
            src={kratosProcess}
          />
        }
      />

      <Newsletter preselect="kratos" />

      <FeatureList
        features={[
          {
            icon: CircleThreePlus,
            title: 'Ory Kratos Features',
            description:
              'Most software applications need to deal with user and identity management. Ory Kratos serves common flows so you dont need to rewrite everything yourself.',
            button: (
              <Button style={'text'} to={'/docs'} iconRight={ArrowRight}>
                Read the docs
              </Button>
            ),
            features: [
              {
                title: 'Self Service Login and Registration',
                description:
                  'Enable users to create and sign in to accounts using username/email and password combinations, Social Login, passwordless flows and more.',
                icon: CheckCircle
              },
              {
                title: 'Admin Management',
                description:
                  'Manage your userbase and get, create, update or delete identities and their data.',
                icon: CheckCircle
              },
              {
                title: 'Headless APIs and Custom Data Models',
                description:
                  'Use customizable identity models (add fields like name, address, favourite pet ect..) and create your own user interfaces for flows in your style and branding.',
                icon: CheckCircle
              },
              {
                title: 'Profile and Account Management',
                description:
                  'Let your users use secure flows to update passwords, personal details, email addresses, linked social profiles and more.',
                icon: CheckCircle
              },
              {
                title: 'Social Logins',
                description:
                  'Simplify UX and let them use their existing accounts at Google, GitHub, etc. to sign up and log in. All OIDC providers are supported.',
                icon: CheckCircle
              },
              {
                title: 'Account Verification and Recovery',
                description:
                  'Verify an identity by checking email, phone number, or physical address of that user. Provide recovery of accounts using "Forgot Password" flows, security codes, ect.',
                icon: CheckCircle
              }
            ]
          }
        ]}
      />


      <FeatureImage
        overline={'Start in minutes'}
        title={<>Easy Integration</>}
        description={
          <>
            Ory Kratos is a cloud native user management system. It provides
            user login and registration, multi-factor authentication, and user
            information storage with a headless API. It is fully configurable
            and supports a wide range of protocols such as Google Authenticator.
            Ory Kratos works with any UI framework and only a few lines of code
            are required.
          </>
        }
        buttons={
          <>
            <Button to={'/docs/kratos/'} style={'link'} iconRight={ArrowRight}>
              Check out the documentation
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
            Ory Kratos is written in Go and we provide SDKs for every language.
            We work with any UI framework and interfacing with the login,
            registration and profile management is easy. Our documentation makes
            integrating Ory Kratos a snap.
          </>
        }
        buttons={
          <>
            <Button
              to={'/docs/kratos/quickstart/'}
              style={'link'}
              iconRight={ArrowRight}
            >
              Run the Quickstart
            </Button>
          </>
        }
        image={
          <img
            className="responsive"
            loading="lazy"
            alt="Kratos SDKs for any programming language"
            src={kratosPolyglot}
          />
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
      <Quickstart {...quickstartOpenSource} />
    </Layout>
  )
}

export default IndexPage
