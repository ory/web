import React, { ReactNode } from 'react'
import * as styles from './blog-section.module.css'

interface PropTypes {
  children: ReactNode
  overrideStyles?: object
}

const BlogSection = ({ children, overrideStyles }: PropTypes) => (
  <div className={styles.section} style={overrideStyles}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1  col-md-8 col-md-offset-2  col-lg-8 col-lg-offset-2">
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default BlogSection
