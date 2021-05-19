import React from 'react'
import * as styles from './resource-box.module.css'
import cn from 'classnames'
import { ParseCase } from '../../../../../util'

export interface PropTypes {
  children: React.ReactNode
  className?: string
  color: string
}

const getTheme = (color: string) => {
  // @ts-ignore
  return styles[`resourceBox${ParseCase(color)}`]
}

const ResourceBox = ({ children, className, color = 'keto' }: PropTypes) => (
  <div
    className={cn(styles.resourceBox, getTheme(color), className && className)}
  >
    {children}
  </div>
)

export default ResourceBox
