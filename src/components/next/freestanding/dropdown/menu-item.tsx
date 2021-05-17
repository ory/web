import React from 'react'
import cn from 'classnames'
import './menu-item.module.css'
import Button from '../button/button'
import ColourWrapper from '../colour/colour-wrapper'

interface PropType {
  title: string
  children: React.ReactElement
  className?: string
}

const MenuItem = ({ className, title, children }: PropType) => (
  <li aria-haspopup="true" className={cn(className && className)}>
    <ColourWrapper text={'base-grey'}>
      <Button to={'#'} style={'none'}>
        {title}
      </Button>
    </ColourWrapper>
    <ul className={cn('dropdown')} aria-label={'submenu'}>
      <li>{children}</li>
    </ul>
  </li>
)

export default MenuItem
