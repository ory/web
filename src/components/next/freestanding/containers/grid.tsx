import React from 'react'
import * as styles from './grid.module.css'
import cn from 'classnames'

interface PropTypes {
  children: React.ReactNode
  className?: string
  xs?: 1 | 2 | 3 | 4
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const Grid = ({ children, className, xs, sm, md, lg }: PropTypes) => {
  const getLg = (i: number) => {
    // @ts-ignore
    return styles[`colLg${i}`]
  }
  
  const getMd = (i: number) => {
    // @ts-ignore
    return styles[`colMd${i}`]
  }
  
  const getSm = (i: number) => {
    // @ts-ignore
    return styles[`colSm${i}`]
  }
  
  const getXs = (i: number) => {
    // @ts-ignore
    return styles[`colXs${i}`]
  }
  
  return (
    <div
      className={cn(
        lg && getLg(lg),
        md && getMd(md),
        sm && getSm(sm),
        xs && getXs(xs),
        className && className
      )}
    >
      {children}
    </div>
  )
}

export default Grid
