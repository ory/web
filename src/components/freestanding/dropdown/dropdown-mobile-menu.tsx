import React from 'react'
import {
  dropdownMobileMenu,
  dropdownSection
} from './dropdown-mobile-menu.module.css'
import cn from 'classnames'
import { Chunks } from '../../../util'
import Container from '../containers/container'
import { pb24, pb32, pb64 } from '../utils/padding.module.css'
import Grid from '../containers/grid'

interface PropTypes {
  className?: string
  children: React.ReactNode
}

export const DropdownMobileMenuSection = ({
  className,
  children
}: PropTypes) => (
  <div className={cn(className && className)}>
    {Chunks(React.Children.toArray(children), 3).map((chunks, index) => (
      <Container
        className={cn(dropdownSection)}
        key={index}
        alignItems={'start'}
        justify={'space-between'}
      >
        {(chunks as Array<React.ReactNode>).map((child, index) => (
          <Grid sm={4} xs={5} key={index}>
            {child}
          </Grid>
        ))}
      </Container>
    ))}
  </div>
)

export const DropdownMobileMenu = ({ className, children }: PropTypes) => (
  <div className={cn(dropdownMobileMenu, className && className)}>
    <Container
      fluid={true}
      className={cn(pb64)}
      flexContainer={'column'}
      justify={'start'}
      alignItems={'stretch'}
    >
      {children}
    </Container>
  </div>
)
