import React from 'react'
import * as styles from './grid.module.css'
import cn from 'classnames'

interface PropTypes {
  children: React.ReactNode
  className?: string
  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  lgOffset?: boolean
  mdOffset?: boolean
  smOffset?: boolean
}

const Grid = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  lgOffset = true,
  mdOffset = true,
  smOffset = true
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

  return (
    <div
      className={cn(
        lg && getLg(lg),
        lgOffset && styles.colLgOffset1,
        md && getMd(md),
        mdOffset && styles.colMdOffset1,
        sm && getSm(sm),
        smOffset && styles.colSmOffset1,
        className && className
      )}
    >
      {children}
    </div>
  )
}

export default Grid
