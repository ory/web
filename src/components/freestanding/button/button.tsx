import cn from 'classnames'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

import { ParseCase } from '../../../util'

import { pl8, pr8 } from '../utils/padding.module.css'
import * as styles from './button.module.css'

export interface PropTypes {
  children?: React.ReactNode
  className?: string
  style: 'filled' | 'outlined' | 'text' | 'none' | 'link' | 'link-inline'
  theme?: 'light' | 'dark' | 'grey'
  to: string | (() => void)
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
  const getStyle = (style: string, theme: string): string => {
    // @ts-ignore
    return styles[`style${ParseCase(style)}${ParseCase(theme)}`]
  }

  let classes: Array<string> = []

  if (style !== 'none') {
    classes = classes.concat([styles.btnBase, getStyle(style, theme)])
  }

  if (style == 'link') {
    classes = classes.concat(['font-link', 'font-link-md'])
  } else {
    classes.push('font-btn')
  }

  if (style == 'link-inline') {
    classes = classes.filter(
      (val) => !['font-btn', styles.btnBase].includes(val)
    )
  }

  if (disabled) {
    classes.push(styles.disabled)
  }

  if (className) {
    classes.push(className)
  }

  if (typeof to === 'string') {
    return to.startsWith('/') && !to.startsWith('/docs') ? (
      <GatsbyLink
        to={to}
        className={cn(...classes)}
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        target={openInNewWindow ? '_blank' : ''}
      >
        {iconLeft && (
          <span className={cn(pr8, styles.btnTextContainer)}>{iconLeft}</span>
        )}
        <span className={cn(styles.btnTextContainer)}>{children}</span>
        {iconRight && (
          <span className={cn(pl8, styles.btnTextContainer)}>{iconRight}</span>
        )}
      </GatsbyLink>
    ) : (
      <a
        href={to}
        className={cn(...classes)}
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        target={openInNewWindow ? '_blank' : ''}
      >
        {iconLeft && (
          <span className={cn(pr8, styles.btnTextContainer)}>{iconLeft}</span>
        )}
        <span className={cn(styles.btnTextContainer)}>{children}</span>
        {iconRight && (
          <span className={cn(pl8, styles.btnTextContainer)}>{iconRight}</span>
        )}
      </a>
    )
  } else {
    return (
      <a className={cn(...classes)} onClick={to}>
        {iconLeft && (
          <span className={cn(pr8, styles.btnTextContainer)}>{iconLeft}</span>
        )}
        <span className={cn(styles.btnTextContainer)}>{children}</span>
        {iconRight && (
          <span className={cn(pl8, styles.btnTextContainer)}>{iconRight}</span>
        )}
      </a>
    )
  }
}

export default Button
