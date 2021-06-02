import React, { useState } from 'react'
import * as styles from './navigation.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import Button from '../../freestanding/button/button'
import { ArrowRight, List } from 'phosphor-react'
import ContentText from '../../freestanding/content/content-text'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import MenuItem from '../../freestanding/dropdown/menu-item'
import DropdownMenu from '../../freestanding/dropdown/dropdown-menu'
import DropdownItem from '../../freestanding/dropdown/dropdown-item'
import {
  pb24,
  pb32,
  pb64,
  pb8,
  pl8,
  pr16,
  pr32,
  pr8,
  pt32,
  pt8
} from '../../freestanding/utils/padding.module.css'
import MoleculeSeparator from '../../freestanding/molecule/molecule-separator'
import {
  DropdownMobileMenu,
  DropdownMobileMenuSection
} from '../../freestanding/dropdown/dropdown-mobile-menu'
import DropdownMobileItem from '../../freestanding/dropdown/dropdown-mobile-item'
import { Chunks } from '../../../util'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export interface DropdownMenuItem {
  title: string | React.ReactElement
  mainMenu?: Array<DropdownMainItem>
  sideMenu?: Array<DropdownSideItem>
}

export interface MobileMenu {
  headline: Array<MobileMenuHeadline>
  main: MobileMenuMain
  extra: React.ReactNodeArray
}

export interface MobileMenuHeadline {
  button: React.ReactElement
  description: string
}

export interface MobileMenuMain {
  title: string
  buttons: React.ReactNodeArray
}

export interface DropdownMainItem {
  title: string
  description: string
  image?: string | React.ReactElement
  button: React.ReactElement
}

export interface DropdownSideItem {
  button: React.ReactElement
  description: string
}

interface PropTypes {
  logo: string
  dropdownMenu: Array<DropdownMenuItem>
  mobileMenu: MobileMenu
  sideNav: React.ReactNodeArray
}

const Navigation = ({ logo, dropdownMenu, mobileMenu, sideNav }: PropTypes) => {
  const [openNav, setOpenNav] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<string>()
  const [hideOnScroll, setHideOnScroll] = useState(true)

  const currentNode = useRef<any>()

  let mobileNav = cn(styles.mobileContainer)
  if (openNav) {
    mobileNav = cn(styles.mobileNavActive)
  }

  // once clicked outside of the nav the menu will close
  const handleClickOutside = (e: MouseEvent) => {
    if (currentNode === null) return
    if (currentNode.current.contains(e.target)) {
      return
    }
    setOpenMenu('')
    setOpenNav(false)
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) {
        setHideOnScroll(isShow)
      }
      if (!isShow) {
        setOpenMenu('')
        setOpenNav(false)
      }
    },
    [hideOnScroll],
    undefined,
    false,
    100
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className={cn(styles.navigation, !hideOnScroll && styles.navigationHide)}
      ref={currentNode}
    >
      <Container fluid={true} noWrap={true}>
        <Button to={'/'} style={'none'}>
          <img
            className={cn(styles.navLogo)}
            src={logo}
            loading={'eager'}
            alt={'Ory logo'}
          />
        </Button>

        <nav role={'navigation'}>
          <Container smHidden={true} xsHidden={true}>
            {dropdownMenu.map(({ title, mainMenu, sideMenu }, index) => (
              <MenuItem
                title={title}
                key={index}
                className={cn(pr32)}
                onClick={() =>
                  setOpenMenu((current) => {
                    if (current === String(index)) {
                      return ''
                    }
                    return String(index)
                  })
                }
              >
                <DropdownMenu show={openMenu === String(index)}>
                  {mainMenu &&
                    mainMenu.map(
                      ({ title, image, button, description }, index) => (
                        <DropdownItem
                          className={cn(pr32)}
                          key={index}
                          title={title}
                          image={image}
                          button={button}
                          description={description}
                        />
                      )
                    )}
                  {sideMenu && (
                    <Container
                      flexContainer={'column'}
                      justify={'start'}
                      alignItems={'start'}
                    >
                      {sideMenu.map(({ description, button }, index) => (
                        <ContentText key={index} className={cn(pb24)}>
                          {button}
                          <p className={cn('font-p-sm')}>{description}</p>
                        </ContentText>
                      ))}
                    </Container>
                  )}
                </DropdownMenu>
              </MenuItem>
            ))}
          </Container>
        </nav>

        <Container justify={'end'} smHidden={true} xsHidden={true}>
          {sideNav.map((x, index) => (
            <div className={cn(pr32)} key={index}>
              {x}
            </div>
          ))}
        </Container>

        <Container justify={'end'} lgHidden={true} mdHidden={true}>
          <Button to={() => setOpenNav(!openNav)} style={'link'}>
            <List size={32} />
          </Button>
        </Container>
      </Container>

      <div className={cn(mobileNav)}>
        <DropdownMobileMenu>
          <DropdownMobileMenuSection>
            {mobileMenu.headline.map((headline, index) => (
              <DropdownMobileItem
                title={headline.button}
                description={headline.description}
                key={index}
              />
            ))}
          </DropdownMobileMenuSection>

          <MoleculeSeparator style={'horizontal'} />

          <p className={cn('font-p-sm')}>{mobileMenu.main.title}</p>
          <DropdownMobileMenuSection>
            {mobileMenu.main.buttons.map((button, index) => (
              <DropdownMobileItem
                button={button as React.ReactElement}
                key={index}
              />
            ))}
          </DropdownMobileMenuSection>

          <MoleculeSeparator style={'horizontal'} />

          <DropdownMobileMenuSection>
            {mobileMenu.extra.map((button, index) => (
              <DropdownMobileItem
                button={button as React.ReactElement}
                key={index}
              />
            ))}
          </DropdownMobileMenuSection>

          <MoleculeSeparator style={'horizontal'} />

          {sideNav.map((x, index) => (
            <div className={cn(pb8, pt8)} key={index}>
              {x}
            </div>
          ))}
        </DropdownMobileMenu>
      </div>
    </div>
  )
}

export default Navigation
