import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Link from '../components/link'
import * as styles from './blog-summary-section.module.css'
import cn from 'classnames'

type Edge = {
  node: {
    id: string
    frontmatter: {
      title: string
      path: string
      teaser: string
      category: string
    }
  }
}

const BlogSummarySection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/blog/" }
          frontmatter: { published: { ne: false } }
        }
        sort: { fields: [frontmatter___publishedAt], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              teaser
              category
              title
            }
          }
        }
      }
    }
  `)

  const posts = (data.allMdx.edges as Edge[]).map(({ node }) => node)
  return (
    <div className={cn(styles.blogSummary)}>
      <div className="container-fluid">
        <div className={cn('row')}>
          <div
            className={cn(
              'col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10',
              styles.blogRow
            )}
          >
            {posts.map(({ id, frontmatter: { title, teaser, path } }) => (
              <Link key={id} to={path} className={cn(styles.blogBox)}>
                <h3 className={cn('col-lg-offset-1 col-lg-10')}>{title}</h3>
                <p className={cn('col-lg-offset-1 col-lg-10', 'secondary')}>
                  {teaser}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSummarySection
