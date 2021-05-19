import React from 'react'
import * as styles from './layout.module.css'
import cn from 'classnames'
import Footer, { Contact, FooterPropTypes, LinkSection } from '../footer/footer'
import Navigation from '../navigation/navigation'
import logoOryFooter from '../../../../images/logo-ory-footer.svg'
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
import oryLogoPrimary from '../../../../images/logo-ory-primary.svg'
import developerIllustration from '../../../../images/illustrations/developer.svg'

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
        <Button to={'https://console.ory.sh/registration'} style={'filled'} openInNewWindow={false}>
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
                <ColourWrapper text={'base-grey'}>
                  <Button
                    className={cn('font-h5')}
                    to={'kratos'}
                    style={'link'}
                    openInNewWindow={true}
                  >
                    Kratos
                  </Button>
                </ColourWrapper>
              )
            },
            {
              description: 'OAuth 2.0 & OpenIDConnect',
              button: (
                <ColourWrapper text={'base-grey'}>
                  <Button
                    className={cn('font-h5')}
                    to={'hydra'}
                    style={'link'}
                    openInNewWindow={true}
                  >
                    Hydra
                  </Button>
                </ColourWrapper>
              )
            },
            {
              description: 'Authorization Server',
              button: (
                <ColourWrapper text={'base-grey'}>
                  <Button
                    className={cn('font-h5')}
                    to={'keto'}
                    style={'link'}
                    openInNewWindow={true}
                  >
                    Keto
                  </Button>
                </ColourWrapper>
              )
            },
            {
              description: 'Zero Trust Networking',
              button: (
                <ColourWrapper text={'base-grey'}>
                  <Button
                    className={cn('font-h5')}
                    to={'oathkeeper'}
                    style={'link'}
                    openInNewWindow={true}
                  >
                    Oathkeeper
                  </Button>
                </ColourWrapper>
              )
            }
          ],
          mainMenu: [
            {
              image: <img
                src={developerIllustration}
                loading={'eager'}
                alt={'Ory dropdown menu icon'}
              />,
              description: 'Never Build Auth Again',
              title: 'Ory as a Service',
              button: (
                <Button
                  to={'https://console.ory.sh'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Read more
                </Button>
              )
            },
            {
              image: <img
                src={developerIllustration}
                loading={'eager'}
                alt={'Ory dropdown menu icon'}
              />,
              description: 'The Open Source Ecosystem',
              title: 'Ory Open Source',
              button: (
                <Button
                  to={'opensource'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Read more
                </Button>
              )
            }
          ]
        },
        {
          title: 'Developers',
          mainMenu: [
            {
              image: <img
                src={developerIllustration}
                loading={'eager'}
                alt={'Ory dropdown menu icon'}
              />,
              description: 'Start integrating Ory products',
              button: (
                <Button
                  to={'docs'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Read more
                </Button>
              ),
              title: 'Documentation'
            },
            {
              image: <img
                src={developerIllustration}
                loading={'eager'}
                alt={'Ory dropdown menu icon'}
              />,
              description: 'Ory Open Source Community',
              button: (
                <Button
                  to={'docs/ecosystem/community/'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Read more
                </Button>
              ),
              title: 'Community'
            },
            {
              image: <img
                src={developerIllustration}
                loading={'eager'}
                alt={'Ory dropdown menu icon'}
              />,
              description: 'Ory Development & Discussion',
              button: (
                <Button
                  to={'https://github.com/ory'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Read more
                </Button>
              ),
              title: 'GitHub'
            }
          ]
        },
        {
          title: (
            <Button to={'pricing'} style={'none'}>
              Pricing
            </Button>
          )
        },
        {
          title: 'Company',
          mainMenu: [
            {
              image: <img
                src={developerIllustration}
                loading={'eager'}
                alt={'Ory dropdown menu icon'}
              />,
              description: 'Description',
              button: (
                <Button
                  to={'blog'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Read more
                </Button>
              ),
              title: 'Blog'
            },
            {
              image: <img
                src={developerIllustration}
                loading={'eager'}
                alt={'Ory dropdown menu icon'}
              />,
              description: 'Description',
              button: (
                <Button
                  to={'mailto:office@ory.sh'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Read more
                </Button>
              ),
              title: 'Contact Us'
            }
          ],
          sideMenu: [
            {
              description: 'Description',
              button: (
                <ColourWrapper text={'base-grey'}>
                  <Button
                    className={cn('font-h5')}
                    to={'about'}
                    style={'link'}
                    openInNewWindow={true}
                  >
                    About Us
                  </Button>
                </ColourWrapper>
              )
            },
            {
              description: 'Description',
              button: (
                <ColourWrapper text={'base-grey'}>
                  <Button
                    className={cn('font-h5')}
                    to={'https://github.com/ory/jobs'}
                    style={'link'}
                    openInNewWindow={true}
                  >
                    Jobs&nbsp;
                    <ColourWrapper text={'themed-primary'}>
                      <div className={cn('font-p-sm')}>We're hiring!</div>
                    </ColourWrapper>
                  </Button>
                </ColourWrapper>
              )
            }
          ]
        }
      ]}
      mobileMenu={{
        headline: [
          {
            description: 'Never Build Auth Again',
            button: (
              <ColourWrapper text={'base-grey'}>
                <Button
                  className={cn('font-h5')}
                  to={'https://console.ory.sh'}
                  style={'link'}
                  openInNewWindow={true}
                >
                  Ory as a Service
                </Button>
              </ColourWrapper>
            )
          },
          {
            description: 'Start integrating Ory products',
            button: (
              <ColourWrapper text={'base-grey'}>
                <Button
                  className={cn('font-h5')}
                  to={'docs'}
                  style={'link'}
                  openInNewWindow={true}
                >
                  Documentation
                </Button>
              </ColourWrapper>
            )
          },
          {
            description: 'Ory Open Source Community',
            button: (
              <ColourWrapper text={'base-grey'}>
                <Button
                  className={cn('font-h5')}
                  to={'docs/ecosystem/community/'}
                  style={'link'}
                  openInNewWindow={true}
                >
                  Community
                </Button>
              </ColourWrapper>
            )
          }
        ],
        main: {
          title: 'Product',
          buttons: [
            <ColourWrapper text={'base-grey'}>
              <Button
                className={cn('font-h5')}
                to={'pricing'}
                style={'link'}
                openInNewWindow={true}
              >
                Pricing
              </Button>
            </ColourWrapper>,
            <ColourWrapper text={'base-grey'}>
              <Button
                className={cn('font-h5')}
                to={'opensource'}
                style={'link'}
                openInNewWindow={true}
              >
                Ory Open Source
              </Button>
            </ColourWrapper>,
            <ColourWrapper text={'base-grey'}>
              <Button
                className={cn('font-h5')}
                to={'kratos'}
                style={'link'}
                openInNewWindow={true}
              >
                Kratos
              </Button>
            </ColourWrapper>,
            <ColourWrapper text={'base-grey'}>
              <Button
                className={cn('font-h5')}
                to={'hydra'}
                style={'link'}
                openInNewWindow={true}
              >
                Hydra
              </Button>
            </ColourWrapper>,
            <ColourWrapper text={'base-grey'}>
              <Button
                className={cn('font-h5')}
                to={'oathkeeper'}
                style={'link'}
                openInNewWindow={true}
              >
                Oathkeeper
              </Button>
            </ColourWrapper>,
            <ColourWrapper text={'base-grey'}>
              <Button
                className={cn('font-h5')}
                to={'keto'}
                style={'link'}
                openInNewWindow={true}
              >
                Keto
              </Button>
            </ColourWrapper>
          ]
        },
        extra: [
          <ColourWrapper text={'base-grey'}>
            <Button
              className={cn('font-h5')}
              to={'https://github.com/ory'}
              style={'link'}
              openInNewWindow={true}
            >
              GitHub
            </Button>
          </ColourWrapper>,
          <ColourWrapper text={'base-grey'}>
            <Button
              className={cn('font-h5')}
              to={'blog'}
              style={'link'}
              openInNewWindow={true}
            >
              Blog
            </Button>
          </ColourWrapper>,
          <ColourWrapper text={'base-grey'}>
            <Button
              className={cn('font-h5')}
              to={'mailto:hi@ory.sh'}
              style={'link'}
              openInNewWindow={true}
            >
              Contact us
            </Button>
          </ColourWrapper>,
          <ColourWrapper text={'base-grey'}>
            <Button
              className={cn('font-h5')}
              to={'about'}
              style={'link'}
              openInNewWindow={true}
            >
              About us
            </Button>
          </ColourWrapper>,
          <ColourWrapper text={'base-grey'}>
            <Button
              className={cn('font-h5 font-nowrap')}
              to={'https://github.com/ory/jobs'}
              style={'link'}
              openInNewWindow={true}
            >
              Jobs&nbsp;
              <ColourWrapper text={'themed-primary'} >
                <div className={cn('font-p-sm')}>we're hiring!</div>
              </ColourWrapper>
            </Button>
          </ColourWrapper>
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
        <Button to={'chat'} style={'none'} openInNewWindow={true}>
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
        <Button to={'../privacy'} style={'none'} openInNewWindow={true}>
          Privacy
        </Button>,
        <Button to={'../tos'} style={'none'} openInNewWindow={true}>
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
              to={'opensource'}
              style={'none'}
              openInNewWindow={true}
            >
              Open Source
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'hydra'}
              style={'none'}
              openInNewWindow={true}
            >
              Hydra
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'kratos'}
              style={'none'}
              openInNewWindow={true}
            >
              Kratos
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'keto'}
              style={'none'}
              openInNewWindow={true}
            >
              Keto
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'oathkeeper'}
              style={'none'}
              openInNewWindow={true}
            >
              Oathkeeper
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'pricing'}
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
              to={'docs'}
              style={'none'}
              openInNewWindow={true}
            >
              Documentation
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'docs/ecosystem/community/'}
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
              to={'blog'}
              style={'none'}
              openInNewWindow={true}
            >
              Blog
            </Button>,
            <Button
              className={cn('font-p-sm')}
              to={'about'}
              style={'none'}
              openInNewWindow={true}
            >
              About Us
            </Button>,
            <Button
              className={cn('font-p-sm font-nowrap')}
              to={'https://github.com/ory/jobs'}
              style={'none'}
              openInNewWindow={true}
            >
              Jobs&nbsp;
              <ColourWrapper text={'themed-primary'}>
                <div className={cn('font-p-sm')}>we're hiring!</div>
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
