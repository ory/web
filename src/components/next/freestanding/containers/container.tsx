import React from 'react'
import * as styles from './container.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
  flexContainer?: 'row' | 'column'
  alignItems?: 'start' | 'center' | 'end'
  justifyItem?: 'center'
  fluid?: false | true
}

const getFlex = (flex: string) => {
  // @ts-ignore
  return styles[flex]
}

const getAlign = (align: string) => {
  // @ts-ignore
  return styles[`flex-${align}`]
}

const getJustify = (justify: string) => {
  // @ts-ignore
  return styles[`justify-${justify}`]
}

const Container = ({
  children,
  className,
  flexContainer = 'row',
  alignItems,
  justifyItem,
  fluid = false
}: PropTypes) => (
  <div className={cn(fluid && styles.containerFluid)}>
    <div
      className={cn(
        styles.container,
        flexContainer && getFlex(flexContainer),
        alignItems && getAlign(alignItems),
        justifyItem && getJustify(justifyItem),
        className && className
      )}
    >
      {children}
    </div>
  </div>
)

export default Container
