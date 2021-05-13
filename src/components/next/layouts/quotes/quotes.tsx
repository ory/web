import React from 'react'
import cn from 'classnames'
import ContentText from '../../freestanding/content/content-text'
import {quote, quoteBlock} from './quote.module.css'
import {pt32, pt4, pt64} from '../../freestanding/utils/padding.module.css'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
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
}

const QuoteBlock = ({logo, description, person, jobTitle}: Quote) => (
  <Container alignItems={'start'} justify={'start'}>
    <ContentText className={cn(quoteBlock)}>
      {logo}
      <div className={cn('font-h4', pt64)}>{description}</div>
      <ColourWrapper text={'base-grey-600'}><div className={cn('font-h5', pt32)}>{person}</div></ColourWrapper>
      <ColourWrapper text={'base-grey-400'}><div className={cn('font-p-lg', pt4)}>{jobTitle}</div></ColourWrapper>
    </ContentText>
  </Container>
)

const Quotes = ({quotes, title}: PropTypes) => (
  <div className={cn(quote)}>
    <Container fluid={true} justify={'space-between'}>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <div className={cn('font-h2')}>
          {title}
        </div>
      </Grid>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <Carousel centerMode={false} autoPlay={true} interval={4000} swipeable={false} transitionTime={500} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} infiniteLoop={true}>
          {quotes.map((quote) => (
            <QuoteBlock logo={quote.logo} description={quote.description} person={quote.person}
                        jobTitle={quote.jobTitle}/>
          ))}
        </Carousel>
      </Grid>
    </Container>
    
  </div>
)

export default Quotes
