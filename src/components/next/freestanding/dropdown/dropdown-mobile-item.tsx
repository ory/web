import React from 'react'
import cn from 'classnames'
import ContentText from '../content/content-text'

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
  <div className={cn(className && className)}>
    <ContentText>
      {title && typeof title === 'string' ? (
        <h5 className={cn('font-h5')}>{title}</h5>
      ) : (
        title
      )}
      {description && <p className={cn('font-p-sm')}>{description}</p>}
      {button && button}
    </ContentText>
  </div>
)

export default DropdownMobileItem
