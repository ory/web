import React from 'react'
import { graphql } from 'gatsby'
import BlogSection from '../components/blog-section'
import BlogHero from '../components/blog-hero'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function BlogTemplate(props: any) {
  const { mdx } = props.data // data.mdx holds our post data
  const { frontmatter: fn, body } = mdx
  return (
    <Layout>
      <SEO
        description={fn.seo?.description || fn.description}
        title={fn.seo?.title || fn.title}
        keywords={fn.seo?.keywords || ''}
        canonical={fn.seo?.canonical}
      />
      <BlogHero
        title={fn.title}
        overline={fn.overline}
        date={fn.publishedAt}
        author={fn.author}
        subtitle={fn.subtitle}
      />
      <BlogSection>
        <MDXRenderer>{body}</MDXRenderer>
      </BlogSection>
      <Newsletter
        left={
          <>
            <h3>Never miss an article</h3>
            <p>
              Ory ships regular product patches and updates. Subscribe to our
              newsletter to get the good stuff, and stay up to date.
            </p>
          </>
        }
      />
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
        author
        overline
        subtitle
        seo {
          title
          description
          keywords
          canonical
        }

        publishedAt(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
