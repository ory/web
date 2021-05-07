import React from 'react'
import * as styles from './button.module.css'
import { Link as GatsbyLink } from 'gatsby'
import cn from 'classnames'

export interface PropTypes {
  children?: React.ReactNode
  className?: string
  /*  size: 'small' | 'medium' | 'large'*/
  style: 'filled' | 'outlined' | 'text'
  theme?: 'light' | 'dark'
  to: string
  openInNewWindow?: boolean
  disabled?: boolean
  iconRight?: React.ReactNode
}

/*const getSize = (size: string) => {
  switch (size) {
    case 'small':
      return 'font-btn-sm'
    case 'medium':
      return 'font-btn-md'
    case 'large':
      return 'font-btn-lg'
  }
}*/

const Button = ({
  children,
  className,
  /*size = 'medium',*/
  style = 'filled',
  theme = 'light',
  to,
  openInNewWindow = false,
  disabled = false,
  iconRight,
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
      {children}
      {iconRight && (
        <div className={cn(styles.iconRight)}>{iconRight}</div>
      )}
    </GatsbyLink>
  ) : (
    <a
      href={to}
      className={classes}
      rel={openInNewWindow ? 'noopener noreferrer' : ''}
      target={openInNewWindow ? '_blank' : ''}
    >
      {children}
    </a>
  )
}

export default Button
