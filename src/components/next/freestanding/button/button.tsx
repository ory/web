import React from 'react'
import * as styles from './button.module.css'

import cn from 'classnames'

export interface PropTypes {
  children?: React.ReactNode
  className?: string
  size: 'small' | 'medium' | 'large'
  style: 'filled' | 'outlined' | 'text'
  href: string
  openInNewWindow?: boolean
}

const getStyle = (style: string) => {
  switch (style) {
    case 'filled':
      return styles.styleFilled
    case 'outlined':
      return styles.styleOutlined
    case 'text':
      return styles.styleText
    default:
      return styles.styleFilled
  }
}

const getSize = (size: string) => {
  switch (size) {
    case 'small':
      return 'font-btn-sm'
    case 'medium':
      return 'font-btn-md'
    case 'large':
      return 'font-btn-lg'
  }
}

const Button = ({
  children,
  className,
  size = 'medium',
  style = 'filled',
  href,
  openInNewWindow = false
}: PropTypes) => {
  return (
    <a
      href={href}
      className={cn(
        styles.btnBase,
        getStyle(style),
        'font-base',
        'font-btn',
        getSize(size),
        className && className
      )}
      rel={openInNewWindow ? 'noopener noreferrer' : ''}
      target={openInNewWindow ? '_blank' : ''}
    >
      {children}
    </a>
  )
}

export default Button
