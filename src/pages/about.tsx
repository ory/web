import React from 'react'

import Banner from '../components/layouts/banner/banner'
import { bannerContentJobs } from '../components/layouts/banner/banner-content'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartAbout } from '../components/layouts/quickstart/quickstart-content'
import SEO from '../components/layouts/seo/seo'
import SimpleText from '../components/layouts/simple-text/simple-text'
import Team from '../components/layouts/team/team'
import TeamImage from '../components/layouts/team/team-image'
import {
  teamCollaborators,
  teamCommunity,
  teamMembers
} from '../components/layouts/team/team-members'

const AboutPage = () => (
  <Layout>
    <SEO
      description="Secure open source IAM, authorization and access control infrastructure for the cloud."
      title="Ory - A modern open source identity solution"
    />
    <SimpleText
      title={'About Us'}
      text={
        <>
          Our mission is to provide a common access control, authorization and
          identity infrastructure that manages IAM and the associated data
          created in cloud applications. We deliver the information and
          associated analytics to members in the network in accordance with data
          privacy and usage conventions.
        </>
      }
    />
    <Team {...teamMembers} />
    <Banner {...bannerContentJobs} />
    <Team {...teamCollaborators} />
    <TeamImage {...teamCommunity} />
    <Quickstart {...quickstartAbout} />
  </Layout>
)

export default AboutPage
