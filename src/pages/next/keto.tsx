import {
  ArrowRight,
  BookOpen,
  CirclesThreePlus,
  Code,
  GitMerge,
  LockOpen,
  RocketLaunch,
  Terminal,
  UserPlus,
  Users
} from 'phosphor-react'
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
import Security from '../../components/next/layouts/security/security'
import Stats from '../../components/next/layouts/stats/stats'
import Features from '../../components/next/layouts/features/features'
import Quotes from '../../components/next/layouts/quotes/quotes'
import ketoPolyglot from '../../images/keto/keto_p.svg'
import opensource from '../../images/illustrations/opensource.svg'
import ketoProcess from '../../images/keto/keto.svg'
import CodeBox, { Languages } from '../../components/codebox'
import cn from 'classnames'

const IntegrationCodeBox = () => (
  <CodeBox
    tabs={[
      {
        filename: 'curl.sh',
        language: Languages.Shell,
        code: `curl -G \\
     --data-urlencode "subject=john" \\
     --data-urlencode "relation=access" \\
     --data-urlencode "namespace=files" \\
     --data-urlencode "object=file_a" \\
     http://keto-read-api/check`
      },
      {
        filename: 'main.go',
        language: Languages.Go,
        code: `package main

import (...)

func main() {
\tconn, err := grpc.Dial("keto-read-api")
\tif err != nil {
\t\tpanic(err.Error())
\t}

\tclient := acl.NewCheckServiceClient(conn)

\tres, err := client.Check(context.Background(),
\t\t&acl.CheckRequest{
\t\t\tNamespace: "files",
\t\t\tObject:    "file_a",
\t\t\tRelation:  "access",
\t\t\tSubject: &acl.Subject{Ref: &acl.Subject_Id{
\t\t\t\tId: "john",
\t\t\t}},
\t\t},
\t})
\tif err != nil {
\t\tpanic(err.Error())
\t}

\tif res.Allowed {
\t\tfmt.Println("Allowed")
\t\treturn
\t}
\tfmt.Println("Denied")
}`
      },
      {
        filename: 'index.js',
        language: Languages.JavaScript,
        code: `import ...

const checkClient = new checkService.CheckServiceClient('keto-read-api')

const checkRequest = new checkData.CheckRequest()
checkRequest.setNamespace('files')
checkRequest.setObject('file_a')
checkRequest.setRelation('access')

const sub = new acl.Subject()
sub.setId('john')
checkRequest.setSubject(sub)

checkClient.check(checkRequest, (error, resp) => {
  if (error) {
    console.log('Encountered error:', error)
  } else {
    console.log(resp.getAllowed() ? 'Allowed' : 'Denied')
  }
})`
      }
    ]}
  />
)

const IndexPage = () => (
  <Layout>
    <Hero
      title={'Global access control'}
      description={
        'Manage user roles, rights, and permissions with ACL based on Google Zanzibar'
      }
      image={<img loading="lazy" alt="" src={ketoProcess} />}
    />

    <FeatureImage
      overline={'Start in minutes'}
      title={<>Easy Integration</>}
      description={
        <>
          Ory / Keto is a global and consistent permission & authorization
          server with an easy and granular permission language and sub
          10-millisecond latency.
          <br />
          It is based on Google Zanzibar, written in Go, and ships gRPC and REST
          APIs.
        </>
      }
      buttons={
        <>
          <Button
            to={'docs/keto/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
            Check out the docs
          </Button>
        </>
      }
      image={<IntegrationCodeBox />}
    />

    <FeatureImage
      mirror={true}
      overline={'Polyglot'}
      title={<>SDKs for all languages</>}
      description={
        <>
          Ory / Keto is written in Go and we provide SDKs for every language.
          <br />
          Our documentation makes integrating Ory / Keto a snap.
        </>
      }
      buttons={
        <>
          <Button
            to={'docs/keto/next/'}
            style={'link'}
            iconRight={<ArrowRight size={16} />}
          >
            Install Kratos
          </Button>
        </>
      }
      image={<img loading="lazy" alt="" src={ketoPolyglot} />}
    />

    <Quickstart
      title={<>Ready to get started?</>}
      description={
        <>
          Explore Ory and the future of identity.
          <br />
          Make yourself heard in discussions and contribute on GitHub.
          <br />
          Your code will be shipped in the next version.
        </>
      }
      buttons={
        <>
          <Button
            style={'link'}
            to={'/docs/ecosystem/projects'}
            iconRight={<ArrowRight size={16} />}
          >
            Open Source Documentation
          </Button>
        </>
      }
      content={[
        {
          icon: <BookOpen size={32} />,
          title: (
            <>
              Slack:
              <br />
              Developer Chat
            </>
          ),
          description: (
            <>
              A community to help you succeed. Become a hero for developers, ask
              questions & participate in events.
            </>
          ),
          button: (
            <Button
              to={'/chat'}
              style={'link'}
              iconRight={<ArrowRight size={16} />}
            >
              Join the chat
            </Button>
          )
        },
        {
          icon: <Users size={32} />,
          title: (
            <>
              GitHub:
              <br /> Discussions & Code
            </>
          ),
          description: (
            <>
              Make yourself heard on GitHub and contribute code and insights to
              the open source projects at the heart of Ory.
            </>
          ),
          button: (
            <Button
              to={'https://github.com/ory/'}
              style={'link'}
              iconRight={<ArrowRight size={16} />}
            >
              Explore ecosystem
            </Button>
          )
        }
      ]}
    />
  </Layout>
)

export default IndexPage
