import React, { forwardRef } from 'react'
import cn from 'classnames'
import { dropdownMenu, dropdownMenuHide } from './dropdown-menu.module.css'
import Container from '../containers/container'

interface PropTypes {
  children: React.ReactNode
  show: boolean
  className?: string
}

const DropdownMenu = forwardRef(({ className, show, children }: PropTypes, ref: any) => (
  <div
    ref={ref}
    className={cn(
      dropdownMenu,
      !show && dropdownMenuHide,
      className && className
    )}
  >
    <Container
      fluid={true}
      aria-label={'submenu'}
      justify={'start'}
      alignItems={'start'}
    >
      {children}
    </Container>
  </div>
))

export default DropdownMenu
