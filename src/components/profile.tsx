import React from 'react'
import Img from 'gatsby-image'
import cn from 'classnames'
import {
  IconProps,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo
} from 'phosphor-react'
import * as styles from './profile.module.css'
import Button from './freestanding/button/button'
import { pb16, pb8, pr16, pr8 } from './freestanding/utils/padding.module.css'

interface PropTypes {
  name: string
  img: any
  social: SocialLinks[]
}

export enum SocialNetworks {
  twitter,
  github,
  linkedin
}

type SocialLinks = {
  network: SocialNetworks
  href: string
}

type resolvedSocial = {
  Icon: React.ElementType<IconProps>
  href: string
  alt: string
}

const socialWithIcon = ({ href, network }: SocialLinks): resolvedSocial => {
  let Icon: resolvedSocial['Icon']
  let alt
  switch (network) {
    case SocialNetworks.github:
      Icon = GithubLogo
      alt = 'GitHub'
      break
    case SocialNetworks.linkedin:
      Icon = LinkedinLogo
      alt = 'Linkedin'
      break
    case SocialNetworks.twitter:
      Icon = TwitterLogo
      alt = 'Twitter'
      break
  }

  return {
    href,
    Icon,
    alt
  }
}

const Profile = ({ name, img, social }: PropTypes) => (
  <div className={cn(styles.profile, pb16)}>
    <div className={cn(pr16)}>
      <Img fixed={img} alt={name} />
    </div>
    <div>
      <h2 className={cn('font-h5', pb8)}>{name}</h2>
      <>
        {social.map(socialWithIcon).map(({ Icon, href }) => (
          <Button to={href} style={'none'} key={href} className={cn(pr8)}>
            <Icon size={24} weight={'duotone'} />
          </Button>
        ))}
      </>
    </div>
  </div>
)

export default Profile
