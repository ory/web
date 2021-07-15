import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../components/freestanding/button/button'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import FeatureImage from '../components/layouts/feature-image/feature-image'
import Projects from '../components/layouts/projects/projects'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartCommunity } from '../components/layouts/quickstart/quickstart-content'
import SEO from '../components/layouts/seo/seo'

import codeboxIllustration from '../images/illustrations/codebox.svg'

const CommunityPage = () => {
  const RocketLaunch = <i className="ph-rocket-launch base-white size24" />

  return (
    <Layout>
      <SEO
        description={'#Community SEO'}
        title={'#Community SEO'}
        keywords={
          'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
        }
      />

      <Hero
        title={'Ory Community'}
        description={
          'The Ory community is the backbone of Ory. Our members are from dozens of countries, working for huge enterprises and small projects. We may have many differences but we all share the same goal: To never build auth again.'
        }
        buttons={
          <Button
            to={'https://slack.ory.sh/'}
            style={'filled'}
            iconRight={RocketLaunch}
          >
            Join our chat
          </Button>
        }
        image={
          <StaticImage
            src="../images/illustrations/hero.png"
            loading="lazy"
            alt="Overview of the Ory Console"
            className="responsive"
          />
        }
      />

      <Quickstart {...quickstartCommunity} />

      <FeatureImage
        mirror={true}
        overline={'Security'}
        title={<>Ory as a service</>}
        description={
          <>
            Authenticate and manage users, set and check permissions, protect
            APIs, applications and data. Ory as a Service comes with a dashboard
            for metrics and insights and can be managed from the user interface
            or CLI.
          </>
        }
        buttons={
          <Button to={'https://console.ory.sh'} style={'filled'}>
            Request Access
          </Button>
        }
        image={
          <StaticImage
            loading="lazy"
            className="responsive"
            alt="Ory Project Dashboard"
            src="../images/illustrations/dashboard.png"
          />
        }
      />

    </Layout>
  )
}



export default CommunityPage
