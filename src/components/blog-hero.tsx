import cn from 'classnames'
import React from 'react'

import { AuthorLink } from './author'
import Container from './freestanding/containers/container'
import Grid from './freestanding/containers/grid'
import ContentText from './freestanding/content/content-text'
import Molecule from './freestanding/molecule/molecule'

import { blogHero } from './blog-hero.module.css'
import { pb16, pb24, pb32, pb48 } from './freestanding/utils/padding.module.css'

interface PropTypes {
  title: string
  date?: string
  author: string
  overline?: string
  subtitle?: string
}

const BlogHero = ({ title, date, author, overline, subtitle }: PropTypes) => (
  <div className={cn(blogHero)}>
    <Container fluid={true} alignItems={'center'} justify={'center'}>
      <Grid lg={7} md={10} sm={12} xs={12}>
        <ContentText>
          <Molecule>
            <h3 className={cn('font-overline', 'primary', pb16)}>{overline}</h3>
            <h2 className={cn('font-h3', pb32)}>{title}</h2>
            {subtitle && (
              <p className={cn('font-p-sm', 'mute-85', pb24)}>{subtitle}</p>
            )}
            <AuthorLink className={cn('font-p-sm')} name={author} />
            <p className={cn('font-p-sm', 'mute-60')}>{date}</p>
          </Molecule>
        </ContentText>
      </Grid>
    </Container>
  </div>
)

export default BlogHero
