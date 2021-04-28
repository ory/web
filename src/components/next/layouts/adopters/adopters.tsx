import React from 'react'
import * as styles from './adopters.module.css'

import cn from 'classnames'
import blues from '../../../../images/adopters/blues.svg'
import thoughtworks from '../../../../images/adopters/thoughtworks.svg'
import kyma from '../../../../images/adopters/kyma.svg'
import raspberrypi from '../../../../images/adopters/raspberrypi.svg'
import segment from '../../../../images/adopters/segment.svg'
import sainsburys from '../../../../images/adopters/sainsburys.svg'
import hootsuite from '../../../../images/adopters/hootsuite.svg'
import threerein from '../../../../images/adopters/threerein.svg'
import AdoptersLogo from './adopters-logo'

const adopters = [
  {
    title: 'BluesWireless',
    image: blues,
    url: 'https://blues.io/',
    pos: 1
  },
  {
    title: 'ThoughtWorks',
    image: thoughtworks,
    url: 'https://www.thoughtworks.com',
    pos: 8
  },
  {
    title: 'Segment',
    image: segment,
    url: 'https://segment.com/',
    pos: 5
  },
  {
    title: 'Raspberry Pi',
    image: raspberrypi,
    url: 'https://www.raspberrypi.org/',
    pos: 3
  },
  {
    title: `Sainsbury's`,
    image: sainsburys,
    url: 'https://www.sainsburys.co.uk/',
    pos: 2
  },
  {
    title: 'Hootsuite',
    image: hootsuite,
    url: 'https://hootsuite.com',
    pos: 7
  },
  {
    title: 'Kyma Project',
    image: kyma,
    url: 'https://kyma-project.io/',
    pos: 4
  },
  {
    title: '3REIN',
    image: threerein,
    url: 'https://3rein.com/',
    pos: 6
  }
]

const Adopters = () => (
  <div className={cn(styles.adopters)}>
    <div className="container-fluid--next">
      <div className={cn(styles.container)}>
        {adopters
          .sort((a, b) => a.pos - b.pos)
          .map((adopter) => {
            return (
              <AdoptersLogo
                key={adopter.title}
                className={cn('col-lg-2--next col-md-2--next col-sm-4--next')}
              >
                <a href={adopter.url} key={adopter.title}>
                  <img loading="lazy" src={adopter.image} alt={adopter.title} />
                </a>
              </AdoptersLogo>
            )
          })}
      </div>
    </div>
  </div>
)

export default Adopters
