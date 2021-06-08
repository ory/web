import React, { forwardRef } from 'react'
import * as styles from './container.module.css'
import cn from 'classnames'
import { ParseCase } from '../../../util'
import { Viewports } from './grid'

type FlexJustify =
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'start'
  | 'end'
  | 'stretch'
type FlexAlign = 'start' | 'center' | 'end' | 'stretch'

export interface PropTypes {
  children: React.ReactNode
  className?: string
  flexContainer?: 'row' | 'column'
  alignItems?:
    | Array<FlexAlign | `${FlexAlign}-${Viewports}`>
    | FlexAlign
    | `${FlexAlign}-${Viewports}`
  justify?:
    | Array<FlexJustify | `${FlexJustify}-${Viewports}`>
    | FlexJustify
    | `${FlexAlign}-${Viewports}`
  fluid?: false | true
  lgHidden?: boolean
  mdHidden?: boolean
  smHidden?: boolean
  xsHidden?: boolean
  noWrap?: boolean
  editMode?: false | true
}

const getFlex = (flex: string) => {
  // @ts-ignore
  return styles[flex]
}

const getAlign = (align: Array<string> | string) => {
  if (typeof align === 'string') {
    // @ts-ignore
    return styles[`flex${ParseCase(align)}`]
  }

  if (align instanceof Array) {
    const s: Array<string> = []
    align.map((a) => {
      // @ts-ignore
      s.push(styles[`flex${ParseCase(a)}`])
    })
    return s
  }
}

const getJustify = (justify: Array<string> | string) => {
  if (typeof justify === 'string') {
    // @ts-ignore
    return styles[`justify${ParseCase(justify)}`]
  }
  if (justify instanceof Array) {
    const s: Array<string> = []
    justify.map((j) => {
      // @ts-ignore
      s.push(styles[`justify${ParseCase(j)}`])
    })
    return s
  }
}

const getHidden = (mode: string) => {
  // @ts-ignore
  return styles[`hidden${ParseCase(mode)}`]
}

const Container = forwardRef(
  (
    {
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
      editMode = false,
      noWrap = false
    }: PropTypes,
    ref: any
  ) => (
    <div
      ref={ref}
      className={cn(
        fluid && styles.containerFluid,
        editMode && styles.editMode,
        styles.container,
        noWrap && styles.noWrap,
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
  )
)

export default Container
