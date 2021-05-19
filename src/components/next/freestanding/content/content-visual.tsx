import React from 'react'
import * as styles from './content-visual.module.css'
import cn from 'classnames'
import Container from '../containers/container'

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
