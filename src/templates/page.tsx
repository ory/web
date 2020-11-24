import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogSection from '../components/blog-section'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import BlogHero from '../components/blog-hero'

export default function PageTemplate(props: any) {
  const { mdx } = props.data // data.mdx holds our post data
  const { frontmatter: fn, body } = mdx

  return (
    <Layout>
      <SEO description={fn.metaDescription || ''} title={fn.metaTitle} />
      <BlogHero
        title={fn.title}
        date={fn.lastUpdatedAt && `Last updated at ${fn.lastUpdatedAt}`}
      />
      <BlogSection>
        <MDXRenderer>{body}</MDXRenderer>
      </BlogSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
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
