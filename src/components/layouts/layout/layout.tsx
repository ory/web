import React from 'react'
import * as styles from './layout.module.css'
import cn from 'classnames'
import Footer from '../footer/footer'
import Navigation from '../navigation/navigation'
import logoOryFooter from '../../../images/logo-ory-footer.svg'
import Button from '../../freestanding/button/button'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import oryLogoPrimary from '../../../images/logo-ory-primary.svg'

import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-shell-session'
import IconWrapper from '../../freestanding/icon/icon-wrapper'

interface PropTypes {
  children?: React.ReactNode
}

const Layout = ({ children }: PropTypes) => {
  const arrowRight = (
    <IconWrapper color={'themed-primary'} icon={'ArrowRight'} size={'16'} />
  )
  const signIn = (
    <IconWrapper color={'themed-primary'} icon={'SignIn'} size={'24'} />
  )

  return (
    <div className={cn(styles.layout)}>
      <Navigation
        logo={oryLogoPrimary}
        sideNav={[
          <Button
            to={'https://console.ory.sh/login'}
            style={'text'}
            openInNewWindow={false}
            iconRight={signIn}
          >
            Login
          </Button>,
          <Button
            to={'https://console.ory.sh/registration'}
            style={'filled'}
            openInNewWindow={false}
          >
            Request Access
          </Button>
        ]}
        dropdownMenu={[
          {
            title: 'Product',
            mainMenu: [
              {
                description: 'Never Build Auth Again',
                button: (
                  <Button
                    to={'https://console.ory.sh/registration'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={arrowRight}
                  >
                    Ory as a Service
                  </Button>
                )
              },
              {
                description: "Ory's heart is Open Source",
                button: (
                  <Button
                    to={'/open-source'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={arrowRight}
                  >
                    Open Source Ecosystem
                  </Button>
                )
              },
              {
                description: 'Identity & User Management',
                button: (
                  <Button
                    className={cn('font-h5')}
                    to={'/kratos'}
                    style={'link'}
                    openInNewWindow={true}
                    iconRight={arrowRight}
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
                    iconRight={arrowRight}
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
                    iconRight={arrowRight}
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
                    iconRight={arrowRight}
                  >
                    Oathkeeper
                  </Button>
                )
              }
            ]
          },
          {
            title: 'Developers',
            mainMenu: [
              {
                description: 'Be a part of the Ory Community',
                button: (
                  <Button
                    to={'/docs/ecosystem/community/'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={arrowRight}
                  >
                    Community
                  </Button>
                )
              },
              {
                description: 'Articles & Guides',
                button: (
                  <Button
                    to={'/blog'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={arrowRight}
                  >
                    Blog
                  </Button>
                )
              },
              {
                description: 'Participate in Development',
                button: (
                  <Button
                    to={'https://github.com/ory'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={arrowRight}
                  >
                    GitHub
                  </Button>
                )
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
            title: (
              <Button to={'/docs'} style={'none'}>
                Docs
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
                    to={'mailto:office@ory.sh'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={arrowRight}
                  >
                    Contact
                  </Button>
                )
              },
              {
                description: '',
                button: (
                  <Button
                    to={'/about'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={arrowRight}
                  >
                    About Us
                  </Button>
                )
              },
              {
                description: '',
                button: (
                  <Button
                    to={'https://github.com/ory/jobs'}
                    style={'link'}
                    openInNewWindow={false}
                    iconRight={arrowRight}
                  >
                    Jobs We're hiring!
                  </Button>
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
                <Button
                  className={cn('font-h5')}
                  to={'https://console.ory.sh/registration'}
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
              Contact Us
            </Button>,
            <Button
              className={cn('font-h5')}
              to={'about'}
              style={'link'}
              openInNewWindow={true}
            >
              About Us
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
        logo={
          <img
            width={'100%'}
            height={'100%'}
            loading="lazy"
            alt="Ory logo footer"
            src={logoOryFooter}
          />
        }
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
            <IconWrapper
              color={'base-grey-200'}
              icon={'GithubLogoDuotone'}
              size={'24'}
            />
          </Button>,
          <Button
            to={'https://www.youtube.com/channel/UC9hCxZZeviexX0GclD0brrw'}
            style={'none'}
            openInNewWindow={true}
          >
            <IconWrapper
              color={'base-grey-200'}
              icon={'YoutubeLogoDuotone'}
              size={'24'}
            />
          </Button>,
          <Button
            to={'https://twitter.com/orycorp'}
            style={'none'}
            openInNewWindow={true}
          >
            <IconWrapper
              color={'base-grey-200'}
              icon={'TwitterLogoDuotone'}
              size={'24'}
            />
          </Button>,
          <Button
            to={'https://slack.ory.sh/'}
            style={'none'}
            openInNewWindow={true}
          >
            <IconWrapper
              color={'base-grey-200'}
              icon={'SlackLogoDuotone'}
              size={'24'}
            />
          </Button>,
          <Button
            to={'https://www.linkedin.com/company/ory-corp/'}
            style={'none'}
            openInNewWindow={true}
          >
            <IconWrapper
              color={'base-grey-200'}
              icon={'LinkedinLogoDuotone'}
              size={'24'}
            />
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
                to={'https://console.ory.sh/registration'}
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
}

export default Layout
