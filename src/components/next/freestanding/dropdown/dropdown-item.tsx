import React from 'react'
import { dropdownItem, imageHidden } from './dropdown-item.module.css'
import cn from 'classnames'
import { pt24, pt8 } from '../utils/padding.module.css'

interface PropTypes {
  image: string
  title: string
  description: string
  button: React.ReactElement
}

const DropdownItem = ({ image, title, description, button }: PropTypes) => (
  <div className={cn(dropdownItem)}>
    <img className={cn(imageHidden)} src={image} loading={'eager'} />
    <div className={cn('font-p-sm')}>{title}</div>
    <div className={cn('font-p-sm', pt8)}>{description}</div>
    <div className={cn(pt24)}>{button}</div>
  </div>
)

export default DropdownItem
