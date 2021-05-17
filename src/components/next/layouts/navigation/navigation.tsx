import React from 'react'
import * as styles from './navigation.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import Button from '../../freestanding/button/button'
import { ArrowRight } from 'phosphor-react'
import ContentText from '../../freestanding/content/content-text'
import MenuItem from '../../freestanding/dropdown/menu-item'
import DropdownMenu from '../../freestanding/dropdown/dropdown-menu'
import DropdownItem from '../../freestanding/dropdown/dropdown-item'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'

export interface DropdownMenuItem {
  title: string
  mainMenu: Array<DropdownMainItem>
  sideMenu: Array<DropdownSideItem>
}

export interface DropdownMainItem {
  image: string
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
  sideNav: React.ReactNodeArray
}

const Navigation = ({ logo, dropdownMenu, sideNav }: PropTypes) => {
  return (
    <div className={cn(styles.navigation)}>
      <Container className={cn(styles.navContainer)}>
        <Grid lg={2}>
          <Container justify={'start'}>
            <ColourWrapper text={'themed-primary'}>
              <img className={cn(styles.navLogo)} src={logo} loading={'eager'} alt={'Ory logo'} />
            </ColourWrapper>
          </Container>
        </Grid>
        <Grid lg={4}>
          <Container justify={'center'}>
            <nav role={'navigation'}>
              <ul>
                {dropdownMenu.map(({ title, mainMenu, sideMenu }, index) => (
                  <MenuItem title={title} key={index}>
                    <DropdownMenu>
                      {mainMenu.map(({ title, image, button, description }, index) => (
                        <DropdownItem
                          key={index}
                          title={title}
                          image={image}
                          button={button}
                          description={description}
                        />
                      ))}

                      {sideMenu.map(({ description, button }, index) => (
                        <ContentText key={index}>
                          {button}
                          <div className={cn('font-p-sm')}>{description}</div>
                        </ContentText>
                      ))}
                    </DropdownMenu>
                  </MenuItem>
                ))}
              </ul>
            </nav>
          </Container>
        </Grid>
        <Grid lg={4}>
          <Container justify={'end'}>{sideNav.map((x) => x)}</Container>
        </Grid>
      </Container>
    </div>
  )
}

export default Navigation
