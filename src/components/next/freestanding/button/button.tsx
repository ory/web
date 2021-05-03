import React from 'react'
import * as styles from './button.module.css'

import cn from 'classnames'

export interface PropTypes {
  children?: React.ReactNode
  className?: string
  /*  size: 'small' | 'medium' | 'large'*/
  style: 'filled' | 'outlined' | 'text'
  theme?: 'light' | 'dark'
  href: string
  openInNewWindow?: boolean
  disabled?: boolean
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
  href,
  openInNewWindow = false,
  disabled = false
}: PropTypes) => {
  const getStyle = (style: string, theme: string) => {
    // @ts-ignore
    return styles[`style${parseCase(style)}${parseCase(theme)}`]
    /*switch (style) {
      case 'filled':
        return styles.styleFilled
      case 'outlined':
        return styles.styleOutlined
      case 'text':
        return styles.styleText
      default:
        return styles.styleFilled
    }*/
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
  return (
    <a
      href={href}
      className={classes}
      rel={openInNewWindow ? 'noopener noreferrer' : ''}
      target={openInNewWindow ? '_blank' : ''}
    >
      {children}
    </a>
  )
}

export default Button
