import React from 'react'
import Button from '../components/freestanding/button/button'
import Adopters from '../components/layouts/adopters/adopters'
import FeatureImage from '../components/layouts/feature-image/feature-image'
import Newsletter from '../components/newsletter'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import ketoPolyglot from '../images/keto/keto_p.svg'
import ketoProcess from '../images/keto/keto.svg'
import CodeBox, { Languages } from '../components/codebox'
import SEO from '../components/layouts/seo/seo'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Stats from '../components/layouts/stats/stats'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'

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

const IndexPage = () => {
  const ArrowRight = (
    <IconWrapper color={'themed-primary'} icon={'ArrowRight'} size={'16'} />
  )

  return (
    <Layout>
      <SEO
        description={
          'Authorization Server based on Google Zanzibar, providing RBAC, ABAC and ACL.'
        }
        title={`Ory Keto - Permission and Role Management`}
      />
      <Hero
        title={'Global access control'}
        description={
          'Manage user roles, rights, and permissions with ACL based on Google Zanzibar.'
        }
        image={
          <img className="responsive" loading="lazy" alt="" src={ketoProcess} />
        }
      />

      <Newsletter preselect="keto" />

      <FeatureImage
        overline={'Start in minutes'}
        title={<>Easy Integration</>}
        description={
          <>
            Ory Keto is a global and consistent permission & authorization
            server with an easy and granular permission language and sub
            10-millisecond latency. It is based on Google Zanzibar, written in
            Go, and ships gRPC and REST APIs.
          </>
        }
        buttons={
          <>
            <Button to={'/docs/keto/'} style={'link'} iconRight={ArrowRight}>
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
            Ory Keto is written in Go and we provide SDKs for every language.
            Our documentation makes integrating Ory / Keto a snap.
          </>
        }
        buttons={
          <>
            <Button
              to={'/docs/keto/install/'}
              style={'link'}
              iconRight={ArrowRight}
            >
              Install Ory / Keto
            </Button>
          </>
        }
        image={
          <img
            className="responsive"
            loading="lazy"
            alt=""
            src={ketoPolyglot}
          />
        }
      />
      <Adopters {...adoptersDefault} />
      <Stats
        title={<>Billions of Identities</>}
        description={
          <>
            Companies from all over the world rely on Ory for their identity
            needs. Ory technology secures billions of identity requests.
          </>
        }
      />
      <Quickstart {...quickstartOpenSource} />
    </Layout>
  )
}

export default IndexPage
