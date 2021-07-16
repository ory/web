import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import { SocialNetworks } from './team'

export const teamMembers = {
  title: 'Team',
  text: (
    <>
      We embrace and practice open source software development. We base our work
      on existing and emerging open cloud standards. As developers, we will
      continue to advance our level of engineering and product design to help
      other developers succeed.
    </>
  ),
  team: [
    {
      name: 'Aeneas Rekkas',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/aeneasr'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/aeneasr'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Aeneas Rekkas"
          src="../../../images/team/aeneas.png"
        />
      )
    },
    {
      name: 'Thomas Aidan Curran',
      position: 'Product',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/tacurran'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/thomasaidancurran/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Thomas Aidan Curran"
          src="../../../images/team/thomas.png"
        />
      )
    },
    {
      name: 'Patrik Neu',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/zepatrik'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Patrik Neu"
          src="../../../images/team/patrik.png"
        />
      )
    },
    {
      name: 'John Curran',
      position: 'Design',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/jfcurran'
        },
        {
          network: SocialNetworks.instagram,
          href: 'https://www.instagram.com/6099x/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="John Curran"
          src="../../../images/team/john.png"
        />
      )
    },
    {
      name: 'Vincent Kraus',
      position: 'Developer Relations',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/vinckr'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Vincent Kraus"
          src="../../../images/team/vincent.png"
        />
      )
    },
    {
      name: 'Andreas Bucksteeg',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/tricky42'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Andreas Bucksteeg"
          src="../../../images/team/andreas.png"
        />
      )
    },
    {
      name: 'Piotr Mścichowski',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/piotrmsc'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Piotr Mścichowski"
          src="../../../images/team/piotr.png"
        />
      )
    },
    {
      name: 'Jakub Blaszczyk',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/Demonsthere'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Jakub Blaszczyk"
          src="../../../images/team/jakub.png"
        />
      )
    },
    {
      name: 'Alano Terblanche',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/Benehiko'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Alano Terblanche"
          src="../../../images/team/alano.png"
        />
      )
    }
  ]
}

export const teamCollaborators = {
  title: 'Collaborators',
  text: (
    <>
      We believe in open source and creative collaboration as it leads to more
      security, increased quality and better software. Open source is an artisan
      creation model that shapes an entire generation of applications in the
      cloud.
    </>
  ),
  team: [
    {
      name: 'Markus Schmelzer',
      position: 'Customer Relations',
      social: [
        {
          network: SocialNetworks.web,
          href: 'https://www.paw-systems.com/?lang=en'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Markus Schmelzer"
          src="../../../images/team/markus.png"
        />
      )
    },
    {
      name: 'Uwe Richter',
      position: 'Customer Relations',
      social: [
        {
          network: SocialNetworks.web,
          href: 'https://www.paw-systems.com/?lang=en'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Uwe Richter"
          src="../../../images/team/uwe.png"
        />
      )
    },
    {
      name: 'Pascal Morgan',
      position: 'Tech Communication',
      social: [
        {
          network: SocialNetworks.linkedin,
          href: 'https://de.linkedin.com/in/pascalmorgan'
        },
        {
          network: SocialNetworks.web,
          href: 'https://www.linkedin.com/in/pascalmorgan'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Pascal Morgan"
          src="../../../images/team/pascal.png"
        />
      )
    },
    {
      name: 'Lee Atchison',
      position: 'Architecture',
      social: [
        {
          network: SocialNetworks.web,
          href: 'https://leeatchison.com/'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/leeatchison'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Lee Atchison"
          src="../../../images/team/lee.png"
        />
      )
    }
  ]
}

export const teamCommunity = {
  title: 'Our Community',
  text: (
    <>
      Ory is a community of collaborators, friends, and makers of wonderful
      software. The Ory Community works together to create useful products. We
      thank everyone involved - submitting new ideas, sending bug reports,
      writing feature requests, patching code, and sponsoring our work.
    </>
  ),
  img: (
    <img
      loading="lazy"
      alt="The Ory Community"
      className="responsive"
      src="https://opencollective.com/ory/contributors.svg?avatarHeight=24&width=540&button=false"
    />
  )
}
