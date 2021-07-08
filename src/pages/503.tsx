import React from 'react'

import Button from '../components/freestanding/button/button'
import FeatureImage from '../components/layouts/feature-image/feature-image'
import Layout from '../components/layouts/layout/layout'
import img404 from '../images/404.mp4'

const NotFoundPage = () => (
  <Layout>
    <FeatureImage
      overline={'503 - service unavailable'}
      title={<>Hang on, we'll be right back</>}
      description={
        <>
          We're undergoing some routine maintenance, and will be back online in
          just a bit. Don't worry, we've got our best engineers on the job. If
          you have feedback or want to file a bug report, please {''}
          <Button
            style={'link-inline'}
            to={'https://github.com/ory/platform/issues/new/choose'}
          >
            open an issue
          </Button>
          !
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
          <source src={img404} type="video/mp4" />
        </video>
      }
    />
  </Layout>
)

export default NotFoundPage
