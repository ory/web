import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Quicklinks from '../../components/quicklinks'
import LargeFeature from '../../components/large-feature'


const HomePage = () => (
  <Layout>
    <SEO
      description=""
      title=""
    />

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
