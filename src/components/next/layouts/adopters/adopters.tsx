import React from 'react'
import * as styles from './adopters.module.css'
import cn from 'classnames'
import AdoptersLogo from './adopters-logo'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import Button from '../../freestanding/button/button'

interface Adopter {
  title: string
  image: string
  url: string
  pos: number
}

const chunks = (arrObj: Array<Adopter>, size: number) => {
  arrObj.sort((a, b) => a.pos - b.pos)
  return Array.from(new Array(Math.ceil(arrObj.length / size)), (_, i) =>
    arrObj.slice(i * size, i * size + size)
  )
}

interface PropTypes {
  adopters: Array<Adopter>
}

const Adopters = ({ adopters }: PropTypes) => (
  <div className={cn(styles.adopters)}>
    <Container fluid={true} justify={'center'}>
      {chunks(adopters, 4).map((chunk, index) => {
        return (
          <Container key={index}>
            {chunk.map((adopter) => {
              return (
                <Grid lg={3} md={5} sm={4} xs={12} key={adopter.title}>
                  <AdoptersLogo>
                    <Button
                      to={adopter.url}
                      style={'none'}
                      openInNewWindow={true}
                    >
                      <img
                        loading="lazy"
                        src={adopter.image}
                        alt={adopter.title}
                      />
                    </Button>
                    <a href={adopter.url} key={adopter.title}></a>
                  </AdoptersLogo>
                </Grid>
              )
            })}
          </Container>
        )
      })}
    </Container>
  </div>
)

export default Adopters
