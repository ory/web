import React from 'react'
import * as styles from './molecule-separator.module.css'
import cn from 'classnames'

interface PropTypes {
  className?: string
  style: 'horizontal' | 'vertical'
}

const getStyle = (style: string) => {
  return style === 'vertical'
    ? styles.moleculeSeparatorVertical
    : styles.moleculeSeparatorHorizontal
}

const MoleculeSeparator = ({ className, style = 'vertical' }: PropTypes) => (
  <div
    className={cn(
      styles.moleculeSeparator,
      getStyle(style),
      className && className
    )}
  />
)

export default MoleculeSeparator
