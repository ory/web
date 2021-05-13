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
  style: 'filled' | 'outlined' | 'text' | 'none' | 'link'
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

  let classes = [disabled && styles.disabled, className && className]

  if (style !== 'none') {
    classes = classes.concat([
      styles.btnBase,
      getStyle(style, theme),
      'font-base'
    ])
  }

  if (style == 'link') {
    classes = classes.concat(['font-link', 'font-link-md'])
  } else {
    classes.push('font-btn')
  }

  return to.startsWith('/') ? (
    <GatsbyLink
      to={to}
      className={cn(...classes)}
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
      className={cn(...classes)}
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
