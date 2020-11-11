import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as styles from './blog-summary-section.module.css'
import cn from 'classnames'

type Edge = {
  node: {
    id: string
    excerpt: string
    frontmatter: {
      title: string
      path: string
      teaser: string
      overline: string
      category: string
    }
  }
}

const BlogSummarySection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/blog/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: [frontmatter___publishedAt], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
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

  const posts = (data.allMarkdownRemark.edges as Edge[]).map(({ node }) => node)
  return (
    <div className={cn(styles.blogSummary)}>
      <div className="container-fluid">
        <div className={cn('row middle-lg')}>
          <div
            className={cn(
              'col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10',
              styles.blogRow
            )}
          >
            {posts.map(
              ({
                id,
                excerpt,
                frontmatter: { title, overline, teaser, path },
              }) => (
                <Link key={id} to={path} className={cn(styles.blogBox)}>
                  <h4 className={cn('col-lg-offset-1 col-lg-10')}>{title}</h4>
                  <p className={cn('col-lg-offset-1 col-lg-10', 'secondary')}>
                    {teaser}
                  </p>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSummarySection
