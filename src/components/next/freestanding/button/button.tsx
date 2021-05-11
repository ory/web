import React from 'react'
import * as styles from './button.module.css'
import { Link as GatsbyLink } from 'gatsby'
import cn from 'classnames'
import Container from '../containers/container'
import * as padding from '../utils/padding.module.css'

export interface PropTypes {
  children?: React.ReactNode
  className?: string
  style: 'filled' | 'outlined' | 'text'
  theme?: 'light' | 'dark'
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
    return styles[`style${parseCase(style)}${parseCase(theme)}`]
  }

  const parseCase = (s: string) => {
    const ss = s.split('-')
    let final = ''
    if (ss.length > 0) {
      for (const word of ss) {
        final += (word.charAt(0).toUpperCase() + word.slice(1)).replace('-', '')
      }
    } else {
      final += s.charAt(0).toUpperCase() + s.slice(1)
    }
    return final
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
      <Container justify={'center'} alignItems={'start'}>
        {iconLeft && <div className={cn(padding.mr8)}>{iconLeft}</div>}
        {children}
        {iconRight && <div className={cn(padding.ml8)}>{iconRight}</div>}
      </Container>
    </GatsbyLink>
  ) : (
    <Container justify={'center'} alignItems={'center'}>
      <a
        href={to}
        className={classes}
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        target={openInNewWindow ? '_blank' : ''}
      >
        {iconLeft && <div className={cn(padding.mr8)}>{iconLeft}</div>}
        {children}
        {iconRight && <div className={cn(padding.ml8)}>{iconRight}</div>}
      </a>
    </Container>
  )
}

export default Button
