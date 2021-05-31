// export const brandPrefix = process.env.GATSBY_DOMAIN === 'gethydra.sh' ? '' : 'ORY '
// export const brandPrefix = process.env.GATSBY_DOMAIN === 'gethydra.sh' ? '' : 'ORY '

import React from 'react'
import kratosAnimation from './images/kratos/kratos.svg'
import hydraAnimation from './images/hydra/hydra.svg'
import ketoAnimation from './images/keto/keto.svg'
import oathkeeperAnimation from './images/oathkeeper/oathkeeper.svg'
import {
  CirclesThreePlus,
  Code,
  Fingerprint,
  Key,
  LockOpen,
  ShieldWarning,
  UserGear,
  UserPlus
} from 'phosphor-react'
export const brandPrefix = 'Ory / '

export type Project = {
  id: 'hydra' | 'keto' | 'oathkeeper' | 'kratos'
  icon: React.ReactElement
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
    icon: <UserGear size={32} weight={'duotone'} />,
    title: 'Kratos',
    descriptiveTitle: 'User Management',
    description:
      'Cloud native user management system. Provision IDs, store user information, configure authentication methods and use a headless API.',
    path: '/kratos',
    links: {
      quickstart: 'https://www.ory.sh/docs/next/kratos/quickstart'
    },
    visual: kratosAnimation
  },
  {
    id: 'hydra',
    icon: <Fingerprint size={32} weight={'duotone'} />,
    title: 'Hydra',
    descriptiveTitle: 'OAuth 2.0 and OpenID Connect',
    description:
      'OAuth 2.0 and OpenID Certified® OpenID Connect server. Cloud native, security-first, headless API security for your infrastructure. ',
    path: '/hydra',
    links: {
      quickstart: 'https://www.ory.sh/hydra/docs/5min-tutorial'
    },
    visual: hydraAnimation
  },
  {
    id: 'oathkeeper',
    icon: <ShieldWarning size={32} weight={'duotone'} />,
    title: 'Oathkeeper',
    descriptiveTitle: 'Identity and Access Proxy',
    description:
      'Identity and Access Proxy (IAP). Authenticate, authorize and mutate any incoming traffic, using Zero Trust / BeyondCorp as open source.',
    path: '/oathkeeper',
    links: {
      quickstart: 'https://www.ory.sh/oathkeeper/docs/index'
    },
    visual: oathkeeperAnimation
  },
  {
    id: 'keto',
    icon: <Key size={32} weight={'duotone'} />,
    title: 'Keto',
    descriptiveTitle: 'Global access control',
    description:
      "Authorization Server inspired by Google's consistent, global Authorization System, providing granular access policies with RBAC, ABAC and ACL.",
    path: '/keto',
    links: {
      quickstart: 'https://www.ory.sh/keto/docs/configure-deploy'
    },
    visual: ketoAnimation
  }
]
