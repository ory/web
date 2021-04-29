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
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

interface Adopter {
  title: string
  image: string
  url: string
  pos: number
}

const adopters: Array<Adopter> = [
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

const chunks = (arrObj: Array<Adopter>, size: number) => {
  arrObj.sort((a, b) => a.pos - b.pos)
  return Array.from(new Array(Math.ceil(arrObj.length / size)), (_, i) =>
    arrObj.slice(i * size, i * size + size)
  )
}

const Adopters = () => (
  <div className={cn(styles.adopters)}>
    {chunks(adopters, 4).map((chunk) => {
      return (
        <Container>
          {chunk.map((adopter) => {
            return (
              <AdoptersLogo key={adopter.title}>
                <Grid lg={3} md={2} sm={4} xs={4}>
                <a href={adopter.url} key={adopter.title}>
                  <img loading="lazy" src={adopter.image} alt={adopter.title} />
                </a>
                </Grid>
              </AdoptersLogo>
            )
          })}
        </Container>
      )
    })}
  </div>
)

export default Adopters
