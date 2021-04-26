import React from 'react'
import * as styles from './styled-image.module.css'
import cn from 'classnames'

export interface PropTypes {
  children?: React.ReactNode
}

const StyledImage = ({ children }: PropTypes) => (
  <div className={cn(styles.styledImage, styles.styledImageInner)}>
    {children}
  </div>
)

export default StyledImage
