import React from 'react'
import styles from './adopters.module.css'

import allmyfunds from '../images/adopters/allmyfunds.svg'
import kyma from '../images/adopters/kyma.svg'
import thoughtworks from '../images/adopters/thoughtworks.svg'
import threerein from '../images/adopters/threerein.svg'
import arduino from '../images/adopters/arduino.svg'
import hootsuite from '../images/adopters/hootsuite.svg'
import raspberrypi from '../images/adopters/raspberrypi.svg'
import segment from '../images/adopters/segment.svg'
import tulip from '../images/adopters/tulip.svg'
import spiribo from '../images/adopters/spiribo.svg'
import datadetect from '../images/adopters/datadetect.svg'

const adopters = [
  {
    title: 'Tulip Retail',
    image: tulip,
    url: 'https://tulip.com/',
  },
  {
    title: 'ThoughtWorks',
    image: thoughtworks,
    url: 'https://www.thoughtworks.com',
    featured: true,
  },
  {
    title: 'Segment',
    image: segment,
    url: 'https://segment.com/',
    featured: true,
  },
  {
    title: 'All My Funds',
    image: allmyfunds,
    url: 'https://cashdeck.com.au/',
  },
  {
    title: 'Raspberry Pi',
    image: raspberrypi,
    url: 'https://www.raspberrypi.org/',
    featured: true,
  },
  {
    title: 'Arduino',
    image: arduino,
    url: 'https://arduino.cc/',
    featured: true,
  },
  {
    title: 'Hootsuite',
    image: hootsuite,
    url: 'https://hootsuite.com',
    featured: true,
  },
  {
    title: '3REIN',
    image: threerein,
    url: 'https://3rein.com/',
    featured: true,
  },
  {
    title: 'Kyma Project',
    image: kyma,
    url: 'https://kyma-project.io/',
    featured: true,
  },
  {
    title: 'Spiribo',
    image: spiribo,
    url: 'https://www.spiri.bo/',
  },
  {
    title: 'Data Detect',
    image: datadetect,
    url: 'https://unifiedglobalarchiving.com/data-detect/',
  },
]

interface PropTypes {
  onlyFeatured?: boolean
}

const Adopters = ({ onlyFeatured }: PropTypes) => (
  <div className={styles.adopters}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-offset-1 col-lg-10  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          <div className={styles.logos}>
            <div className={styles.logosInner}>
              {adopters
                .filter(({ featured }) => (onlyFeatured ? featured : true))
                .map(({ title, image, url }) => (
                  <a href={url} key={title}>
                    <img src={image} alt={title} />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Adopters
