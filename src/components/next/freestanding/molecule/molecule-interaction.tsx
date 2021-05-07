import React from 'react'
import * as styles from './molecule-interaction.module.css'
import cn from 'classnames'
import Container from '../containers/container'
import Grid from '../containers/grid'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const MoleculeInteraction = ({children, className}: PropTypes) => (
  <div className={cn(styles.moleculeInteraction, className && className)}>
    <Container>
      {React.Children.count(children) > 1 ? React.Children.map(children, (child) => {
          return (
            <Grid lg={6} md={6} sm={6} xs={6}>
              {child}
            </Grid>
          )
        })
        : children
      }
    </Container>
  </div>
)

export default MoleculeInteraction
