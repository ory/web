import React from 'react'
import cn from 'classnames'
import styles from './team.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Profile, { SocialNetworks } from './profile'
import Container from './freestanding/containers/container'
import Grid from './freestanding/containers/grid'
import { pb32, pb48 } from './freestanding/utils/padding.module.css'
import ContentText from './freestanding/content/content-text'
import Molecule from './freestanding/molecule/molecule'

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      aeneas: file(relativePath: { eq: "aeneas.png" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thomas: file(relativePath: { eq: "thomas.png" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={cn(styles.team)}>
      <Container fluid={true} alignItems={'center'}>
        <Grid lg={4} md={4} sm={12} xs={12} className={cn(pb32)}>
          <ContentText>
            <Molecule className={cn(pb48)}>
              <h1 className={cn('font-h2', pb32)}>About Us</h1>
              <p className={cn('font-p', 'mute-85')}>
                Our mission is to provide a common identity and access
                infrastructure that manages how IAM data is used in cloud
                applications. We deliver the data and associated analytics to
                members in the network in accordance with data privacy and usage
                conventions. We embrace and practice Open Source Software
                development. We base our work on existing and emerging open
                cloud standards. As developers, we will continue to push the
                boundries in engineering and design to help other developers
                succeed.
              </p>
            </Molecule>
          </ContentText>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12}>
          <Profile
            name="Aeneas Rekkas"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/aeneasr'
              },
              {
                network: SocialNetworks.linkedin,
                href: 'https://www.linkedin.com/in/aeneasr'
              }
            ]}
            img={data.aeneas.childImageSharp.fixed}
          />
          <Profile
            name="Thomas Aidan Curran"
            social={[
              {
                network: SocialNetworks.github,
                href: 'https://github.com/tacurran'
              },
              {
                network: SocialNetworks.linkedin,
                href: 'https://www.linkedin.com/in/thomasaidancurran/'
              }
            ]}
            img={data.thomas.childImageSharp.fixed}
          />
        </Grid>
      </Container>
    </div>
  )
}

export default Team
