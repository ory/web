import React from 'react'
import cn from 'classnames'
import './menu-item.module.css'
import Button from '../button/button'

interface PropType {
  title: string
  children: React.ReactElement
}

const MenuItem = ({ title, children }: PropType) => (
  <li>
    <Button to={'#'} style={'none'}>
      {title}
    </Button>
    <ul>
      <li>
        <Button to={''} style={'none'}>
          {children}
        </Button>
      </li>
    </ul>
  </li>
)

export default MenuItem
