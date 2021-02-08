import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Adopters from '../../components/adopters'
import LargeFeature from '../../components/large-feature'
import Quicklinks from '../../components/quicklinks'
import Highlights from '../../components/highlights'
import CompressedHero from '../../components/compressed-hero'
import kratosProcess from '../../images/kratos/kratos.svg'
import Stats from '../../components/stats'
import Newsletter from '../../components/newsletter'

const PlaceHolder = () => (
  <img
    loading="lazy"
    alt="The ORY Kratos user login and registration service"
    className="responsive"
    src={kratosProcess}
  />
)


const HomePage = () => (
  <Layout>
    <SEO
      description=""
      title=""
    />

    <CompressedHero
      title="Lorem Ipsum"
      subtitle="dolor sit amet, consectetur adipiscing elit. Morbi non ipsum interdum,"
      cta={[
        {
          title: 'Start Now',
          href: '/hydra',
          style: 'primary',
          openInNewWindow: true
        },
        {
          title: 'Learn Morew',
          href: '/kratos',
          style: 'secondary'
        }
      ]}
      visual={<PlaceHolder />}
      mobile={[<PlaceHolder />]}
    />

    <Highlights
      highlight={[
        {
          title: 'Lorem Ipsum 1',
          href: '/hydra',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ipsum interdum, consequat metus in, lobortis nunc. Praesent tempus tellus vitae gravida tempus. Vestibulum malesuada',
          openInNewWindow: true,
        },
        {
          title: 'Lorem Ipsum 2',
          href: '/hydra',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ipsum interdum, consequat metus in, lobortis nunc. Praesent tempus tellus vitae gravida tempus. Vestibulum malesuada',
        },
        {
          title: 'Lorem Ipsum 3',
          href: '/hydra',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ipsum interdum, consequat metus in, lobortis nunc. Praesent tempus tellus vitae gravida tempus. Vestibulum malesuada',
        },
      ]}
    />

    <Adopters onlyFeatured/>

    <LargeFeature
      title={'Placeholder'}
      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ipsum interdum, consequat metus in, lobortis nunc. Praesent tempus tellus vitae gravida tempus. Vestibulum malesuada'}
      learn={'Dolor Sit'}
      href={'/kratos'}
      visual={'Placeholder1'}
    />

    <LargeFeature
      alternate
      title={'Placeholder'}
      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ipsum interdum, consequat metus in, lobortis nunc. Praesent tempus tellus vitae gravida tempus. Vestibulum malesuada'}
      learn={'Dolor Sit'}
      href={'/kratos'}
      visual={'Placeholder2'}
    />

    <Stats/>

    <Newsletter/>

    <Quicklinks
      title={'Placeholder'}
      description={'lorem ipsum'}
      cta={[
        {
          title: 'Test',
          href: '/hydra',
          style: 'primary',
        },
        {
          title: 'GitHub',
          href: '/kratos',
          style: 'secondary',
        },
      ]}
      quick={[
        {
          description: 'lorem ipsum',
          learn: 'link',
          href: '/hydra',
          openInNewWindow: true,
          icon: 'placeholder1',
        },
        {
          description: 'lorem ipsum',
          learn: 'link',
          href: '/hydra',
          openInNewWindow: true,
          icon: 'placeholder2',
        },
        {
          description: 'lorem ipsum',
          learn: 'link',
          href: '/hydra',
          openInNewWindow: true,
          icon: 'placeholder3',
        },
      ]}
    />
  </Layout>
)

export default HomePage
