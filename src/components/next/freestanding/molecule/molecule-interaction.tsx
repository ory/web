import React from 'react'
import cn from 'classnames'
import Container from '../containers/container'
import Grid from '../containers/grid'
import { moleculeInteraction } from './molecule-interaction.module.css'
import { pr8 } from '../utils/padding.module.css'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const MoleculeInteraction = ({ children, className }: PropTypes) => (
  <div className={cn(moleculeInteraction, className && className)}>
    {React.Children.count(children) > 1
      ? React.Children.map(children, (child) => {
          return <div className={cn(pr8)}>{child}</div>
        })
      : children}
  </div>
)

export default MoleculeInteraction
