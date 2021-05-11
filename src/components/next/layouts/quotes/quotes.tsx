import React from 'react'
import * as styles from './quotes.module.css'

import cn from 'classnames'
import QuotesContent, { Quote } from './content/quotes-content'
import sainsburys from '../../../../images/adopters/sainsburys.svg'
import Container from '../../freestanding/containers/container'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Grid from '../../freestanding/containers/grid'

const quotes: Array<Quote> = [
  {
    text: (
      <div className={cn('font-p-lg')}>
        At Sainsbury’s Tech we use Ory tools to power our identity platform. We
        needed a feature complete OAuth provider which can operate securely at
        scale and Ory Hydra fit the bill perfectly.
        <br />
        <br />
        <b>Paul Harman</b>
        <br />
        Engineering Manager, Sainsbury's Tech
      </div>
    ),
    companyLogo: <img src={sainsburys} />,
    background: ''
  },
  {
    text: (
      <div className={cn('font-p-lg')}>
        At Mikes hamburger stand
        <br />
        <br />
        <b>Paul Harman</b>
        <br />
        Engineering Manager, Sainsbury's Tech
      </div>
    ),
    companyLogo: <img src={sainsburys} />,
    background: ''
  }
]
const Quotes = () => (
  <div className={cn(styles.quotes)}>
    <Container fluid={true} justify={'center'} smHidden={true} xsHidden={true}>
      <Grid lg={8} md={8}>
        <Carousel
          className={styles.quotesContent}
          axis={'horizontal'}
          autoPlay={true}
          interval={2000}
          emulateTouch={true}
          swipeable={true}
          showStatus={false}
          showIndicators={false}
        >
          {quotes.map((quote, index) => {
            return <QuotesContent quoteContent={quote} key={index} />
          })}
        </Carousel>
      </Grid>
    </Container>
    <Container fluid={true} lgHidden={true} mdHidden={true}>
      <Grid sm={12} xs={12}>
        {quotes.map((quote, index) => {
          return (
            <>
              <hr />
              <QuotesContent quoteContent={quote} key={index} />
            </>
          )
        })}
      </Grid>
    </Container>
  </div>
)

export default Quotes
