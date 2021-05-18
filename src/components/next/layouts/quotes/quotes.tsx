import React from 'react'
import cn from 'classnames'
import ContentText from '../../freestanding/content/content-text'
import { quote, quoteBlock, quoteImg } from './quote.module.css'
import {
  pb32,
  pt32,
  pt4,
  pt64
} from '../../freestanding/utils/padding.module.css'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'

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
    <div className={cn(quoteImg)}>{logo}</div>
    <h4 className={cn('font-h4', pt64)}>{description}</h4>
    <ColourWrapper text={'base-grey-600'}>
      <h5 className={cn('font-h5', pt32)}>{person}</h5>
    </ColourWrapper>
    <ColourWrapper text={'base-grey-400'}>
      <p className={cn('font-p-lg', pt4)}>{jobTitle}</p>
    </ColourWrapper>
  </ContentText>
)

const Quotes = ({ quotes, title }: PropTypes) => (
  <div className={cn(quote)}>
    <Container fluid={true} justify={'start'} smHidden={true} xsHidden={true}>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <h3 className={cn('font-h3')}>{title}</h3>
      </Grid>
      <Grid lg={6} md={6}>
        <Carousel
          centerMode={false}
          autoPlay={true}
          interval={4000}
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
    <Container fluid={true} lgHidden={true} mdHidden={true}>
      <Grid lg={5} md={6} sm={12} xs={12}>
        <h3 className={cn('font-h3')}>{title}</h3>
      </Grid>
      <Grid lgHidden={true} mdHidden={true} sm={12} xs={12}>
        {quotes.map((quote, index) => (
          <div className={cn(pb32)} key={index}>
            <QuoteBlock
              logo={quote.logo}
              description={quote.description}
              person={quote.person}
              jobTitle={quote.jobTitle}
            />
          </div>
        ))}
      </Grid>
    </Container>
  </div>
)

export default Quotes
