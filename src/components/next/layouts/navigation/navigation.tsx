import React, {useState} from 'react'
import * as styles from './navigation.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import Button from '../../freestanding/button/button'
import {ArrowRight, List} from 'phosphor-react'
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
  pr32,
  pr8,
  pt32,
  pt8
} from '../../freestanding/utils/padding.module.css'
import MoleculeSeparator from '../../freestanding/molecule/molecule-separator'
import {DropdownMobileMenu, DropdownMobileMenuSection} from '../../freestanding/dropdown/dropdown-mobile-menu'
import DropdownMobileItem from '../../freestanding/dropdown/dropdown-mobile-item'
import {Chunks} from '../../../../util'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'

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
  image: string | React.ReactElement
  title: string
  description: string
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

const Navigation = ({logo, dropdownMenu, mobileMenu, sideNav}: PropTypes) => {
  const [openNav, setOpenNav] = useState<boolean>(false)
  
  let mobileNav = cn(styles.mobileContainer)
  
  if (openNav) {
    mobileNav = cn(styles.mobileNavActive)
  }
  
  return (
    <div className={cn(styles.navigation)}>
      <Container className={cn(styles.navContainer)}>
        <Grid lg={2}>
          <Container justify={'start'}>
            <Button to={'/'} style={'none'}>
              <img
                className={cn(styles.navLogo)}
                src={logo}
                loading={'eager'}
                alt={'Ory logo'}
              />
            </Button>
          </Container>
        </Grid>
        <Grid lg={5} smHidden={true} xsHidden={true}>
          <Container justify={'center'}>
            <nav role="navigation">
              <ul>
                {dropdownMenu.map(({title, mainMenu, sideMenu}, index) => (
                  <MenuItem title={title} key={index} className={cn(pr32)}>
                    <DropdownMenu>
                      {mainMenu &&
                      mainMenu.map(
                        ({title, image, button, description}, index) => (
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
                          {sideMenu.map(({description, button}, index) => (
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
              </ul>
            </nav>
          </Container>
        </Grid>
        <Grid lg={4} md={5}>
          <Container justify={'end'} smHidden={true} xsHidden={true}>
            {sideNav.map((x, index) => (
              <div className={cn(pr32)} key={index}>
                {x}
              </div>
            ))}
          </Container>
          <Container justify={'end'} lgHidden={true} mdHidden={true}>
            <Button to={() => setOpenNav(!openNav)} style={'link'}>
              <List size={32}/>
            </Button>
          </Container>
        </Grid>
      </Container>
      <div className={cn(mobileNav)}>
        <DropdownMobileMenu>
          <DropdownMobileMenuSection>
            {mobileMenu.headline.map((headline, index) => (
              <DropdownMobileItem title={headline.button} description={headline.description} key={index}/>
            ))}
          </DropdownMobileMenuSection>
      
          <MoleculeSeparator style={'horizontal'}/>
      
          <p className={cn('font-p-sm')}>{mobileMenu.main.title}</p>
          <DropdownMobileMenuSection>
            {mobileMenu.main.buttons.map((button, index) => (
              <DropdownMobileItem button={button as React.ReactElement} key={index}/>
            ))}
          </DropdownMobileMenuSection>
      
          <MoleculeSeparator style={'horizontal'}/>
      
          <DropdownMobileMenuSection>
            {mobileMenu.extra.map((button, index) => (
              <DropdownMobileItem button={button as React.ReactElement} key={index}/>
            ))}
          </DropdownMobileMenuSection>
      
          <MoleculeSeparator style={'horizontal'}/>
          
            {sideNav.map((x, index) => (
              <div className={cn(pb8, pt8)} key={index}>{x}</div>
            ))}
    
        </DropdownMobileMenu>
      </div>
    </div>
  )
}

export default Navigation
