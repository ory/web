import React from 'react'
import { itemFont } from './dropdown-mobile-item.module.css'
import cn from 'classnames'
import ContentText from '../content/content-text'
import MoleculeInteraction from '../molecule/molecule-interaction'
import Container from '../containers/container'

interface PropTypes {
  className?: string
  title?: string | React.ReactElement
  description?: string
  button?: React.ReactElement
}

const DropdownMobileItem = ({
  className,
  title,
  description,
  button
}: PropTypes) => (
  <Container
    className={cn(itemFont, className && className)}
    alignItems={'start'}
    justify={'start'}
  >
    {title && typeof title === 'string' ? (
      <h5 className={cn('font-h5')}>{title}</h5>
    ) : (
      title
    )}
    {description && <p className={cn('font-p-sm')}>{description}</p>}
    {button && button}
  </Container>
)

export default DropdownMobileItem
