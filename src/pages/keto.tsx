import Layout from '../components/layout'
import React from 'react'
import CompressedHero from '../components/compressed-hero'
import Newsletter from '../components/newsletter'
import CompressedSection from '../components/compressed-section'
import SEO from '../components/seo'
import Stats from '../components/stats'
import { brandPrefix } from '../config'
import Collaborator from '../components/collaborator'
import ketoProcess from '../images/keto/keto.svg'
import ketoPolyglot from '../images/keto/keto_p.svg'
import Adopters from '../components/adopters'
import CodeBox, { Languages } from '../components/codebox'

const KetoAnimation = () => (
  <img
    loading="lazy"
    alt="The Ory Access and Policy Server"
    className="responsive"
    src={ketoProcess}
  />
)

const KetoSdk = () => (
  <img
    loading="lazy"
    alt="Ory Keto SDKs"
    className="responsive"
    src={ketoPolyglot}
  />
)

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

const KetoPage = () => (
  <Layout
    theme="keto"
    appendix={'Keto'}
    githubLink="https://github.com/ory/keto"
    discussionsLink="https://github.com/ory/keto/discussions"
  >
    <SEO
      description="Authorization Server based on Google Zanzibar, providing RBAC, ABAC and ACL"
      title={`${brandPrefix}Keto Permission and Role Management`}
    />
    <CompressedHero
      title="Global access control"
      subtitle="Manage user roles, rights, and permissions with ACL based on Google Zanzibar"
      cta={[
        {
          title: 'Get started',
          href: 'https://www.ory.sh/docs/keto/install',
          style: 'primary'
        },
        {
          title: 'GitHub',
          href: 'https://github.com/ory/keto',
          style: 'secondary'
        }
      ]}
      visual={<KetoAnimation />}
    />

    <Newsletter preselect={'keto'} />
    <CompressedSection
      expanded
      left={
        <>
          <h3>Easy integration</h3>
          <p>
{brandPrefix}Keto is a global and consistent permission & authorization server with an easy and granular permission language and sub 10-millisecond latency. It is based on Google Zanzibar, written in Go, and ships gRPC and REST APIs.
          </p>
          <p>
            Take a look at our{' '}
            <a href="https://www.ory.sh/docs/keto">documentation</a> and learn
            more.{' '}
          </p>
        </>
      }
      right={<IntegrationCodeBox />}
      mobile={[
        <h3>Easy integration</h3>,
        <IntegrationCodeBox />,
        <div className={'mobile-offset-32'}>
          <p>
{brandPrefix}Keto is a global and consistent permission & authorization server with an easy and granular permission language and sub 10-millisecond latency. It is based on Google Zanzibar, written in Go, and ships gRPC and REST APIs.
          </p>
          <p>
            Take a look at our{' '}
            <a href="https://www.ory.sh/docs/keto">documentation</a> to learn
            more.
          </p>
        </div>
      ]}
    />
    <CompressedSection
      right={<KetoSdk />}
      left={
        <>
          <h3>Polyglot</h3>
          <p>
            {brandPrefix}Keto is written in Go and we provide SDKs for every
            language. Our{' '}
            <a href="https://www.ory.sh/keto/docs/sdk/index">documentation</a>{' '}
            makes integrating {brandPrefix}Keto a snap.
          </p>
        </>
      }
      mobile={[
        <h3>Polyglot</h3>,
        <KetoSdk />,
        <p className="mobile-offset-32">
          {brandPrefix}Keto is written in Go and we provide SDKs for every
          language. Our{' '}
          <a href="https://www.ory.sh/keto/docs/sdk/index">documentation</a>{' '}
          makes integrating {brandPrefix}Keto a snap.
        </p>
      ]}
    />

    <Collaborator />
    <Adopters onlyFeatured={true} />
    <Stats />
  </Layout>
)

export default KetoPage
