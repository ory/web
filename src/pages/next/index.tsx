import {ArrowRight, RocketLaunch} from 'phosphor-react'
import React from 'react'
import Button from '../../components/next/freestanding/button/button'
import ColourWrapper from '../../components/next/freestanding/colour/colour-wrapper'
import Molecule from '../../components/next/freestanding/molecule/molecule'
import Adopters from '../../components/next/layouts/adopters/adopters'
import Coding from '../../components/next/layouts/coding/coding'
import FeatureFour from '../../components/next/layouts/feature-four/feature-four'
import FeatureImage from '../../components/next/layouts/feature-image/feature-image'
import FeatureOne from '../../components/next/layouts/feature-one/feature-one'
import FeatureThree from '../../components/next/layouts/feature-three/feature-three'
import FeatureTwo from '../../components/next/layouts/feature-two/feature-two'
import Footer from '../../components/next/layouts/footer/footer'
import Hero from '../../components/next/layouts/hero/hero'
import Layout from '../../components/next/layouts/layout/layout'
import Quickstart from '../../components/next/layouts/quickstart/quickstart'
import Quotes from '../../components/next/layouts/quotes/quotes'
import Resource from '../../components/next/layouts/resource/resource'
import Security from '../../components/next/layouts/security/security'
import Stats from '../../components/next/layouts/stats/stats'
import heroIllustration from '../../images/illustrations/hero.svg'

const IndexPage = () => (
  <Layout>
    <Hero
      title={'Never Build Auth Again'}
      description={
        'Login, register and manage your users with a reliable and certified solution trusted by Fortune 500 companies.'
      }
      buttons={
        <Button
          to={'/products'}
          style={'filled'}
          iconLeft={<RocketLaunch size={24}/>}
        >
          Sign up for early access
        </Button>
      }
      image={<img loading="lazy" alt="" src={heroIllustration}/>}
    />
    
    <Adopters/>
    
    <FeatureImage
      overline={'Security'}
      title={'Ory as a service'}
      description={`Authenticate and manage users, set and check permissions, protect APIs, applications and data.
        Ory as a Service comes with for metrics and insights and can be managed fully from the intuitive user interface
        or dedicated CLI.`}
      image={<img loading="lazy" alt="" src={heroIllustration}/>}
    />
    
    <FeatureImage
      mirror={true}
      overline={'Flexibility'}
      title={'Bring your own UX'}
      description={`You want to brand all user facing UIs and use your styles and designs?
        No problem with Ory's headless integration. You want custom auth flows? Done.
        And this is included without extra charges.`}
      image={<img loading="lazy" alt="" src={heroIllustration}/>}
      buttons={
        <Button style={'text'} to={'/'} iconRight={<ArrowRight weight={'bold'} size={16}/>}>
          Read more
        </Button>
      }
    />
    <Quotes/>
    <Stats/>
    <Security/>
    <Coding/>
    <Resource/>
    <Quickstart/>
  </Layout>
)

export default IndexPage
