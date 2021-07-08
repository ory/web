import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

import BlogHero from '../components/blog-hero'
import BlogSection from '../components/blog-section'
import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'

export default function PageTemplate(props: any) {
  const { mdx } = props.data // data.mdx holds our post data
  const { frontmatter: fn, body } = mdx

  return (
    <Layout>
      <SEO description={fn.metaDescription || ''} title={fn.metaTitle} />
      <BlogHero
        title={fn.title}
        author={fn.author}
        date={fn.lastUpdatedAt && `Last updated at ${fn.lastUpdatedAt}`}
      />
      <BlogSection alt={false}>
        <MDXRenderer>{body}</MDXRenderer>
      </BlogSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        metaTitle
        metaDescription
        lastUpdatedAt
      }
    }
  }
`
