import React from 'react'
import * as styles from './container.module.css'
import cn from 'classnames'
import { ParseCase } from '../../../util'

export type Grid = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Viewports = 'lg' | 'md' | 'sm' | 'xs'

interface PropTypes {
  children: React.ReactNode
  className?: string
  xs?: Grid
  sm?: Grid
  md?: Grid
  lg?: Grid
  lgOffset?: boolean
  mdOffset?: boolean
  smOffset?: boolean
  xsOffset?: boolean
  lgHidden?: boolean
  mdHidden?: boolean
  smHidden?: boolean
  xsHidden?: boolean
}

const Grid = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  lgOffset = false,
  mdOffset = false,
  smOffset = false,
  xsOffset = false,
  lgHidden = false,
  mdHidden = false,
  smHidden = false,
  xsHidden = false
}: PropTypes) => {
  const getLg = (i: number) => {
    // @ts-ignore
    return styles[`colLg${i}`]
    //return `col-lg-${i} col-lg-offset-1`
  }

  const getMd = (i: number) => {
    // @ts-ignore
    return styles[`colMd${i}`]
    //return `col-md-${i} col-md-offset-1`
  }

  const getSm = (i: number) => {
    // @ts-ignore
    return styles[`colSm${i}`]
    //return `col-sm-${i} col-sm-offset-1`
  }

  const getXs = (i: number) => {
    // @ts-ignore
    return styles[`colXs${i}`]
    //return `col-xs-${i}`
  }

  const getHidden = (mode: string) => {
    // @ts-ignore
    return styles[`hidden${ParseCase(mode)}`]
  }

  return (
    <div
      className={cn(
        lg && getLg(lg),
        lgOffset && styles.colLgOffset1,
        lgHidden && getHidden('lg'),
        md && getMd(md),
        mdOffset && styles.colMdOffset1,
        mdHidden && getHidden('md'),
        sm && getSm(sm),
        smOffset && styles.colSmOffset1,
        smHidden && getHidden('sm'),
        xs && getXs(xs),
        xsOffset && styles.colXsOffset1,
        xsHidden && getHidden('xs'),
        className && className
      )}
    >
      {children}
    </div>
  )
}

export default Grid
