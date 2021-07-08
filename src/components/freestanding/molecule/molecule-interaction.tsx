import cn from 'classnames'
import React from 'react'

import Container from '../containers/container'
import Grid from '../containers/grid'

import { pr8 } from '../utils/padding.module.css'
import { moleculeInteraction } from './molecule-interaction.module.css'

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
