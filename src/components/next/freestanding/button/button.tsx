import React from 'react'
import * as styles from './button.module.css'
import { Link as GatsbyLink } from 'gatsby'
import cn from 'classnames'
import Container from '../containers/container'
import { pl8, pr8 } from '../utils/padding.module.css'
import { ParseCase } from '../../../../util'

export interface PropTypes {
  children?: React.ReactNode
  className?: string
  style: 'filled' | 'outlined' | 'text'
  theme?: 'light' | 'dark' | 'grey'
  to: string
  openInNewWindow?: boolean
  disabled?: boolean
  iconRight?: React.ReactElement
  iconLeft?: React.ReactElement
}

const Button = ({
  children,
  className,
  style = 'filled',
  theme = 'light',
  to,
  openInNewWindow = false,
  disabled = false,
  iconRight,
  iconLeft
}: PropTypes) => {
  const getStyle = (style: string, theme: string) => {
    // @ts-ignore
    return styles[`style${ParseCase(style)}${ParseCase(theme)}`]
  }

  const classes = cn(
    styles.btnBase,
    getStyle(style, theme),
    'font-base',
    'font-btn',
    disabled && styles.disabled,
    className && className
  )

  return to.startsWith('/') ? (
    <GatsbyLink
      to={to}
      className={classes}
      rel={openInNewWindow ? 'noopener noreferrer' : ''}
      target={openInNewWindow ? '_blank' : ''}
    >
      {iconLeft && <div className={cn(pr8)}>{iconLeft}</div>}
      {children}
      {iconRight && <div className={cn(pl8)}>{iconRight}</div>}
    </GatsbyLink>
  ) : (
    <a
      href={to}
      className={classes}
      rel={openInNewWindow ? 'noopener noreferrer' : ''}
      target={openInNewWindow ? '_blank' : ''}
    >
      {iconLeft && <div className={cn(pr8)}>{iconLeft}</div>}
      {children}
      {iconRight && <div className={cn(pl8)}>{iconRight}</div>}
    </a>
  )
}

export default Button
