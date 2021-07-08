import cn from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'
import duotoneDark from 'prism-react-renderer/themes/duotoneDark'
import Prism from 'prismjs'
import React, { useEffect } from 'react'
import styled from 'styled-components'

import Container from '../containers/container'

import * as styles from './code.module.css'

interface PropTypes {
  className?: string
  code: string
}

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: hidden;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`

const Code = ({ code, className }: PropTypes) => {
  /*useEffect(() => {
    Prism.highlightAll()
  })*/

  return (
    <div className={cn(className && className, styles.windowContainer)}>
      <div className={cn(styles.windowToolbar)}>
        <div className={styles.editorHeader}>
          <div className={styles.windowActions}>
            <div className={cn(styles.windowAction, styles.primary)} />
            <div className={cn(styles.windowAction, styles.second)} />
            <div className={cn(styles.windowAction, styles.third)} />
          </div>
        </div>
      </div>
      <Highlight
        {...defaultProps}
        code={code}
        language={'javascript'}
        theme={duotoneDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={cn(styles.codeHighlights, className)} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
      {/*<div className={cn(styles.codeContainer, styles.codeHighlights)}>
        <pre className={cn('font-p-mono', styles.codeHighlights)}>
          <code className={cn('language-javascript', styles.codeHighlights)}>
            {code}
          </code>
        </pre>
      </div>*/}
    </div>
  )
}

export default Code
