import React, { useState } from 'react'
import { faq, faqHeading } from './faq.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import { pb32, pb48, pl8 } from '../../freestanding/utils/padding.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import MoleculeSeparator from '../../freestanding/molecule/molecule-separator'
import { Minus, Plus } from 'phosphor-react'

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

  return (
    <div className={cn(faq)}>
      <Container fluid={true} alignItems={'start'}>
        <Grid lg={5} md={5} sm={12} xs={12}>
          <ContentText>
            <div className={cn('font-h3', pb32)}>{title}</div>
            <div className={cn('font-p')}>{description}</div>
          </ContentText>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12}>
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
                    <div className={cn('font-h3', faqHeading)}>
                      <Container
                        alignItems={'center'}
                        justify={'space-between'}
                      >
                        {question}
                        {expanded.includes(String(index)) ? (
                          <Minus size={32} className={cn(pl8)} />
                        ) : (
                          <Plus size={32} className={cn(pl8)} />
                        )}
                      </Container>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={'font-p'}>{answer}</div>
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
