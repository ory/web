import cn from 'classnames'
import React from 'react'

import {
  moleculeSeparatorVertical,
  moleculeSeparatorHorizontal,
  moleculeSeparator
} from './molecule-separator.module.css'

interface PropTypes {
  className?: string
  style: 'horizontal' | 'vertical'
}

const getStyle = (style: string) => {
  return style === 'vertical'
    ? moleculeSeparatorVertical
    : moleculeSeparatorHorizontal
}

const MoleculeSeparator = ({ className, style = 'vertical' }: PropTypes) => (
  <div
    className={cn(moleculeSeparator, getStyle(style), className && className)}
  />
)

export default MoleculeSeparator
