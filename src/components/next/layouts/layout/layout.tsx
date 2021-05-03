import React from 'react'

interface PropTypes {
  children?: React.ReactNode
}

const Layout = ({children}: PropTypes) => (
  <div>
    <main>{children}</main>
  </div>
)

export default Layout
