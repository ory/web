import React from 'react'
import {footer, footerFill, footerLeft, footerText, footerItem} from './footer.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import Molecule from '../../freestanding/molecule/molecule'
import ContentVisual from '../../freestanding/content/content-visual'
import {
  pb16,
  pb24,
  pb32,
  pb64,
  pl128,
  pl16,
  pl24,
  pl32,
  pl64,
  pl8,
  pr16,
  pr24,
  pr32,
  pr8,
  pt32
} from '../../freestanding/utils/padding.module.css'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'

export interface Contact {
  contactEmail: React.ReactElement
  contactText: React.ReactElement
}

export interface LinkSection {
  title: string
  links: React.ReactNodeArray
}

export interface FooterPropTypes {
  logo: React.ReactElement
  copyright: React.ReactElement
  contact: Contact
  social: React.ReactNodeArray
  links: Array<LinkSection>
  legal: React.ReactNodeArray
}

interface FooterMain {
  className: string
  logo: React.ReactElement
  contact: Contact
  links: Array<LinkSection>
}

const FooterMain = ({className, logo, contact, links}: FooterMain) => (
  <Container className={className} justify={'space-between'} alignItems={'start'}>
    <Grid lg={6} md={4} sm={4} xs={6}>
      <ContentText>
        <div className={cn(pb64)}>{logo}</div>
        {contact.contactEmail}
        <div className={cn('p-sm')}>{contact.contactText}</div>
      </ContentText>
    </Grid>
    <Grid lg={6} md={8} sm={8} xs={6}>
      <Container alignItems={'start'} justify={'end'}>
        {links.map((l) => (
          <Grid lg={3} md={3} sm={4} xs={3} key={l.title} className={cn(pb24)}>
            <ContentText>
              {l.title}
              {l.links.map((i, index) => (
                <ColourWrapper text={'base-grey-600'} key={index}
                               className={cn('font-menu', footerText)}>{i as React.ReactElement}</ColourWrapper>
              ))}
            </ContentText>
          </Grid>
        ))}
      </Container>
    </Grid>
  </Container>
)

interface FooterSub {
  className: string
  copyright: React.ReactElement
  social: React.ReactNodeArray
  legal: React.ReactNodeArray
}

const FooterSub = ({className, copyright, social, legal}: FooterSub) => (
  <Container className={cn(className)} alignItems={'start'}>
    <Grid lg={4} md={4} sm={3} xs={12} className={cn(pb16)}>
      <div className={cn('font-p-sm')}>{copyright}</div>
    </Grid>
    <Grid lg={4} md={4} sm={3} xs={12}>
      <Container justify={'center'}>
        <MoleculeInteraction>
          {social.map((s, index) => (
            <ColourWrapper className={pl16} text={'base-grey-400'} key={index}>
              {s as React.ReactElement}
            </ColourWrapper>
          ))}
        </MoleculeInteraction>
      </Container>
    </Grid>
    <Grid lg={4} md={4} sm={3} xs={12}>
      <Container justify={'end'}>
        <MoleculeInteraction>
          {legal.map((l, index) => (
            <ColourWrapper className={cn(pl16)} text={'base-grey-400'} key={index}>
              {l as React.ReactElement}
            </ColourWrapper>
          ))}
        </MoleculeInteraction>
      </Container>
    </Grid>
  </Container>
)

const Footer = ({logo, contact, links, copyright, social, legal}: FooterPropTypes) => (
  <div className={cn(footer)}>
    <Container flexContainer={'column'} fluid={true}>
        <FooterMain className={cn(pb32)} logo={logo} contact={contact} links={links}/>
        <FooterSub className={cn(pt32)} copyright={copyright} social={social} legal={legal}/>
    </Container>
  </div>
)

export default Footer

