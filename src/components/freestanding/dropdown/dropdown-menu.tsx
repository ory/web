import React from 'react'
import cn from 'classnames'
import { dropdownMenu, dropdownMenuHide } from './dropdown-menu.module.css'
import Container from '../containers/container'

interface PropTypes {
  children: React.ReactNode
  show: boolean
  className?: string
}

const DropdownMenu = ({ className, show, children }: PropTypes) => (
  <div
    className={cn(
      dropdownMenu,
      !show && dropdownMenuHide,
      className && className
    )}
  >
    <Container
      fluid={true}
      aria-label={'submenu'}
      justify={'space-between'}
      alignItems={'start'}
    >
      {children}
    </Container>
  </div>
)

export default DropdownMenu
