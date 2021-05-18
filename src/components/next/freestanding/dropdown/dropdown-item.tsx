import React from 'react'
import { dropdownItem, imageHidden, dropdownItemImage } from './dropdown-item.module.css'
import cn from 'classnames'
import {pt16, pt24, pt8 } from '../utils/padding.module.css'
import Button from '../button/button'
import ContentText from '../content/content-text'

interface PropTypes {
  image: string
  title: string
  description: string
  button: React.ReactElement
  className?: string
}

const DropdownItem = ({
  className,
  image,
  title,
  description,
  button
}: PropTypes) => (
  <div className={cn(dropdownItem, className && className)}>
    <ContentText>
      <img className={cn(imageHidden, dropdownItemImage)} src={image} loading={'eager'} />
      <h5 className={cn('font-h5', pt16)}>{title}</h5>
      <p className={cn('font-p-sm', pt8)}>{description}</p>
      <div className={cn(pt24)}>{button}</div>
    </ContentText>
    
  </div>
)

export default DropdownItem
