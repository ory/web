import React from 'react'
import cn from 'classnames'
import { dropdownMenu } from './dropdown-menu.module.css'
import Container from '../containers/container'

interface PropTypes {
  children: React.ReactNode
  className?: string
}

const DropdownMenu = ({ className, children }: PropTypes) => (
  <div className={cn(dropdownMenu, className && className)}>
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
