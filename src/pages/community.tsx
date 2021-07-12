import React from 'react'

import Button from '../components/freestanding/button/button'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'
import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Coding from '../components/layouts/coding/coding'
import Layout from '../components/layouts/layout/layout'
import Projects from '../components/layouts/projects/projects'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'

import codeboxIllustration from '../images/illustrations/codebox.svg'

const IndexPage = () => {
  const BookOpen = (
    <i className={'base-white ph-book-open ph-book-open-duotone size24'} />
  )
  const Terminal = (
    <i className={'themed-primary ph-terminal ph-terminal-duotone size32'} />
  )
  const ArrowRight = <i className={'base-white ph-arrow-right-bold size16'} />
  const GitMerge = (
    <i className={'themed-primary ph-git-merge ph-git-merge-duotone size32'} />
  )

  return (
    <Layout>
      <SEO
        description={
          '#Community SEO'
        }
        title={'#Community SEO'}
      />

      <Projects
        overline={'Open Source'}
        title={<>Ory Community</>}
        description={
          <>
            Something something ory community. Something something ory community Something something ory community Something something ory community
          </>
        }
      />

      <Quickstart {...quickstartOpenSource} />
    </Layout>
  )
}

export default IndexPage
