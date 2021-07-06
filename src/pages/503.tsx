import React from 'react'
import Layout from '../components/layouts/layout/layout'
import Button from '../components/freestanding/button/button'
import FeatureImage from '../components/layouts/feature-image/feature-image'

const NotFoundPage = () => (
  <Layout>
    <FeatureImage
      overline={'503 - service unavailable'}
      title={<>Hang on, we'll be right back</>}
      description={
        <>
          We're undergoing some routine maintenance, and will be back online in just a bit. Don't worry, we've got our best engineers on the job. 
        </>
      }
      buttons={
        <Button to={'https://status.ory.sh/'} style={'filled'}>
          Status Page
        </Button>
      }
      image={
        <video
          width="100%"
          autoPlay
          controls={false}
          loop
          muted
          playsInline
          preload="true"
        >
          <source src={require('../images/404.mp4')} type="video/mp4" />
        </video>
      }
    />
  </Layout>
)

export default NotFoundPage
