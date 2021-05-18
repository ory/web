import React from 'react'
import cn from 'classnames'
import { dropdownMenu } from './dropdown-menu.module.css'
import Container from '../containers/container'

interface PropTypes {
  children: React.ReactNode
  className?: string
}

const DropdownMenu = ({ className, children }: PropTypes) => (
    <Container className={cn(dropdownMenu, className && className)} justify={'space-between'} alignItems={'start'}>
      {children}
    </Container>
)

export default DropdownMenu
