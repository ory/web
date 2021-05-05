import React from 'react'
import * as styles from './container.module.css'
import cn from 'classnames'
import { ParseCase } from '../../../../util'

export interface PropTypes {
  children: React.ReactNode
  className?: string
  flexContainer?: 'row' | 'column'
  alignItems?: 'start' | 'center' | 'end'
  justify?: 'center' | 'space-around' | 'space-between' | 'start' | 'end' | 'stretch'
  fluid?: false | true
}

const getFlex = (flex: string) => {
  // @ts-ignore
  return styles[flex]
}

const getAlign = (align: string) => {
  // @ts-ignore
  return styles[`flex${ParseCase(align)}`]
}

const getJustify = (justify: string) => {
  // @ts-ignore
  return styles[`justify${ParseCase(justify)}`]
}

const Container = ({
  children,
  className,
  flexContainer = 'row',
  alignItems = 'center',
  justify = 'space-between',
  fluid = false
}: PropTypes) => (
  <div className={cn(fluid && styles.containerFluid)}>
    <div
      className={cn(
        styles.container,
        flexContainer && getFlex(flexContainer),
        alignItems && getAlign(alignItems),
        justify && getJustify(justify),
        className && className
      )}
    >
      {children}
    </div>
  </div>
)

export default Container
