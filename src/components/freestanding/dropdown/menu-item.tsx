import React from 'react'
import cn from 'classnames'
import Button from '../button/button'
import ColourWrapper from '../colour/colour-wrapper'
import { menuItem, menuButton } from './menu-item.module.css'
import { ArrowDown, CaretDown } from 'phosphor-react'

interface PropType {
  title: string | React.ReactElement
  children?: React.ReactElement
  className?: string
  onClick: () => void
}

const MenuItem = ({ className, title, onClick, children }: PropType) => (
  <>
    <li aria-haspopup="true" className={cn(menuItem, className && className)}>
      {typeof title === 'string' ? (
        <>
          <ColourWrapper text={'base-grey'} className={cn(menuButton)}>
            <Button to={onClick} style={'link'}>
              {title}
            </Button>
          </ColourWrapper>
          {children}
        </>
      ) : (
        <ColourWrapper text={'base-grey'}>{title}</ColourWrapper>
      )}
    </li>
  </>
)

export default MenuItem
