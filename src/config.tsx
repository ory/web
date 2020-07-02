// export const brandPrefix = process.env.GATSBY_DOMAIN === 'gethydra.sh' ? '' : 'ORY '
// export const brandPrefix = process.env.GATSBY_DOMAIN === 'gethydra.sh' ? '' : 'ORY '

import React from 'react'
import kratosAnimation from './images/kratos/kratos.svg'
import hydraAnimation from './images/hydra/hydra.svg'
import ketoAnimation from './images/keto/keto.svg'
import oathkeeperAnimation from './images/oathkeeper/oathkeeper.svg'
export const brandPrefix = 'ORY / '



export type Project = {
  id: 'hydra' | 'keto' | 'oathkeeper' | 'kratos'
  title: string
  descriptiveTitle: string
  description: string
  path: string
  links: {
    quickstart: string
  }
  visual: string
}

export const projects: Project[] = [
  {
    id: 'kratos',
    title: `${brandPrefix}Kratos`,
    descriptiveTitle: 'User Management',
    description:
      'Cloud native user management system. Provision IDs, store user information, configure authentication methods and use a headless API.',
    path: '/kratos',
    links: {
      quickstart: 'https://www.ory.sh/docs/next/kratos/quickstart',
    },
    visual: kratosAnimation,
  },
  {
    id: 'hydra',
    title: `${brandPrefix}Hydra`,
    descriptiveTitle:'OAuth 2.0 and  OpenID Connect',
    description: 'OAuth 2.0 and OpenID Certified® OpenID Connect server. Secure access to your applications and APIs.',
    path: '/hydra',
    links: {
      quickstart: 'https://www.ory.sh/hydra/docs/5min-tutorial',
    },
    visual: hydraAnimation,
  },
  {
    id: 'oathkeeper',
    title: `${brandPrefix}Oathkeeper`,
    descriptiveTitle:
      'Identity and Access Proxy',
    description:
      'Identity and Access Proxy (IAP). Authenticate and authorize all traffic, using Zero Trust / BeyondCorp as open source.',
    path: '/oathkeeper',
    links: {
      quickstart: 'https://www.ory.sh/oathkeeper/docs/index',
    },
    visual: oathkeeperAnimation,
  },
  {
    id: 'keto',
    title: `${brandPrefix}Keto`,
    descriptiveTitle: 'Permission and Role Management',
    description:
      'Access Control and Permission Management Server. Use best practices (RBAC, ABAC, ACL, ...) to secure your application.',
    path: '/keto',
    links: {
      quickstart: 'https://www.ory.sh/keto/docs/configure-deploy',
    },
    visual: ketoAnimation,
  },
]
