import React from 'react'
import * as styles from './layout.module.css'
import cn from 'classnames'

interface PropTypes {
  children?: React.ReactNode
}

const Layout = ({ children }: PropTypes) => (
  <div>
    <main className={cn(styles.layout)}>{children}</main>
  </div>
)

export default Layout
