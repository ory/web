import React from 'react'
import * as styles from './codebox.module.css'
import cn from 'classnames'

export interface PropTypes {
  code: string
}

const CodeBox = ({ code }: PropTypes) => (
  <div className={cn(styles.codebox)}>
    <div className={cn(styles.codeboxText)}>
      <code dangerouslySetInnerHTML={{ __html: `${code}` }} />
    </div>
  </div>
)

export default CodeBox
