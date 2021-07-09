import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import cn from 'classnames'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import ContentText from '../../freestanding/content/content-text'
import DropdownItem from '../../freestanding/dropdown/dropdown-item'
import DropdownMenu from '../../freestanding/dropdown/dropdown-menu'
import DropdownMobileItem from '../../freestanding/dropdown/dropdown-mobile-item'
import {
  DropdownMobileMenu,
  DropdownMobileMenuSection
} from '../../freestanding/dropdown/dropdown-mobile-menu'
import MenuItem from '../../freestanding/dropdown/menu-item'
import IconWrapper from '../../freestanding/icon/icon-wrapper'
import MoleculeSeparator from '../../freestanding/molecule/molecule-separator'

import { pb24, pb8, pr32 } from '../../freestanding/utils/padding.module.css'
import * as styles from './navigation.module.css'

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
  title?: string
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

const onClickOutsideRef = (
  refs: Array<React.MutableRefObject<any>>,
  handler: (e: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        refs.filter(
          (value) => !value.current || value.current.contains(event.target)
        ).length > 0
      ) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  })
}

const Navigation = ({ logo, dropdownMenu, mobileMenu, sideNav }: PropTypes) => {
  const [mobileOpenNav, setMobileOpenNav] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<string>()
  const [hideOnScroll, setHideOnScroll] = useState(true)

  const currentNode = useRef<any>(null)
  const currentMobileNavBtnNode = useRef<any>(null)
  const currentMobileNode = useRef<any>(null)

  let mobileNav = cn(styles.mobileContainer)
  if (mobileOpenNav) {
    mobileNav = cn(styles.mobileNavActive)
  }

  const List = <i className={'ph-list themed-primary size32'} />

  // once clicked outside of the nav the menu will close
  onClickOutsideRef(
    [currentNode, currentMobileNode, currentMobileNavBtnNode],
    () => {
      setOpenMenu('')
      setMobileOpenNav(false)
    }
  )

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (prevPos.y > -300 || currPos.y > -300) {
        setHideOnScroll(true)
        return
      }

      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) {
        setHideOnScroll(isShow)
      }
      if (!isShow) {
        setOpenMenu('')
        setMobileOpenNav(false)
      }
    },
    [hideOnScroll],
    undefined,
    false,
    100
  )

  return (
    <div
      className={cn(styles.navigation, !hideOnScroll && styles.navigationHide)}
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

        <nav role={'navigation'} ref={currentNode}>
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
                          onClick={() => setOpenMenu('')}
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
          {sideNav &&
            sideNav.map((x, index) => (
              <div className={cn(styles.sidenavButtons)} key={index}>
                {x}
              </div>
            ))}
        </Container>

        <Container
          lgHidden={true}
          mdHidden={true}
          ref={currentMobileNavBtnNode}
        >
          <Button
            to={() => setMobileOpenNav((current) => !current)}
            style={'link'}
          >
            {List}
          </Button>
        </Container>
      </Container>

      <div className={cn(mobileNav)} ref={currentMobileNode}>
        <DropdownMobileMenu>
          <div className={cn(pb8)}>
            {sideNav.map((x, index) => (
              <div className={cn(pb8)} key={index}>
                {x}
              </div>
            ))}
          </div>

          <MoleculeSeparator style={'horizontal'} />

          <DropdownMobileMenuSection>
            {mobileMenu.headline.map((headline, index) => (
              <DropdownMobileItem
                onClick={() => setMobileOpenNav((current) => !current)}
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
                onClick={() => setMobileOpenNav((current) => !current)}
                button={button as React.ReactElement}
                key={index}
              />
            ))}
          </DropdownMobileMenuSection>

          <MoleculeSeparator style={'horizontal'} />

          <DropdownMobileMenuSection>
            {mobileMenu.extra.map((button, index) => (
              <DropdownMobileItem
                onClick={() => setMobileOpenNav((current) => !current)}
                button={button as React.ReactElement}
                key={index}
              />
            ))}
          </DropdownMobileMenuSection>

          <MoleculeSeparator style={'horizontal'} />
        </DropdownMobileMenu>
      </div>
    </div>
  )
}

export default Navigation
