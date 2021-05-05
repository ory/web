import React, { useEffect } from 'react'
import * as styles from './terminal.module.css'
import cn from 'classnames'
import Prism from 'prismjs'

interface PropTypes {
  className?: string
  code: string
}

const Terminal = ({ code, className }: PropTypes) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div
      className={cn(
        styles.terminal,
        styles.terminalContainer,
        className && className
      )}
    >
      <pre className={cn('font-p-mono', styles.terminalCode)}>
        <code className={cn('language-shell', styles.terminalCode)}>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default Terminal
