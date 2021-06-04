import React from 'react'
import {
  dropdownItem,
  imageHidden,
  dropdownItemImage
} from './dropdown-item.module.css'
import cn from 'classnames'
import {pb16, pb24, pt16, pt24, pt8 } from '../utils/padding.module.css'
import Button from '../button/button'
import ContentText from '../content/content-text'
import Container from '../containers/container'

interface PropTypes {
  image?: string | React.ReactElement
  title?: string
  description: string
  button?: React.ReactElement
  className?: string
  onClick: () => void
}

const DropdownItem = ({
  className,
  image,
  title,
  description,
  button,
  onClick
}: PropTypes) => (
  <div className={cn(pb24, className && className)}>
    <ContentText>
      {typeof image === 'string' ? (
        <img
          className={cn(imageHidden, dropdownItemImage)}
          src={image}
          loading={'eager'}
          alt={'Ory dropdown menu icon'}
        />
      ) : (
        <div className={cn(imageHidden, dropdownItemImage)}>{image}</div>
      )}
      {title && <h5 className={cn('font-h5', pt16)}>{title}</h5>}
      {button && <div className={cn(pb16)} onClick={onClick}>{button}</div>}
      <p className={cn('font-p-sm')}>{description}</p>
      
    </ContentText>
  </div>
)

export default DropdownItem
