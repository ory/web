import React from 'react'
import Layout from '../components/layouts/layout/layout'
import Button from '../components/freestanding/button/button'
import FeatureImage from '../components/layouts/feature-image/feature-image'

const NotFoundPage = () => (
  <Layout>
    <FeatureImage
      overline={'404 - not found'}
      title={<>We couldn't find the page you were looking for</>}
      description={
        <>
          The requested page does not exist. We will try to automatically
          redirect you to our home page in 10 seconds.
        </>
      }
      buttons={
        <Button to={'/'} style={'filled'}>
          Return home
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
