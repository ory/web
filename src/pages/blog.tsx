import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogSection from '../components/blog-section'

import * as styles from './blog.module.css'
import cn from 'classnames'

const Post = ({
  node: {
    frontmatter: { path, banner, overline, title, teaser, author, publishedAt }
  }
}: any) => (
  <Link to={path}>
    <div className={styles.postBox}>
      <div className={cn(styles.postImg)}>
        <img src={banner} alt={overline} />
      </div>
      <div className={cn(styles.postContent)}>
        <p className={styles.postOverline}>{overline}</p>
        <h2 className={styles.postTitle}>{title}</h2>
        <p className={styles.postTeaser}>{teaser}</p>
        <p className={styles.info}>
          <span className={styles.author}>{author}</span> - {publishedAt}
        </p>
      </div>
    </div>
  </Link>
)

const BlogPostsPage = ({
  data: {
    allMdx: { edges }
  }
}: any) => (
  <Layout>
    <SEO
      title={'Developer Blog and Articles'}
      description={
        'Read articles and blog posts from ORY core contributors and maintainers.'
      }
    />
    <BlogSection overrideStyles={{ paddingTop: 32, paddingBottom: 32 }}>
      <h1 className={styles.pageTitle}>Developer Blog & Articles</h1>
      <div className={styles.postList}>
        {edges.map(({ node }: any) => (
          <div key={node.id} className={styles.postItem}>
            <Post node={node} />
          </div>
        ))}
      </div>
    </BlogSection>
  </Layout>
)
export default BlogPostsPage

export const pageQuery = graphql`
  query {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { published: { ne: false } }
      }
      sort: { fields: [frontmatter___publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            seo {
              title
              description
            }
            publishedAt(formatString: "MMMM DD, YYYY")
            author
            path
            title
            teaser
            overline
            banner
          }
        }
      }
    }
  }
`
