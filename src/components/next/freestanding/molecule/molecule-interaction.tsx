import React from 'react'
import * as styles from './molecule-interaction.module.css'
import cn from 'classnames'
import Container from '../containers/container'
import Grid from '../containers/grid'
import * as padding from '../utils/padding.module.css'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const MoleculeInteraction = ({ children, className }: PropTypes) => (
  <div className={cn(className && className)}>
    <Container justify={'start'}>
      {React.Children.count(children) > 1
        ? React.Children.map(children, (child) => {
            return <div className={cn(padding.mr8)}>{child}</div>
          })
        : children}
    </Container>
  </div>
)

export default MoleculeInteraction
