import React from 'react'
import cn from 'classnames'
import ContentText from '../../freestanding/content/content-text'
import { quote, quoteBlock, quoteImg } from './quote.module.css'
import { pb32, pb64 } from '../../freestanding/utils/padding.module.css'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

interface PropTypes {
  title: React.ReactElement
  quotes: Array<Quote>
}

export interface Quote {
  logo: React.ReactElement
  description: React.ReactElement
  person: string
  jobTitle: string
  className?: string
}

const QuoteBlock = ({
  className,
  logo,
  description,
  person,
  jobTitle
}: Quote) => (
  <ContentText className={cn(quoteBlock, className && className)}>
    <div className={cn(quoteImg, pb64)}>{logo}</div>
    <h4 className={cn('font-quote', pb32)}>{description}</h4>
    <h5 className={cn('font-h6', 'mute-60')}>{person}</h5>
    <p className={cn('font-p-sm', 'mute-40')}>{jobTitle}</p>
  </ContentText>
)

const Quotes = ({ quotes, title }: PropTypes) => (
  <>
    <Container fluid={true} className={cn(quote)}>
      <Grid lg={5} md={5} sm={12} xs={12} className={cn(pb32)}>
        <h3 className={cn('font-h3')}>{title}</h3>
      </Grid>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <Carousel
          centerMode={false}
          autoPlay={true}
          interval={10000}
          swipeable={false}
          transitionTime={500}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          useKeyboardArrows={false}
          stopOnHover={true}
        >
          {quotes.map((quote, index) => (
            <QuoteBlock
              logo={quote.logo}
              description={quote.description}
              person={quote.person}
              jobTitle={quote.jobTitle}
              key={index}
            />
          ))}
        </Carousel>
      </Grid>
    </Container>
  </>
)

export default Quotes
