import React from 'react'
import * as styles from './quotes-content.module.css'
import cn from 'classnames'
import Container from '../../../freestanding/containers/container'
import Grid from '../../../freestanding/containers/grid'
import MoleculeLogo from '../../../freestanding/molecule/molecule-logo'
import ContentText from '../../../freestanding/content/content-text'
import Molecule from '../../../freestanding/molecule/molecule'
import ContentVisual from '../../../freestanding/content/content-visual'

export interface Quote {
  companyLogo: React.ReactNode
  text: React.ReactNode
  background: string
}

interface PropTypes {
  className?: string
  quoteContent: Quote
}

const QuotesContent = ({ quoteContent, className }: PropTypes) => (
  <div className={cn(className && className)}>
    <Container justify={'center'} alignItems={'center'}>
      <Grid lg={5} md={5} sm={12} xs={12}>
        <Container justify={'center'} alignItems={'center'}>
          <MoleculeLogo>{quoteContent.companyLogo}</MoleculeLogo>
        </Container>
      </Grid>
      <Grid lg={6} md={5} sm={12} xs={12}>
        <ContentText className={cn(styles.quotesText)}>
          <Molecule>{quoteContent.text}</Molecule>
        </ContentText>
      </Grid>
    </Container>
  </div>
)

export default QuotesContent
