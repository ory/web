import React from 'react'
import * as styles from './navigation.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import Button from '../../freestanding/button/button'
import {ArrowRight} from 'phosphor-react'
import ContentText from '../../freestanding/content/content-text'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import MenuItem from '../../freestanding/dropdown/menu-item'
import DropdownMenu from '../../freestanding/dropdown/dropdown-menu'
import DropdownItem from '../../freestanding/dropdown/dropdown-item'
import {pb24, pr32} from '../../freestanding/utils/padding.module.css'
import MoleculeSeparator from '../../freestanding/molecule/molecule-separator'

export interface DropdownMenuItem {
  title: string
  mainMenu: Array<DropdownMainItem>
  sideMenu?: Array<DropdownSideItem>
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

const Navigation = ({logo, dropdownMenu, sideNav}: PropTypes) => {
  return (
    <div className={cn(styles.navigation)}>
      <Container className={cn(styles.navContainer)}>
        <Grid lg={2}>
          <Container justify={'start'}>
              <img
                className={cn(styles.navLogo)}
                src={logo}
                loading={'eager'}
                alt={'Ory logo'}
              />
          </Container>
        </Grid>
        <Grid lg={5}>
          <Container justify={'center'}>
            <nav role={'navigation'}>
              <ul>
                {dropdownMenu.map(({title, mainMenu, sideMenu}, index) => (
                  <MenuItem title={title} key={index} className={cn(pr32)}>
                    <DropdownMenu>
                        {mainMenu.map(
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
                          <Container flexContainer={'column'}>
                            {sideMenu.map(({description, button}, index) => (
                              <ContentText key={index} className={cn(pb24)}>
                                {button}
                                <p className={cn('font-p-sm')}>
                                  {description}
                                </p>
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
        <Grid lg={4}>
          <Container justify={'end'}>
            {sideNav.map((x, index) => (
                <div className={cn(pr32)} key={index}>{x}</div>
              )
            )}
          </Container>
        </Grid>
      </Container>
    </div>
  )
}

export default Navigation
