import React from 'react'
import {
  pb4,
  pb24,
  pl8,
  pl24
} from '../../freestanding/utils/padding.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import Button from '../../freestanding/button/button'
import IconWrapper from '../../../components/freestanding/icon/icon-wrapper'


export interface Features {
  title: string
  description: React.ReactElement
  icon: React.ReactElement
}

interface PropType {
  className?: string
  features: Array<Features>
}

const CircleThreePlus = (
  <IconWrapper color={'base-white'} icon={'CirclesThreePlus'} size={'24'} />
)
const CheckCircle = (
  <IconWrapper
    icon={'CheckCircleBold'}
    size={'16'}
    color={'success-primary'}
  />
)
const ArrowRight = (
  <IconWrapper color={'themed-primary'} icon={'ArrowRight'} size={'16'} />
)
const MapTriFold = (
  <IconWrapper color={'base-white'} icon={'MapTrifold'} size={'24'} />
)
const Flag = (
  <IconWrapper icon={'FlagBold'} size={'16'} color={'themed-primary'} />
)

export const featureListPricing  = {
  features : [
    {
      icon: CircleThreePlus,
      title: 'Features',
      description: (
        <>
        Sign up now and instantly access these features. All features except the Ory CLI and user interfaces are included when self hosting.
        </>
      ),
      button: (
        <Button
        style={'text'} to={'/docs'} iconRight={ArrowRight} />
      ),
      features: [
        {
          title: 'Ory CLI',
          description: (
            <>
            Control the Ory platform from the command line with an intuitive and accessible syntax.
            </>
          ),
          icon: CheckCircle
          },
          {
            title: 'Login and Sign up',
            description: (
            <>
            The basics of IAM: Login and register users fast and without complicated flows and store credentials securely.
            </>
          ),
          icon: CheckCircle
          },
          {
            title: 'Account Management',
            description: (
            <>
            Manage your users, enable email verification, let users pick new passwords and change their profile data.
            </>
          ),
          icon: CheckCircle
          },
          {
            title: 'User Interface and Dashboards',
            description: (
            <>
            Display stats in a smooth and responsive dashboard. We also offer presets for all common user interfaces.
            </>
          ),
            icon: CheckCircle
          },
          {
            title: 'Identity Model',
            description: (
            <>
            A flexible identity model adapts to your business needs. You can use one of our provided presets or cook up your own identity model.
            </>
          ),
            icon: CheckCircle
          },
          {
            title: 'Social Logins',
            description: (
            <>
            Simplify your users experience and let them use their existing accounts at Google, GitHub, Apple etc. to sign up and log in. All OIDC providers are supported.
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
        We are currently working on bringing these features into the Ory Cloud.
        </>
      ),
      button: (
        <Button
          style={'text'}
          to={'/docs/ecosystem/roadmap'}
          iconRight={ArrowRight}  />        
      ),
      features: [
        {
          icon: Flag,
          title: 'Advanced Identity and Access Management',
          description: (
            <>
            Multifactor authentication, including passwordless, WebAuthn, TOTP; Ability to use your own UI and Branding as well as webhooks to define and trigger actions.
            </>
          ),
        },
        {
          icon: Flag,
          title: 'Permissions and Roles',
          description: (
            <>
            From a member of the marketing team, to an admin in your support staff— give everyone the right level of access to sensitive data.
            </>
          ),         
        },
        {
          icon: Flag,
          title: 'Oauth2 and OpenID Connect',
          description: (
            <>            
            Become an OAuth2.0 provider, enable complex use cases and machine2machine interactions, interface your business with third party systems.
            </>
          ),
        },
        {
          icon: Flag,
          title: 'Integrations',
          description: (
            <>            
            Payments integration powered by Stripe as well as Email integration to send out emails in bulk or individually.
            </>
          ),
        }
      ]
    }
  ]
}

export const featureListKratos = {
features : [
  {
    icon: CircleThreePlus,
    title: <>Ory Kratos Features</>,
    description: (
      <>
      Most software applications need to deal with user and identity management. Ory Kratos serves common flows so you dont need to rewrite everything yourself.
      </>
    ),
    button: (
      <Button
      style={'text'} to={'/docs'} iconRight={ArrowRight} />
    ),
    features: [
      {
        title: <>Self Service Login and Registration</>,
        description: (
          <>
          Enable users to create and sign in to accounts using username/email and password combinations, Social Login, passwordless flows and more.
          </>
        ),
        icon: CheckCircle
        },
        {
          title: <>Admin Management</>,
          description: (
          <>
          Manage your userbase and get, create, update or delete identities and their data.
          </>
        ),
        icon: CheckCircle
        },
        {
          title: <>Headless APIs and Custom Data Models</>,
          description: (
          <>
          Use customizable identity models (add fields like name, address, favourite pet ect..) and create your own user interfaces for flows in your style and branding.
          </>
        ),
        icon: CheckCircle
        },
        {
          title: <>Profile and Account Management</>,
          description: (
          <>
          Let your users use secure flows to update passwords, personal details, email addresses, linked social profiles and more.
          </>
        ),
          icon: CheckCircle
        },
        {
          title: <>Social Logins</>,
          description: (
          <>
          Simplify UX and let them use their existing accounts at Google, GitHub, etc. to sign up and log in. All OIDC providers are supported.
          </>
        ),
          icon: CheckCircle
        },
        {
          title: <>Account Verification and Recovery</>,
          description: (
          <>
          Verify an identity by checking email, phone number, or physical address of that user. Provide recovery of accounts using "Forgot Password" flows, security codes, ect.
          </>
        ),
          icon: CheckCircle
        }
      ]
    }
  ]
}

export const featureListHydra  = {
  features : [
    {
      icon: CircleThreePlus,
      title: <>Ory Hydra Features</>,
      description: (
        <>
        Issue OAuth 2.0 Access, Refresh and ID tokens in a secure and efficient manner. Ory Hydra secures critical environments for billions of users.
        </>
      ),
      button: (
        <Button
        style={'text'} to={'/docs'} iconRight={ArrowRight} />
      ),
      features: [
        {
          title: <>Flexible User Management</>,
          description: (
            <>
            Implement the full Open Authorization 2.0 standard in your technology stack. Ory Hydra integrates with any open source (e.g. Ory Kratos) or proprietary IAM system.
            </>
          ),
          icon: CheckCircle
          },
          {
            title: <>OpenID Certified®</>,
            description: (
            <>
            Rely on an OpenID Certified® OIDC Provider. Ory Hydra implements all flows specified by the IETF and OpenID Foundation.
            </>
          ),
          icon: CheckCircle
          },
          {
            title: <>Headless Interface and APIs</>,
            description: (
            <>
            Use your own branding and user interfaces for all OAuth2.0 and OIDC flows. Ory Hydra lets you use your styles and flows powered by a REST API and intuitive CLI.
            </>
          ),
          icon: CheckCircle
          },
          {
            title: <>Compatible with MITreid</>,
            description: (
            <>
            Migrate from MITREid Connect to Ory Hydra. Migration documentation is provided.
            </>
          ),
            icon: CheckCircle
          },
          {
            title: <>Cryptographic Key Storage</>,
            description: (
            <>
            Store cryptographic keys for e.g. signing JWTs securely and manage OAuth 2.0 clients directly from the CLI.
            </>
          ),
            icon: CheckCircle
          },
          {
            title: <>Security First and High Performance</>,
            description: (
            <>
            Sleep easy, knowing that Ory Hydra is secured against attack vectors and scales as required. Ory Hydra serves tokens to millions of users weekly and just works.
            </>
          ),
            icon: CheckCircle
          }
        ]
      }
    ]
}