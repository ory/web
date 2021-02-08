import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Quicklinks from '../../components/quicklinks'


const HomePage = () => (
  <Layout>
    <SEO
      description=""
      title=""
    />
  <Quicklinks
    title={"Placeholder"}
    description={"lorem ipsum"}
    cta={[
      {
        title: 'Test',
        href:'/hydra',
        style: 'primary',
      },
      {
        title: 'GitHub',
        href: '/kratos',
        style: 'secondary'
      }
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
