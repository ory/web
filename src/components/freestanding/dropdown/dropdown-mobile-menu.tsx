import React from 'react'
import {
  dropdownMobileMenu,
  dropdownSection
} from './dropdown-mobile-menu.module.css'
import cn from 'classnames'
import { Chunks } from '../../../util'
import Container from '../containers/container'
import { pb24, pb32 } from '../utils/padding.module.css'
import Grid from '../containers/grid'

interface PropTypes {
  className?: string
  children: React.ReactNode
}

export const DropdownMobileMenuSection = ({
  className,
  children
}: PropTypes) => (
  <>
    {Chunks(React.Children.toArray(children), 3).map((chunks, index) => (
      <Container
        className={cn(dropdownSection)}
        key={index}
        alignItems={'start'}
        justify={'start'}
      >
        {(chunks as Array<React.ReactNode>).map((child, index) => (
          <Grid sm={4} xs={4} key={index}>
            {child}
          </Grid>
        ))}
      </Container>
    ))}
  </>
)

export const DropdownMobileMenu = ({ className, children }: PropTypes) => (
  <div className={cn(dropdownMobileMenu)}>
    <Container
      className={cn(pb32)}
      flexContainer={'column'}
      justify={'start'}
      alignItems={'stretch'}
    >
      {children}
    </Container>
  </div>
)
