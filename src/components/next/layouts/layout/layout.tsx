import React from 'react'
import * as styles from './layout.module.css'
import cn from 'classnames'
import Footer, {Contact, FooterPropTypes, LinkSection} from '../footer/footer'
import Navigation from '../navigation/navigation'
import heroIllustration from '../../../../images/illustrations/hero.svg'
import Button from '../../freestanding/button/button'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import {GithubLogo, LinkedinLogo, SlackLogo, TwitterLogo, YoutubeLogo} from 'phosphor-react'

interface PropTypes {
  children?: React.ReactNode
}

const Layout = ({children}: PropTypes) => (
  <div>
    <Navigation/>
    <main className={cn(styles.layout)}>
      {children}
    </main>
    <Footer
      logo={<img loading="lazy" alt="" src={heroIllustration}/>}
      copyright={<>© Copyright 2021 Ory Corp</>}
      contact={{
        contactEmail: (
          <Button to={'mailto://'} style={'link'}>
            office@ory.sh
          </Button>
        ),
        contactText: <>👋 Say Hello</>
      }}
      social={[
        <Button to={''} style={'none'} openInNewWindow={true}>
          <GithubLogo size={24}/>
        </Button>,
        <Button to={''} style={'none'} openInNewWindow={true}>
          <YoutubeLogo size={24}/>
        </Button>,
        <Button to={''} style={'none'} openInNewWindow={true}>
          <TwitterLogo size={24}/>
        </Button>,
        <Button to={''} style={'none'} openInNewWindow={true}>
          <SlackLogo size={24}/>
        </Button>,
        <Button to={''} style={'none'} openInNewWindow={true}>
          <LinkedinLogo size={24}/>
        </Button>,
      ]}
      legal={[
        <Button to={'/'} style={'none'} openInNewWindow={true}>
          Status
        </Button>,
        <Button to={'/'} style={'none'} openInNewWindow={true}>
          Privacy
        </Button>,
        <Button to={'/'} style={'none'} openInNewWindow={true}>
          Terms
        </Button>
      ]}
      links={[
        {
          title: 'Product',
          links: [
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Ory
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Open Source
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Hydra
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Kratos
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Keto
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Oathkeeper
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Dockertest
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Pricing
            </Button>
          ]
        },
        {
          title: 'Developers',
          links: [
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Documentation
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Community
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              GitHub
            </Button>
          ]
        },
        {
          title: 'Company',
          links: [
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Blog
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              About Us
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Jobs
              <ColourWrapper text={'themed-primary'}>
                <div className={cn('font-p-sm')}>we're hiring!</div>
              </ColourWrapper>
            </Button>,
            <Button className={cn('font-base font-p-sm')} to={'/'} style={'none'} openInNewWindow={true}>
              Contact Us
            </Button>
          ]
        }
      ]}
    />
  </div>
)

export default Layout
