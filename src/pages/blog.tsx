import cn from 'classnames'
import { graphql } from 'gatsby'
import React from 'react'

import { AuthorName } from '../components/author'
import BlogSection from '../components/blog-section'
import Button from '../components/freestanding/button/button'
import Container from '../components/freestanding/containers/container'
import ContentText from '../components/freestanding/content/content-text'
import Molecule from '../components/freestanding/molecule/molecule'
import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'

import {
  pb16,
  pb24,
  pb32
} from '../components/freestanding/utils/padding.module.css'
import * as styles from './blog.module.css'

const Post = ({
  node: {
    frontmatter: { path, overline, title, teaser, author, publishedAt }
  }
}: any) => (
  <Button style={'none'} to={path} className={cn(styles.postBox)}>
    <ContentText>
      <Molecule>
        <h3 className={cn('font-overline', 'primary', pb16)}>{overline}</h3>
        <h2 className={cn('font-h4', pb32)}>{title}</h2>
        <p className={cn('font-p-sm', 'mute-85', pb24)}>{teaser}</p>
        <p className={cn('font-p-sm', 'mute-40')}>
          <AuthorName className={cn('font-p-sm')} name={author} /> -{' '}
          {publishedAt}
        </p>
      </Molecule>
    </ContentText>
  </Button>
)

const BlogPostsPage = ({
  data: {
    allMdx: { edges }
  }
}: any) => (
  <Layout>
    <SEO
      title={'Ory Developer Blog and Articles'}
      description={
        'Read articles and blog posts from Ory core contributors and maintainers.'
      }
    />
    <BlogSection alt={true}>
      <h1 className={cn('font-h1', pb32)}>Developer Blog & Articles</h1>
      <Container alignItems={'stretch'} align-content={'stretch'}>
        {edges.map(({ node }: any) => (
          <Container
            align-content={'start'}
            key={node.id}
            className={cn(styles.postContainer)}
          >
            <Post node={node} />
          </Container>
        ))}
      </Container>
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
          }
        }
      }
    }
  }
`
