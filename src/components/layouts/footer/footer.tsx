import React from 'react'
import {
  footer,
  footerContainer,
  footerSub,
  footerCategories,
  footerImg,
  footerFont
} from './footer.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import { pb16, pb32, pl16 } from '../../freestanding/utils/padding.module.css'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import MoleculeSeparator from '../../freestanding/molecule/molecule-separator'

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

const FooterMain = ({ className, logo, contact, links }: FooterMain) => (
  <Container fluid={true}>
    <Grid lg={12} md={12} sm={12} xs={12}>
      <Container className={className} alignItems={'start'}>
        <Grid lg={3} md={3} sm={6} xs={6} className={cn(pb32)}>
          <Container
            flexContainer={'column'}
            alignItems={'start'}
            justify={['start-lg', 'start-md', 'start-sm', 'start-xs']}
          >
            <div className={cn(footerImg)}>{logo}</div>
            <ColourWrapper text={'base-grey-600'}>
              {contact.contactEmail}
            </ColourWrapper>
            <p className={cn('p-sm')}>{contact.contactText}</p>
          </Container>
        </Grid>
        <Grid lg={6} md={8} sm={12} xs={12}>
          <Container alignItems={'start'} justify={'space-between'}>
            {links.map((l, index) => (
              <ContentText key={index} className={cn(footerCategories)}>
                <p className={cn('font-p-sm', pb16)}>{l.title}</p>
                {l.links.map((i, index) => (
                  <ColourWrapper key={index} className={cn(footerFont)}>
                    {i as React.ReactElement}
                  </ColourWrapper>
                ))}
              </ContentText>
            ))}
          </Container>
        </Grid>
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

const FooterSub = ({ className, copyright, social, legal }: FooterSub) => (
  <Container fluid={true}>
    <Grid lg={12} md={12} sm={12} xs={12}>
      <Container
        className={cn(className)}
        alignItems={'center'}
        justify={'center'}
      >
        <Grid lg={4} md={4} sm={4} xs={12}>
          <Container
            justify={['start-lg', 'start-md', 'start-sm', 'center-xs']}
          >
            <ColourWrapper text={'base-grey-400'}>
              <p className={cn('font-p-sm')}>{copyright}</p>
            </ColourWrapper>
          </Container>
        </Grid>
        <Grid lg={4} md={4} sm={4} xs={12}>
          <Container justify={'center'} alignItems={'center'}>
            <MoleculeInteraction>
              {social.map((s, index) => (
                <ColourWrapper
                  className={cn(footerFont)}
                  text={'base-grey-400'}
                  key={index}
                >
                  {s as React.ReactElement}
                </ColourWrapper>
              ))}
            </MoleculeInteraction>
          </Container>
        </Grid>
        <Grid lg={4} md={4} sm={4} xs={12}>
          <Container justify={['end-lg', 'end-md', 'center-sm', 'center-xs']}>
            <MoleculeInteraction>
              {legal.map((l, index) => (
                <ColourWrapper
                  className={cn(footerFont, pl16)}
                  text={'base-grey-400'}
                  key={index}
                >
                  {l as React.ReactElement}
                </ColourWrapper>
              ))}
            </MoleculeInteraction>
          </Container>
        </Grid>
      </Container>
    </Grid>
  </Container>
)

const Footer = ({
  logo,
  contact,
  links,
  copyright,
  social,
  legal
}: FooterPropTypes) => (
  <>
    <div className={cn(footer)}>
      <FooterMain
        className={cn(footerContainer, pb32)}
        contact={contact}
        links={links}
        logo={logo}
      />
    </div>
    <div className={cn(footerSub)}>
      <FooterSub
        className={cn(footerContainer)}
        copyright={copyright}
        social={social}
        legal={legal}
      />
    </div>
  </>
)

export default Footer
