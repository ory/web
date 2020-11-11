import React from 'react'
import Img from 'gatsby-image'
import cn from 'classnames'
import Linkedin from '../images/icon/linkedin.svg'
import Twitter from '../images/icon/twitter.svg'
import Github from '../images/icon/GitHub.svg'
import * as styles from './profile.module.css'
import { Link } from 'gatsby'

interface PropTypes {
  name: string
  img: any
  social: SocialLinks[]
}

export enum SocialNetworks {
  twitter,
  github,
  linkedin,
}

type SocialLinks = {
  network: SocialNetworks
  href: string
}

const socialWithIcon = ({ href, network }: SocialLinks) => {
  let icon
  let alt
  switch (network) {
    case SocialNetworks.github:
      icon = Github
      alt = 'GitHub'
      break
    case SocialNetworks.linkedin:
      icon = Linkedin
      alt = 'Linkedin'
      break
    case SocialNetworks.twitter:
      icon = Twitter
      alt = 'Twitter'
      break
  }

  return {
    href,
    icon,
    alt,
  }
}

const Profile = ({ name, img, social }: PropTypes) => (
  <div className={styles.profile}>
    <div>
      <Img fixed={img} alt={name} />
    </div>
    <div className={cn(styles.space)}>
      <h4>{name}</h4>
      <>
        {social.map(socialWithIcon).map(({ icon, href, alt }) => (
          <a href={href} key={href}>
            <img className={cn(styles.social)} src={icon} alt={alt} />
          </a>
        ))}
      </>
    </div>
  </div>
)

export default Profile
