import cn from 'classnames'
import React from 'react'

import Container from '../containers/container'

import * as styles from './content-visual.module.css'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const ContentVisual = ({ children, className }: PropTypes) => (
  <div className={cn(styles.contentVisual, className && className)}>
    <Container justify={'center'} alignItems={'center'}>
      {children}
    </Container>
  </div>
)

export default ContentVisual
