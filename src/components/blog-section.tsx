import React, { ReactNode } from 'react'
import * as styles from './blog-section.module.css'
import cn from 'classnames'
import Container from './freestanding/containers/container'
import Grid from './freestanding/containers/grid'
import { pb32 } from './freestanding/utils/padding.module.css'

interface PropTypes {
  children: ReactNode
  alt?: boolean
  overrideStyles?: object
}

const BlogSection = ({ children, alt, overrideStyles }: PropTypes) => (
  <div
    className={!alt ? styles.blogSection : styles.blogSectionAlt}
    style={overrideStyles}
  >
    <Container fluid={true} alignItems={'center'} justify={'center'}>
      <Grid lg={7} md={10} sm={12} xs={12} className={cn(pb32)}>
        {children}
      </Grid>
    </Container>
  </div>
)

export default BlogSection
