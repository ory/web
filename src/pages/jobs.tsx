import React from 'react'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import SEO from '../components/layouts/seo/seo'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import Button from '../components/freestanding/button/button'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'
import Hero from '../components/layouts/hero/hero'
import heroIllustration from '../images/illustrations/hero.svg'
import Textboxes from '../components/layouts/textboxes/textboxes'
import { featuresJobsBenefits } from '../components/layouts/textboxes/textboxes-content'
import JobsList from '../components/layouts/jobs/jobs-list'

const IndexPage = () => {
  const RocketLaunch = (
    <IconWrapper color={'base-white'} icon={'RocketLaunch'} size={'24'} />
  )
  const BookOpen = (
    <IconWrapper color={'base-white'} icon={'BookOpenDuotone'} size={'24'} />
  )
  const ArrowRightWhite = (
    <IconWrapper color={'base-white'} icon={'ArrowRightBold'} size={'16'} />
  )
  const ArrowRightThemed = (
    <IconWrapper color={'themed-primary'} icon={'ArrowRightBold'} size={'16'} />
  )
  const Terminal = (
    <IconWrapper
      color={'themed-primary'}
      icon={'TerminalDuotone'}
      size={'32'}
    />
  )
  const GitMerge = (
    <IconWrapper
      color={'themed-primary'}
      icon={'GitMergeDuotone'}
      size={'32'}
    />
  )
  const Code = (
    <IconWrapper color={'themed-primary'} icon={'CodeDuotone'} size={'32'} />
  )
  const LockOpen = (
    <IconWrapper
      color={'themed-primary'}
      icon={'LockOpenDuotone'}
      size={'32'}
    />
  )
  const UserPlus = (
    <IconWrapper
      color={'themed-primary'}
      icon={'UserPlusDuotone'}
      size={'32'}
    />
  )
  const CirclesThreePlus = (
    <IconWrapper
      color={'themed-primary'}
      icon={'CirclesThreePlusDuotone'}
      size={'32'}
    />
  )

  return (
    <Layout>
      <SEO
        description={
          'Adopt a secure, modern Auth system for the cloud with open source from Ory. Fast, modular integration into any tech stack.'
        }
        title={'Ory - Open Source Auth Solutions For Everyone'}
      />
      <Hero
        title={'Open Source Identity Platform For Everyone'}
        description={
          'Secure cloud applications and authenticate, authorize and manage users. Ory is built on open standards and secures billions of requests in production every month.'
        }
        buttons={
          <Button
            to={'https://console.ory.sh/registration'}
            style={'filled'}
            iconRight={RocketLaunch}
          >
            Request Access
          </Button>
        }
        image={
          <img
            width={'100%'}
            height={'100%'}
            loading="lazy"
            className="responsive"
            alt="Overview of the Ory Console"
            src={heroIllustration}
          />
        }
      />
      <JobsList
        title={'Open Positions'}
        description={
          <>
            We provide developers with a secure, reliable, and scalable access
            solution to their products by building open source libraries that
            are a proven standard for AuthZ/AuthN.
          </>
        }
        buttons={
          <Button to={'mailto:jobs@ory.sh'} style={'filled'}>
            Work with us
          </Button>
        }
      />
      <Textboxes {...featuresJobsBenefits} />
      <Quotes {...quotesDefault} />
      <Quickstart {...quickstartOpenSource} />
    </Layout>
  )
}

export default IndexPage
