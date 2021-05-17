import React from 'react'
import cn from 'classnames'
import { dropdownMenu } from './dropdown-menu.module.css'

interface PropTypes {
  children: React.ReactNode
}

const DropdownMenu = ({ children }: PropTypes) => (
  <div className={dropdownMenu}>{children}</div>
)

export default DropdownMenu
