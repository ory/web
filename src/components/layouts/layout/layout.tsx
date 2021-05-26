import React from 'react'
import * as styles from './layout.module.css'
import cn from 'classnames'
import Footer, { Contact, FooterPropTypes, LinkSection } from '../footer/footer'
import Navigation from '../navigation/navigation'
import logoOryFooter from '../../../images/logo-ory-footer.svg'
import Button from '../../freestanding/button/button'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import {
  ArrowRight,
  GithubLogo,
  LinkedinLogo,
  SignIn,
  SlackLogo,
  TwitterLogo,
  YoutubeLogo
} from 'phosphor-react'
import oryLogoPrimary from '../../../images/logo-ory-primary.svg'
import developerIllustration from '../../../images/illustrations/developer.svg'

interface PropTypes {
  children?: React.ReactNode
}

const Layout = ({ children }: PropTypes) => (
  <div className={cn(styles.layout)}>
    <Navigation
      logo={oryLogoPrimary}
      sideNav={[
        <Button
          to={'https://console.ory.sh/login'}
          style={'text'}
          openInNewWindow={false}
          iconRight={<SignIn size={24} />}
        >
          Login
        </Button>,
        <Button
          to={'https://console.ory.sh/registration'}
          style={'filled'}
          openInNewWindow={false}
        >
          Get Started
        </Button>
      ]}
      dropdownMenu={[
        {
          title: 'Product',
          sideMenu: [
            {
              description: 'User & Identity Management',
              button: (
                <Button
                  className={cn('font-h5')}
                  to={'/kratos'}
                  style={'link'}
                  openInNewWindow={true}
                >
                  Kratos
                </Button>
              )
            },
            {
              description: 'OAuth 2.0 & OpenIDConnect',
              button: (
                <Button
                  className={cn('font-h5')}
                  to={'/hydra'}
                  style={'link'}
                  openInNewWindow={true}
                >
                  Hydra
                </Button>
              )
            },
            {
              description: 'Authorization Server',
              button: (
                <Button
                  className={cn('font-h5')}
                  to={'/keto'}
                  style={'link'}
                  openInNewWindow={true}
                >
                  Keto
                </Button>
              )
            },
            {
              description: 'Zero Trust Networking',
              button: (
                <Button
                  className={cn('font-h5')}
                  to={'/oathkeeper'}
                  style={'link'}
                  openInNewWindow={true}
                >
                  Oathkeeper
                </Button>
              )
            }
          ],
          mainMenu: [
            {
              description: 'Never Build Auth Again',
              title: 'Ory as a Service',
              button: (
                <Button
                  to={'https://console.ory.sh'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Get started
                </Button>
              )
            },
            {
              description: "Ory's heart is Open Source",
              title: 'Open Source Ecosystem',
              button: (
                <Button
                  to={'/open-source'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Explore
                </Button>
              )
            }
          ]
        },
        {
          title: 'Developers',
          mainMenu: [
            {
              description: 'Start integrating Ory products',
              button: (
                <Button
                  to={'/docs'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Read the docs
                </Button>
              ),
              title: 'Documentation'
            },
            {
              description: 'Become a part of the Ory Community',
              button: (
                <Button
                  to={'/docs/ecosystem/community/'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Join us
                </Button>
              ),
              title: 'Community'
            },
            {
              description: 'Participate in Development & Discussion',
              button: (
                <Button
                  to={'https://github.com/ory'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  To GitHub
                </Button>
              ),
              title: 'GitHub'
            }
          ]
        },
        {
          title: (
            <Button to={'/pricing'} style={'none'}>
              Pricing
            </Button>
          )
        },
        {
          title: 'Company',
          mainMenu: [
            {
              description: '',
              button: (
                <Button
                  to={'/blog'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Read articles
                </Button>
              ),
              title: 'Blog'
            },
            {
              description: '',
              button: (
                <Button
                  to={'mailto:office@ory.sh'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Get in touch with us
                </Button>
              ),
              title: 'Contact'
            },
            {
              description: '',
              button: (
                <Button
                  to={'/about'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  About Ory
                </Button>
              ),
              title: 'About'
            },
            {
              description: '',
              button: (
                <Button
                  to={'https://github.com/ory/jobs'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  We're hiring!
                </Button>
              ),
              title: 'Jobs'
            }
          ],
        }
      ]}
      mobileMenu={{
        headline: [
          {
            description: 'Never Build Auth Again',
            button: (
              <Button
                className={cn('font-h5')}
                to={'https://console.ory.sh'}
                style={'link'}
                openInNewWindow={true}
              >
                Ory as a Service
              </Button>
            )
          },
          {
            description: 'Start integrating Ory products',
            button: (
              <Button
                className={cn('font-h5')}
                to={'/docs'}
                style={'link'}
                openInNewWindow={true}
              >
                Documentation
              </Button>
            )
          },
          {
            description: 'Ory Open Source Community',
            button: (
              <Button
                className={cn('font-h5')}
                to={'/docs/ecosystem/community/'}
                style={'link'}
                openInNewWindow={true}
              >
                Community
              </Button>
            )
          }
        ],
        main: {
          title: 'Product',
          buttons: [
            <Button
              className={cn('font-h5')}
              to={'/pricing'}
              style={'link'}
              openInNewWindow={true}
            >
              Pricing
            </Button>,
            <Button
              className={cn('font-h5')}
              to={'/open-source'}
              style={'link'}
              openInNewWindow={true}
            >
              Ory Open Source
            </Button>,
            <Button
              className={cn('font-h5')}
              to={'/kratos'}
              style={'link'}
              openInNewWindow={true}
            >
              Kratos
            </Button>,
            <Button
              className={cn('font-h5')}
              to={'/hydra'}
              style={'link'}
              openInNewWindow={true}
            >
              Hydra
            </Button>,
            <Button
              className={cn('font-h5')}
              to={'/oathkeeper'}
              style={'link'}
              openInNewWindow={true}
            >
              Oathkeeper
            </Button>,
            <Button
              className={cn('font-h5')}
              to={'/keto'}
              style={'link'}
              openInNewWindow={true}
            >
              Keto
            </Button>
          ]
        },
        extra: [
          <Button
            className={cn('font-h5')}
            to={'https://github.com/ory'}
            style={'link'}
            openInNewWindow={true}
          >
            GitHub
          </Button>,
          <Button
            className={cn('font-h5')}
            to={'/blog'}
            style={'link'}
            openInNewWindow={true}
          >
            Blog
          </Button>,
          <Button
            className={cn('font-h5')}
            to={'mailto:hi@ory.sh'}
            style={'link'}
            openInNewWindow={true}
          >
            Contact us
          </Button>,
          <Button
            className={cn('font-h5')}
            to={'about'}
            style={'link'}
            openInNewWindow={true}
          >
            About us
          </Button>,
          <Button
            className={cn('font-h5 font-nowrap')}
            to={'https://github.com/ory/jobs'}
            style={'link'}
            openInNewWindow={true}
          >
            Jobs&nbsp;
            <ColourWrapper text={'themed-primary'}>
              <div className={cn('font-p-sm')}>we're hiring!</div>
            </ColourWrapper>
          </Button>
        ]
      }}
    />
    <main>{children}</main>
    <Footer
      logo={<img loading="lazy" alt="Ory logo footer" src={logoOryFooter} />}
      copyright={<>© Copyright 2021 Ory Corp</>}
      contact={{
        contactEmail: (
          <Button to={'mailto:office@ory.sh'} style={'link'}>
            office@ory.sh
          </Button>
        ),
        contactText: <>👋 Say Hello</>
      }}
      social={[
        <Button
          to={'https://www.github.com/ory'}
          style={'none'}
          openInNewWindow={true}
        >
          <GithubLogo size={24} />
        </Button>,
        <Button
          to={'https://www.youtube.com/channel/UC9hCxZZeviexX0GclD0brrw'}
          style={'none'}
          openInNewWindow={true}
        >
          <YoutubeLogo size={24} />
        </Button>,
        <Button
          to={'https://twitter.com/orycorp'}
          style={'none'}
          openInNewWindow={true}
        >
          <TwitterLogo size={24} />
        </Button>,
        <Button to={'/chat'} style={'none'} openInNewWindow={true}>
          <SlackLogo size={24} />
        </Button>,
        <Button
          to={'https://www.linkedin.com/company/ory-corp/'}
          style={'none'}
          openInNewWindow={true}
        >
          <LinkedinLogo size={24} />
        </Button>
      ]}
      legal={[
        <Button
          to={'https://status.ory.sh/'}
          style={'none'}
          openInNewWindow={true}
        >
          Status
        </Button>,
        <Button to={'/privacy'} style={'none'}>
          Privacy
        </Button>,
        <Button to={'/tos'} style={'none'}>
          Terms
        </Button>
      ]}
      links={[
        {
          title: 'Product',
          links: [
            <Button
              className={cn('font-p-sm')}
              to={'https://console.ory.sh'}
              style={'none'}
              openInNewWindow={true}
            >
              Ory
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'/open-source'}
              style={'none'}
              openInNewWindow={true}
            >
              Open Source
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'/hydra'}
              style={'none'}
              openInNewWindow={true}
            >
              Hydra
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'/kratos'}
              style={'none'}
              openInNewWindow={true}
            >
              Kratos
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'/keto'}
              style={'none'}
              openInNewWindow={true}
            >
              Keto
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'/oathkeeper'}
              style={'none'}
              openInNewWindow={true}
            >
              Oathkeeper
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'/pricing'}
              style={'none'}
              openInNewWindow={true}
            >
              Pricing
            </Button>
          ]
        },
        {
          title: 'Developers',
          links: [
            <Button
              className={cn('font-p-sm')}
              to={'/docs'}
              style={'none'}
              openInNewWindow={true}
            >
              Documentation
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'/docs/ecosystem/community/'}
              style={'none'}
              openInNewWindow={true}
            >
              Community
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'https://github.com/ory'}
              style={'none'}
              openInNewWindow={true}
            >
              GitHub
            </Button>
          ]
        },
        {
          title: 'Company',
          links: [
            <Button
              className={cn('font-p-sm')}
              to={'/blog'}
              style={'none'}
              openInNewWindow={true}
            >
              Blog
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'/about'}
              style={'none'}
              openInNewWindow={true}
            >
              About Us
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'https://github.com/ory/jobs'}
              style={'none'}
              openInNewWindow={true}
            >
              Jobs&nbsp;
              <ColourWrapper text={'themed-primary'}>
                <span className={cn('font-p-sm font-nowrap')}>
                  we're hiring!
                </span>
              </ColourWrapper>
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'mailto:office@ory.sh'}
              style={'none'}
              openInNewWindow={true}
            >
              Contact Us
            </Button>
          ]
        }
      ]}
    />
  </div>
)

export default Layout
