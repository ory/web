import cn from 'classnames'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import SmallText from '../simple-text/small-text'

import {
  pb16,
  pb32,
  pb64,
  pb8,
  pr8
} from '../../freestanding/utils/padding.module.css'
import * as styles from './team.module.css'

interface PropTypes {
  title: string
  text: React.ReactElement
  team: Array<Profiles>
}

interface Profiles {
  name: string
  position: string
  img: any
  social: SocialLinks[]
}

export enum SocialNetworks {
  twitter,
  github,
  linkedin,
  instagram,
  web
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
    case SocialNetworks.instagram:
      Icon = (
        <i className="ph-instagram-logo ph-instagram-logo-duotone base-grey-400 size24" />
      )
      alt = 'Instagram'
      break
    case SocialNetworks.web:
      Icon = <i className="ph-globe ph-globe-duotone base-grey-400 size24" />
      alt = 'Website'
      break
  }

  return {
    href,
    Icon,
    alt
  }
}

const Profile = ({ name, position, img, social }: Profiles) => (
  <Container
    fluid={true}
    alignItems={'start'}
    justify={'start'}
    className={cn(styles.profile)}
  >
    <Grid lg={12} md={12} sm={12} xs={12} className={cn('font-h5', pb16)}>
      {img}
    </Grid>
    <Grid lg={12} md={12} sm={12} xs={12} className={cn(styles.profileInfo)}>
      <div>
        <h3 className={cn('font-h5')}>{name}</h3>
        <p className={cn('font-p-sm', 'mute-85', pb8)}>{position}</p>
      </div>
      <div>
        <>
          {social.map(socialWithIcon).map(({ Icon, href }) => (
            <Button
              key={href}
              to={href}
              style={'none'}
              openInNewWindow={true}
              className={pr8}
            >
              {Icon}
            </Button>
          ))}
        </>
      </div>
    </Grid>
  </Container>
)

const Team = ({ title, text, team }: PropTypes) => (
  <div className={cn(styles.team)}>
    <Container fluid={true} justify={'center'} alignItems={'start'}>
      <Grid lg={8} md={10} sm={12} xs={12}>
        <SmallText
          small={true}
          title={`${title}`}
          text={<>{text}</>}
          className={pb64}
        />
        <Container alignItems={'start'} justify={'start'}>
          {team.map((profile, index) => (
            <Grid
              lg={4}
              md={4}
              sm={6}
              xs={6}
              key={index}
              className={cn(styles.teamContent)}
            >
              <Profile {...profile} />
            </Grid>
          ))}
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Team
