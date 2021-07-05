import React from 'react'
import Button from '../../freestanding/button/button'
import IconWrapper from '../../../components/freestanding/icon/icon-wrapper'

export interface Features {
  title: string
  description: React.ReactElement
  icon: React.ReactElement
}

const CircleThreePlus = (
  <IconWrapper color={'base-white'} icon={'CirclesThreePlus'} size={'24'} />
)
const CheckCircle = (
  <IconWrapper icon={'CheckCircleBold'} size={'16'} color={'success-primary'} />
)
const PlusCircle = (
  <IconWrapper icon={'PlusCircleBold'} size={'16'} color={'base-grey-400'} />
)
const ArrowRight = (
  <IconWrapper color={'themed-primary'} icon={'ArrowRight'} size={'16'} />
)
const MapTriFold = (
  <IconWrapper color={'base-white'} icon={'MapTrifold'} size={'24'} />
)

export const featureListPricing = {
  features: [
    {
      icon: CircleThreePlus,
      title: 'Features',
      description: (
        <>
          Sign up now and instantly access these features. All features except
          the Ory CLI and user interfaces are included when self hosting.
        </>
      ),
      features: [
        {
          title: 'Ory CLI',
          description: (
            <>
              Control the Ory platform from the command line with an intuitive
              and accessible syntax.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Login and Sign up',
          description: (
            <>
              The basics of IAM: Login and register users fast and without
              complicated flows and store credentials securely.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Account Management',
          description: (
            <>
              Manage your users, enable email verification, let users pick new
              passwords and change their profile data.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'User Interface and Dashboards',
          description: (
            <>
              Display stats in a smooth and responsive dashboard. We also offer
              presets for all common user interfaces.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Identity Model',
          description: (
            <>
              A flexible identity model adapts to your business needs. You can
              use one of our provided presets or cook up your own identity
              model.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Social Logins',
          description: (
            <>
              Simplify your users' experience and let them use their existing
              accounts at Google, GitHub, Apple etc. to sign up and log in. All
              OIDC providers are supported.
            </>
          ),
          icon: CheckCircle
        }
      ]
    },
    {
      icon: MapTriFold,
      title: 'Features landing in 2021',
      description: (
        <>
          We are currently working on bringing these features into the Ory
          Cloud.
        </>
      ),
      features: [
        {
          title: 'Advanced Identity and Access Management',
          description: (
            <>
              Multifactor authentication, including passwordless, WebAuthn,
              TOTP; Ability to use your own UI and Branding as well as webhooks
              to define and trigger actions.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: 'Permissions and Roles',
          description: (
            <>
              From a member of the marketing team, to an admin in your support
              staff— give everyone the right level of access to sensitive data.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: 'Oauth2 and OpenID Connect',
          description: (
            <>
              Become an OAuth2.0 provider, enable complex use cases and
              machine2machine interactions, interface your business with third
              party systems.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: 'Integrations',
          description: (
            <>
              Payments integration powered by Stripe as well as Email
              integration to send out emails in bulk or individually.
            </>
          ),
          icon: PlusCircle
        }
      ]
    }
  ]
}

export const featureListKratos = {
  features: [
    {
      icon: CircleThreePlus,
      title: 'Ory Kratos Features',
      description: (
        <>
          Most software applications need to deal with user and identity
          management. Ory Kratos serves common flows, so you don't need to rewrite
          everything yourself.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/docs/kratos/quickstart/'}
          iconRight={ArrowRight}
        >
          Get started
        </Button>
      ),
      features: [
        {
          title: 'Self Service Login and Registration',
          description: (
            <>
              Enable users to create and sign in to accounts using
              username/email and password combinations, Social Login,
              passwordless flows and more.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'User Management',
          description: (
            <>
              Manage your userbase and get, create, update or delete identities
              and their data.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Bring Your Own UI and Identity Models',
          description: (
            <>
              Use customizable identity models (defining custom fields such as
              name, address, favorite pet) and create your own user interfaces
              for flows in your style and branding.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Profile and Account Management',
          description: (
            <>
              Let your users use secure flows to update passwords, personal
              details, email addresses, linked social profiles and more.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Social Logins',
          description: (
            <>
              Simplify your users' experience and let them use their existing
              accounts at Google, GitHub, Apple, etc. to sign up and log in. All
              OIDC providers are supported.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Account Verification and Recovery',
          description: (
            <>
              Verify an identity by checking the email, phone number, or physical
              address of that user. Provide recovery of accounts using "Forgot
              Password" flows, security codes, etc.
            </>
          ),
          icon: CheckCircle
        }
      ]
    }
  ]
}

export const featureListHydra = {
  features: [
    {
      icon: CircleThreePlus,
      title: 'Ory Hydra Features',
      description: (
        <>
          Ory Hydra is a hardened and certified OAuth 2.0 and OpenID Connect
          provider, securing hundreds of billions of API requests in thousands
          of deployments.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/docs/hydra/quickstart/'}
          iconRight={ArrowRight}
        >
          Get started
        </Button>
      ),
      features: [
        {
          title: 'Integrates Everywhere',
          description: (
            <>
              Implement the full Open Authorization 2.0 standard in your
              technology stack. Ory Hydra integrates with any open source (e.g.{' '}
              <Button style={'link-inline'} to={'./kratos'}>
                Ory Kratos
              </Button>
              ) or proprietary IAM system.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'OpenID Certified®',
          description: (
            <>
              Rely on an{' '}
              <Button
                style={'link-inline'}
                to={'https://openid.net/developers/certified/'}
              >
                {' '}
                OpenID Certified® OIDC Provider
              </Button>
              . Ory Hydra implements all flows specified by the IETF and OpenID
              Foundation.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Bring Your Own UX',
          description: (
            <>
              Use your branding and user interfaces for all OAuth2.0 and OpenID
              Connect flows. Your own styles and flows powered by a robust API
              and intuitive CLI.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Compatible with MITREid',
          description: (
            <>
              Migrate from{' '}
              <Button
                style={'link-inline'}
                to={'https://mitreid-connect.github.io/'}
              >
                MITREid Connect
              </Button>{' '}
              to Ory Hydra. Migration{' '}
              <Button
                style={'link-inline'}
                to={'/hydra/docs/guides/migrating-from-mitreid/'}
              >
                documentation
              </Button>{' '}
              is provided.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Cryptographic Key Storage',
          description: (
            <>
              Encrypt cryptographic keys for e.g. signing JWTs, store them
              securely and manage OAuth 2.0 clients directly from the CLI.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Security First and High Performance',
          description: (
            <>
              Sleep easy, knowing that Ory Hydra is{' '}
              <Button
                style={'link-inline'}
                to={'/hydra/docs/security-architecture/'}
              >
                designed
              </Button>{' '}
              to reduce security incidents and scales as required. Ory Hydra
              serves tokens to millions of users weekly and just works.
            </>
          ),
          icon: CheckCircle
        }
      ]
    }
  ]
}

export const featureListKeto = {
  features: [
    {
      icon: CircleThreePlus,
      title: 'Ory Keto Features',
      description: (
        <>
          Control who can access what in your application. Ory Keto serves
          answers at scale globally with low latency.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/docs/keto/quickstart/'}
          iconRight={ArrowRight}
        >
          Get started
        </Button>
      ),
      features: [
        {
          title: 'Manage and Check Permissions',
          description: (
            <>
              Determine if an entity (user, service, IoT) is allowed to perform
              an action using HTTP or gRPC APIs.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Low Latency and Highly Available',
          description: (
            <>
              Ory Keto is based on Zanzibar, which has maintained
              95th-percentile latency of less than 10 ms and availability
              greater than 99.99% over years of production use.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Flexible Permission Management',
          description: (
            <>
              Ory Keto integrates with any existing data structures and
              identifiers.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Global Access Control',
          description: (
            <>
              Coming soon: Deploy around the globe and provide a fast response
              no matter where your users are.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: 'Strong Consistency',
          description: (
            <>
              Coming soon: Provide a straightforward user experience by serving
              strong consistent responses using{' '}
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/keto/issues/517'}
              >
                snaptokens
              </Button>
              .
            </>
          ),
          icon: PlusCircle
        }
      ]
    }
  ]
}

export const featureListOathkeeper = {
  features: [
    {
      icon: CircleThreePlus,
      title: 'Ory Oathkeeper Features',
      description: (
        <>
          Forward authorized requests and reject unauthorized ones. Ory
          Oathkeeper can act as a reverse proxy or interface with your existing
          API Gateway.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/oathkeeper/docs/configure-deploy/'}
          iconRight={ArrowRight}
        >
          Get started
        </Button>
      ),
      features: [
        {
          title: 'Identity and Access Proxy',
          description: (
            <>
              Authorize HTTP requests to your server based on sets of Access
              Rules.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Zero Trust Architecture',
          description: (
            <>
              Apply Zero Trust / BeyondCorp security in your tech stack. Ory
              Oathkeeper enables secure access for all users (e.g. employees,
              partners, customers).
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Carefree Integration',
          description: (
            <>
              Deploy alongside your existing API Gateways. Ory Oathkeeper plugs
              into Ambassador, Envoy, AWS API Gateway, Nginx and many more.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Enrich Data',
          description: (
            <>
              Accumulate data from multiple sources and parse it into custom
              headers: X-User-ID, JSON Web Tokens and more.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Next Generation Oathkeeper',
          description: (
            <>
              <em>Coming soon:</em> The next generation of Ory Oathkeeper. Learn
              more and submit feedback on{' '}
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/oathkeeper/issues/441'}
              >
                GitHub
              </Button>
              .
            </>
          ),
          icon: PlusCircle
        }
      ]
    }
  ]
}
