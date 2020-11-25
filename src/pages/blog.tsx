import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogHero from '../components/blog-hero'
import Markdown from '../components/markdown'
import BlogSection from '../components/blog-section'
import { node } from 'prop-types'

import * as styles from './blog.module.css'

const Post = ({
                node: {
                  frontmatter: { path, title, teaser, overline, category, author, publishedAt },
                  id,
                  excerpt,
                },
              }: any) => (
  <div>
    <p className={styles.postOverline}>{category}</p>
    <h2 className={styles.postTitle}>
      <Link to={path}>{title}</Link>
    </h2>
    <p className={styles.postTeaser}>{teaser}</p>
    <p className={styles.info}>
      <span className={styles.author}>{author}</span> - {publishedAt}
    </p>
  </div>
)

const BlogPostsPage = ({
                         data: {
                           allMarkdownRemark: { edges },
                         },
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
            <Post node={node}/>
          </div>
        ))}
      </div>
    </BlogSection>
  </Layout>
)
export default BlogPostsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: [frontmatter___publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            publishedAt(formatString: "MMMM DD, YYYY")
            author
            path
            title
            teaser
            overline
            category
          }
        }
      }
    }
  }
`
