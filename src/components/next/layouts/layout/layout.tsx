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
import oryLogo from '../../../../images/logo-ory.svg'
import developerIllustration from '../../../../images/illustrations/developer.svg'

interface PropTypes {
  children?: React.ReactNode
}

const Layout = ({ children }: PropTypes) => (
  <div className={cn(styles.layout)}>
    <Navigation
      logo={oryLogo}
      sideNav={[
        <Button
          to={'/'}
          style={'text'}
          openInNewWindow={false}
          iconRight={<SignIn size={24} />}
        >
          Login
        </Button>,
        <Button to={'/'} style={'filled'} openInNewWindow={false}>
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
                <Button to={'/'} style={'none'} openInNewWindow={true}>
                  Kratos
                </Button>
              )
            },
            {
              description: 'OAuth 2.0 & OpenIDConnect',
              button: (
                <Button to={'/'} style={'none'} openInNewWindow={true}>
                  Hydra
                </Button>
              )
            },
            {
              description: 'Authorization Server',
              button: (
                <Button to={'/'} style={'none'} openInNewWindow={true}>
                  Keto
                </Button>
              )
            },
            {
              description: 'Zero Trust Networking',
              button: (
                <Button to={'/'} style={'none'} openInNewWindow={true}>
                  Oathkeeper
                </Button>
              )
            }
          ],
          mainMenu: [
            {
              image: developerIllustration,
              description: 'Never Build Auth Again',
              title: 'Ory as a Service',
              button: (
                <Button
                  to={'/'}
                  style={'link'}
                  openInNewWindow={false}
                  iconRight={<ArrowRight size={16} />}
                >
                  Read more
                </Button>
              )
            },
            {
              image: developerIllustration,
              description: 'The Open Source Ecosystem',
              title: 'Ory Open Source',
              button: (
                <Button
                  to={'/'}
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
              image: developerIllustration,
              description: 'Start integrating Ory products',
              button: (
                <Button
                  to={'/'}
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
              image: developerIllustration,
              description: 'Ory Open Source Community',
              button: (
                <Button
                  to={'/'}
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
              image: developerIllustration,
              description: 'Ory Development & Discussion',
              button: (
                <Button
                  to={'/'}
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
          title: 'Company',
          mainMenu: [
            {
              image: developerIllustration,
              description: 'Description',
              button: (
                <Button
                  to={'/'}
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
              image: developerIllustration,
              description: 'Description',
              button: (
                <Button
                  to={'/'}
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
                <Button to={'/'} style={'none'} openInNewWindow={true}>
                  About Us
                </Button>
              )
            },
            {
              description: 'Description',
              button: (
                <Button to={'/'} style={'none'} openInNewWindow={true}>
                  Jobs
                  <ColourWrapper text={'themed-primary'}>
                    <h5 className={cn('font-p-sm')}>We're hiring!</h5>
                  </ColourWrapper>
                </Button>
              )
            }
          ]
        }
      ]}
    />
    <main>{children}</main>
    <Footer
      logo={<img loading="lazy" alt="Ory logo footer" src={logoOryFooter} />}
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
          <GithubLogo size={24} />
        </Button>,
        <Button to={''} style={'none'} openInNewWindow={true}>
          <YoutubeLogo size={24} />
        </Button>,
        <Button to={''} style={'none'} openInNewWindow={true}>
          <TwitterLogo size={24} />
        </Button>,
        <Button to={''} style={'none'} openInNewWindow={true}>
          <SlackLogo size={24} />
        </Button>,
        <Button to={''} style={'none'} openInNewWindow={true}>
          <LinkedinLogo size={24} />
        </Button>
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
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Ory
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Open Source
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Hydra
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Kratos
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Keto
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Oathkeeper
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Dockertest
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
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
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Documentation
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Community
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
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
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Blog
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              About Us
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
              style={'none'}
              openInNewWindow={true}
            >
              Jobs
              <ColourWrapper text={'themed-primary'}>
                <div className={cn('font-p-sm')}>we're hiring!</div>
              </ColourWrapper>
            </Button>,
            <Button
              className={cn('font-base font-p-sm')}
              to={'/'}
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
