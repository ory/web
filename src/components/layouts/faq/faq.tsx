import React, { useState } from 'react'
import { faq, faqHeading, faqHighlight, faqHeadingIcon } from './faq.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import {
  pb16,
  pb32,
  pb4,
  pb48,
  pl8
} from '../../freestanding/utils/padding.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import MoleculeSeparator from '../../freestanding/molecule/molecule-separator'
import IconWrapper from '../../freestanding/icon/icon-wrapper'

export interface FaqContent {
  question: string
  answer: React.ReactElement
}

interface PropTypes {
  title: React.ReactElement
  description: React.ReactElement
  content: Array<FaqContent>
}

const Faq = ({ title, description, content }: PropTypes) => {
  const [expanded, setExpanded] = useState<Array<string>>(['0'])

  const Minus = (
    <IconWrapper
      color={'base-white'}
      icon={'Minus'}
      size={'32'}
      className={cn(pl8, faqHeadingIcon)}
    />
  )
  const Plus = (
    <IconWrapper
      color={'base-white'}
      icon={'Plus'}
      size={'32'}
      className={cn(pl8, faqHeadingIcon)}
    />
  )

  return (
    <div className={cn(faq)}>
      <Container fluid={true} alignItems={['start']}>
        <Grid lg={4} md={3} sm={12} xs={12} className={pb48}>
          <ContentText>
            <h3 className={cn('font-h3', 'light', pb32)}>{title}</h3>
            <p className={cn('font-p', 'light')}>{description}</p>
          </ContentText>
        </Grid>
        <Grid lg={6} md={8} sm={12} xs={12}>
          <Accordion
            allowMultipleExpanded={false}
            allowZeroExpanded={true}
            preExpanded={['0']}
            onChange={(args: Array<string>) => {
              setExpanded(args)
            }}
          >
            {content.map(({ answer, question }, index) => (
              <AccordionItem
                key={index}
                uuid={String(index)}
                className={cn(pb48)}
              >
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Container
                      alignItems={'start'}
                      className={cn(faqHighlight, pb16)}
                    >
                      <h3 className={cn('font-h3', faqHeading)}>{question}</h3>
                      {expanded.includes(String(index)) ? Minus : Plus}
                    </Container>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className={cn('font-p', 'light', 'mute-85', pb16)}>
                    {answer}
                  </p>
                </AccordionItemPanel>
                <MoleculeSeparator style={'horizontal'} />
              </AccordionItem>
            ))}
          </Accordion>
        </Grid>
      </Container>
    </div>
  )
}

export default Faq
