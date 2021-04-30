import React, { useEffect } from 'react'
import * as styles from './code.module.css'
import cn from 'classnames'
import Prism from 'prismjs'
import Container from '../containers/container'

interface PropTypes {
  className?: string
  code: string
}

const Code = ({ code, className }: PropTypes) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div className={cn(className && className)}>
      <div className={cn(styles.windowToolbar)}>
        <div className={styles.editorHeader}>
          <div className={styles.windowActions}>
            <div className={cn(styles.windowAction, styles.primary)} />
            <div className={cn(styles.windowAction, styles.second)} />
            <div className={cn(styles.windowAction, styles.third)} />
          </div>
        </div>
      </div>
      <div className={cn(styles.codeContainer, styles.codeHighlights)}>
        <pre className={cn('font-p-mono', styles.codeHighlights)}>
          <code className={cn('language-javascript', styles.codeHighlights)}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default Code
