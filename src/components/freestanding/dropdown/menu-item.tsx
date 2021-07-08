import cn from 'classnames'
import React from 'react'

import Button from '../button/button'
import ColourWrapper from '../colour/colour-wrapper'

import { menuItem, menuButton } from './menu-item.module.css'

interface PropType {
  title: string | React.ReactElement
  children?: React.ReactElement
  className?: string
  onClick: () => void
}

const MenuItem = ({ className, title, onClick, children }: PropType) => (
  <div>
    <li aria-haspopup="true" className={cn(menuItem, className && className)}>
      {typeof title === 'string' ? (
        <>
          <ColourWrapper text={'base-grey'} className={cn(menuButton)}>
            <Button to={onClick} style={'none'}>
              {title}
            </Button>
          </ColourWrapper>
          {children}
        </>
      ) : (
        <div onClick={onClick}>
          <ColourWrapper text={'base-grey'}>{title}</ColourWrapper>
        </div>
      )}
    </li>
  </div>
)

export default MenuItem
