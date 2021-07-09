import cn from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from './freestanding/button/button'
import IconWrapper from './freestanding/icon/icon-wrapper'

import { pb16, pb8, pr16, pr8 } from './freestanding/utils/padding.module.css'
import * as styles from './profile.module.css'

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
  Icon: React.ReactElement
  href: string
  alt: string
}

const socialWithIcon = ({ href, network }: SocialLinks): resolvedSocial => {
  let Icon: resolvedSocial['Icon']
  let alt
  switch (network) {
    case SocialNetworks.github:
      Icon = (
        <i className="ph-github-logo ph-github-logo-duotone base-grey-400 size24" />
      )
      alt = 'GitHub'
      break
    case SocialNetworks.linkedin:
      Icon = (
        <i className="ph-linkedin-logo ph-linkedin-logo-duotone base-grey-400 size24" />
      )
      alt = 'Linkedin'
      break
    case SocialNetworks.twitter:
      Icon = (
        <i className="ph-twitter-logo ph-twitter-logo-duotone base-grey-400 size24" />
      )
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
      <GatsbyImage image={img} alt={name} />
    </div>
    <div>
      <h2 className={cn('font-h5', pb8)}>{name}</h2>
      <>
        {social.map(socialWithIcon).map(({ Icon, href }) => (
          <Button to={href} style={'none'} key={href} className={cn(pr8)}>
            {Icon}
          </Button>
        ))}
      </>
    </div>
  </div>
)

export default Profile
