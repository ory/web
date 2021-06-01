import React from 'react'
import cn from 'classnames'
import Button from '../button/button'
import ColourWrapper from '../colour/colour-wrapper'
import {menuItem, dropdown} from './menu-item.module.css'
import { ArrowDown, CaretDown } from 'phosphor-react'

interface PropType {
  title: string | React.ReactElement
  show: boolean
  children?: React.ReactElement
  className?: string
  onClick: () => void
}

const MenuItem = ({className, title, show, onClick, children}: PropType) => (
  <>
    <li aria-haspopup="true" className={cn(menuItem, className && className)}>
      {typeof title === 'string' ? (
        <>
          <ColourWrapper text={'base-grey'} >
            <Button to={onClick} style={'none'} iconRight={<CaretDown size={12} weight={"bold"}/>}>
              {title}
            </Button>
          </ColourWrapper>
          {show && children}
        </>
      ) : (
        <ColourWrapper text={'base-grey'}>{title}</ColourWrapper>
      )}
    </li>
    
  </>
)

export default MenuItem
