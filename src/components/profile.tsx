import React from 'react'
import Img from 'gatsby-image'
import cn from 'classnames'
import * as styles from './profile.module.css'
import Button from './freestanding/button/button'
import {
  pb16,
  pb32,
  pb8,
  pr16,
  pr8,
  pt8
} from './freestanding/utils/padding.module.css'
import IconWrapper from './freestanding/icon/icon-wrapper'

interface PropTypes {
  name: string
  title: string
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
        <IconWrapper
          color={'base-grey-400'}
          icon={'GithubLogoDuotone'}
          size={'16'}
        />
      )
      alt = 'GitHub'
      break
    case SocialNetworks.linkedin:
      Icon = (
        <IconWrapper
          color={'base-grey-400'}
          icon={'LinkedinLogoDuotone'}
          size={'16'}
        />
      )
      alt = 'Linkedin'
      break
    case SocialNetworks.twitter:
      Icon = (
        <IconWrapper
          color={'base-grey-400'}
          icon={'TwitterLogoDuotone'}
          size={'16'}
        />
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

const Profile = ({ name, title, img, social }: PropTypes) => (
  <div className={cn(styles.profile, pb32)}>
    <div className={cn(pr16, styles.profileImg)}>
      <Img fluid={img} alt={name} />
    </div>
    <div>
      <h2 className={cn('font-h6', pt8)}>{name}</h2>
      <p className={cn('font-p-sm', 'mute-85', pb8)}>{title}</p>
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
