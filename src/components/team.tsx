import React from 'react'
import cn from 'classnames'
import styles from './team.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Profile, { SocialNetworks } from './profile'
import Container from './freestanding/containers/container'
import Grid from './freestanding/containers/grid'
import { pb32 } from './freestanding/utils/padding.module.css'

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      aeneas: file(relativePath: { eq: "team/aeneas.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thomas: file(relativePath: { eq: "team/thomas.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      patrik: file(relativePath: { eq: "team/patrik.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      john: file(relativePath: { eq: "team/john.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vincent: file(relativePath: { eq: "team/vincent.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      andreas: file(relativePath: { eq: "team/andreas.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lee: file(relativePath: { eq: "team/lee.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      piotr: file(relativePath: { eq: "team/piotr.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jakub: file(relativePath: { eq: "team/jakub.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alano: file(relativePath: { eq: "team/alano.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={cn(styles.team)}>
      <Container fluid={true} alignItems={'start'}>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <h1 className={cn('font-h2', pb32)}>About Us</h1>
          <div className={cn(styles.profiles)}>
            <Profile
              name="Aeneas Rekkas"
              title="Engineering"
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
              img={data.aeneas.childImageSharp.fluid}
            />
            <Profile
              name="Thomas Aidan Curran"
              title="Operations"
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
              img={data.thomas.childImageSharp.fluid}
            />
            <Profile
              name="Patrik Neu"
              title="Engineering"
              social={[
                {
                  network: SocialNetworks.github,
                  href: 'https://github.com/zepatrik'
                }
              ]}
              img={data.patrik.childImageSharp.fluid}
            />
            <Profile
              name="John Curran"
              title="Design"
              social={[
                {
                  network: SocialNetworks.github,
                  href: 'https://github.com/jgcurran'
                }
              ]}
              img={data.john.childImageSharp.fluid}
            />
            <Profile
              name="Vincent Kraus"
              title="Developer Relations"
              social={[
                {
                  network: SocialNetworks.github,
                  href: 'https://github.com/vinckr'
                }
              ]}
              img={data.vincent.childImageSharp.fluid}
            />
            <Profile
              name="Andreas Bucksteeg"
              title="Engineering"
              social={[
                {
                  network: SocialNetworks.github,
                  href: 'https://github.com/tricky42'
                }
              ]}
              img={data.andreas.childImageSharp.fluid}
            />
            <Profile
              name="Lee Atchison"
              title="Architecture"
              social={[
                {
                  network: SocialNetworks.linkedin,
                  href: 'https://www.linkedin.com/in/leeatchison'
                }
              ]}
              img={data.lee.childImageSharp.fluid}
            />
            <Profile
              name="Piotr Mścichowski"
              title="Engineering"
              social={[
                {
                  network: SocialNetworks.github,
                  href: 'https://github.com/piotrmsc'
                }
              ]}
              img={data.piotr.childImageSharp.fluid}
            />
            <Profile
              name="Jakub Blasczyk"
              title="Engineering"
              social={[
                {
                  network: SocialNetworks.github,
                  href: 'https://github.com/demonsthere'
                }
              ]}
              img={data.jakub.childImageSharp.fluid}
            />
            <Profile
              name="Alano Terblanche"
              title="Engineering"
              social={[
                {
                  network: SocialNetworks.github,
                  href: 'https://github.com/benehiko'
                }
              ]}
              img={data.alano.childImageSharp.fluid}
            />
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default Team
