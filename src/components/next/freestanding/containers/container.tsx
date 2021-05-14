import React from 'react'
import * as styles from './container.module.css'
import cn from 'classnames'
import { ParseCase } from '../../../../util'

export interface PropTypes {
  children: React.ReactNode
  className?: string
  flexContainer?: 'row' | 'column'
  alignItems?: 'start' | 'center' | 'end' | 'stretch'
  justify?:
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'start'
    | 'end'
    | 'stretch'
  fluid?: false | true
  lgHidden?: boolean
  mdHidden?: boolean
  smHidden?: boolean
  xsHidden?: boolean
  editMode?: false | true
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

const getHidden = (mode: string) => {
  // @ts-ignore
  return styles[`hidden${ParseCase(mode)}`]
}

const Container = ({
  children,
  className,
  flexContainer = 'row',
  alignItems = 'center',
  justify = 'space-between',
  fluid = false,
  lgHidden = false,
  mdHidden = false,
  smHidden = false,
  xsHidden = false,
  editMode = false
}: PropTypes) => (
  <div
    className={cn(fluid && styles.containerFluid, editMode && styles.editMode)}
  >
    <div
      className={cn(
        styles.container,
        getFlex(flexContainer),
        alignItems && getAlign(alignItems),
        justify && getJustify(justify),
        xsHidden && getHidden('xs'),
        smHidden && getHidden('sm'),
        mdHidden && getHidden('md'),
        lgHidden && getHidden('lg'),
        className && className
      )}
    >
      {children}
    </div>
  </div>
)

export default Container
