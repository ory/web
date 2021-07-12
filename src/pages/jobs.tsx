import React from 'react'

import Button from '../components/freestanding/button/button'
import HeroFeatures from '../components/layouts/hero/hero-features'
import { heroFeaturesJobsBenefits } from '../components/layouts/hero/hero-features-content'
import { heroFeaturesJobsValues } from '../components/layouts/hero/hero-features-content'
import JobsList from '../components/layouts/jobs/jobs-list'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartJobs } from '../components/layouts/quickstart/quickstart-content'
import SEO from '../components/layouts/seo/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        description={
          'Build scalable open source software at one of the fastest growing startups in the space of cloud identity'
        }
        title={'Ory Jobs - Join The Team! '}
      />

      <HeroFeatures {...heroFeaturesJobsBenefits} />

      <JobsList
        title={'Open positions'}
        description={
          <>
            Today, Ory powers organizations of all sizes — from single-person
            startups to multinational enterprises - and we are only just getting
            started. We are looking for talented, creative people to build the
            future of Ory with us.
          </>
        }
      />
      <HeroFeatures {...heroFeaturesJobsValues} />
      <Quickstart {...quickstartJobs} />
    </Layout>
  )
}

export default IndexPage
