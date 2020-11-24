---
path: '/api-access-control-kubernetes-cloud-native/'
publishedAt: '2018-08-18'
author: aeneasr

title: 'Zero Trust API Access Control on Kubernetes'
teaser: |
  Control access to your APIs with cloud native ORY Oathkeeper and the
  Ambassador Reverse Proxy on Kubernetes.

subtitle: >
  With Ambassador and ORY Oathkeeper (Part I)

overline: >
  Controlling Access to APIs in the Cloud
---

:warning: ORY Oathkeeper has improved a lot recently and this guide does not yet
reflect those changes. :warning:

## Zero-Trust on the Network

The web application and web service landscape is changing radically as large
software companies are making their internal infrastructure and software
development and operation practices open to the public. Initiatives such as the
[Cloud Native Computing Foundation](https://www.cncf.io/) , and open source
standards and software like [Istio](https://istio.io/) and
[Kubernetes](https://kubernetes.io/), are making a big impact on how software is
developed and operated. [Go](https://golang.org/), the programming language
written and maintained by Google, shines with it's toolchain. However, some of
the tools behave differently than expected and it may cost you several hours of
debugging and experimenting to find the arguments and execution orders.

This affects also access control - which many developer’s have a love-hate
relationship with - too. In the past, we have relied on language-level APIs
provided by libraries such as [OmniAuth](https://github.com/omniauth/omniauth),
[Spring Security](https://spring.io/projects/spring-security) , and
[PassportJS](http://www.passportjs.org/). These libraries will always have their
place in the developer’s toolbox. As applications grow and companies move away
from monoliths to the
[Service Mesh](https://istio.io/docs/concepts/what-is-istio/) , using these
libraries isn’t quite so easy any more.

As you move to a distributed service architecture, you move away from
integrating with local libraries and SDKs, and towards calling services that
operate on the network. This happens naturally as you adopt more languages (e.g.
you are using the best language for each use case) and start more services. This
obviously impact how you perform access control as well.

### Access Control with Ambassador and Oathkeeper

In this first article of our two-part blog series we’ll use
[Ambassador API Gateway](https://www.getambassador.io/) and
[ORY Oathkeeper Identity and Access Proxy](https://github.com/ory/oathkeeper) to
enable access control to services running within a Kubernetes cluster. Instead
of hard-wiring together a bunch of libraries in your code, you rely on open
standards and replaceable pieces of software. This greatly increases your
development velocity (particularly in regards to maintenance update), as well as
your application security!

In the second article we’ll set up a full-stack access control infrastructure by
adding ORY Hydra, an OAuth 2.0 and OpenID Connect Authorization Server, as well
as a policy server to the mix. Click
[here](https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53&group[15629][2]=true)
to receive a notification once the second article is out!

[Datawire](https://www.datawire.io/) has created and now maintains Ambassador,
as well as the Kubernetes local/remote debugging tool
[Telepresence, which is a CNCF-hosted project](https://www.telepresence.io/).
[ORY](https://www.ory.sh/) has built and also now maintains a popular
authentication and authorization ecosystem that works natively on all cloud
platforms, and is available as [Open Source on GitHub](https://github.com/ory/)
.

## Running in Kubernetes

Let’s set up an example with Ambassador and ORY Oathkeeper on Kubernetes. Before
you go ahead:

- Make sure you have access to Kubernetes - either via
  [minikube](https://github.com/kubernetes/minikube),
  [Docker Desktop](https://www.docker.com/products/docker-desktop), a
  [managed Kubernetes](https://cloud.google.com/kubernetes-engine/), or any
  other type of Kubernetes deployment.
- Make sure `kubectl` is configured and pointed to your Kubernetes deployment.
- Download the [ORY Oathkeeper CLI](https://github.com/ory/oathkeeper/releases)
  and put it in your PATH.
- On Mac or Linux you will need to make the binary executable (and you may also
  want to rename it to something more convenient):
  `$ mv oathkeeper-darwin-amd64 oathkeeper && chmod u+x oathkeeper`

### Ambassador

Ambassador is a Kubernetes-native API Gateway built on the
[Envoy Proxy](https://www.envoyproxy.io/). Ambassador supports a wide variety of
features needed in an edge proxy, e.g.,
[rate limiting](https://www.getambassador.io/user-guide/rate-limiting-tutorial),
[distributed tracing](https://www.getambassador.io/user-guide/tracing-tutorial),
[dynamic routing](https://www.getambassador.io/user-guide/getting-started),
[metrics](https://www.getambassador.io/reference/statistics), and more.
Ambassador also includes an
[authentication API](https://www.getambassador.io/user-guide/auth-tutorial)
where you can plug in an external authentication service. This is the API that
we will be using in this post.

#### Deploying & Configuring Ambassador

The first step is confirming that `kubectl` is set up properly:

```shell-session
$ kubectl get service kubernetes
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   21m
```

I recommend first completing the
[Ambassador Getting Started tutorial](https://www.getambassador.io/user-guide/getting-started)
on the [getambassador.io](https://www.getambassador.io/) website, but I have
included the core steps to set Ambassador up for this tutorial here (these steps
were correct as of publication in August 2018).

To deploy Ambassador in your default namespace, first you need to check if
Kubernetes has RBAC enabled:

```shell-session
$ kubectl cluster-info dump --namespace kube-system | grep authorization-mode
```

If you see something like `--authorization-mode=Node,RBAC` in the output, then
RBAC is enabled.

Note: If you're using Google Kubernetes Engine with RBAC (which is the default
for all new clusters), you will need to grant permissions to the account that
will be setting up Ambassador. To do this, get your official GKE username, and
then grant cluster-admin role privileges to that username:

```shell-session
$ kubectl create clusterrolebinding my-cluster-admin-binding --clusterrole=cluster-admin --user=$(gcloud info --format="value(config.account)")
```

If RBAC is enabled:

```shell-session
$ kubectl apply -f https://getambassador.io/yaml/ambassador/ambassador-rbac.yaml
```

Without RBAC, you can use:

```shell-session
$ kubectl apply -f https://getambassador.io/yaml/ambassador/ambassador-no-rbac.yaml
```

#### Defining the Ambassador Service

Ambassador is deployed as a Kubernetes service. Create the following YAML and
put it in a file called _ambassador-service.yaml_.

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: ambassador
spec:
  ports:
    - port: 80
  selector:
    service: ambassador
  type: LoadBalancer
```

Deploy this service with `kubectl`:

```shell-session
$ kubectl apply -f ambassador-service.yaml
```

The YAML above creates a Kubernetes service for Ambassador of type
_LoadBalancer_. All HTTP traffic will be evaluated against the routing rules you
create. Note that if you're not deploying in an environment where _LoadBalancer_
is a supported type, you'll need to change this to a different type of service,
e.g., _NodePort_.

#### Creating your first route

Create the following YAML and put it in a file called _httpbin.yaml_:

```yaml
---
apiVersion: v1
kind: Service
metadata:
  annotations:
    getambassador.io/config: |
      ---
      apiVersion: ambassador/v0
      kind:  Mapping
      name:  httpbin_mapping
      prefix: /httpbin/
      service: httpbin.org:80
      host_rewrite: httpbin.org
  name: httpbin
spec:
  ports:
    - name: httpbin
      port: 80
```

Then, apply it to the Kubernetes with `kubectl`:

```shell-session
$ kubectl apply -f httpbin.yaml
```

When the service is deployed, Ambassador will notice the
`getambassador.io/config` annotation on the service, and use the _Mapping_
contained in it to configure the route. (There's no restriction on what kinds of
Ambassador configuration can go into the annotation, but it's important to note
that Ambassador only looks at annotations on Kubernetes _services_.)

In this case, the mapping creates a route that will route traffic from the
`/httpbin/` endpoint to the public [httpbin.org](http://httpbin.org/) service.
Note that we are using the `host_rewrite` attribute for the `httpbin_mapping` —
this forces the HTTP Host header, and is often a good idea when mapping to
external services.

#### Testing the Mapping

To test things out, we'll need the external IP for Ambassador (it might take
some time for this to be available):

```shell-session
$ kubectl get svc -o wide ambassador
```

Eventually, this should give you something like:

```
NAME         CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
ambassador   10.11.12.13     35.36.37.38     80:31656/TCP   1m
```

You should now be able to use curl to httpbin:

```shell-session
$ curl 35.36.37.38/httpbin/ip
{
  "origin": "< your IP address >"
}
```

or on **minikube**:

```shell-session
$ minikube service list
|-------------|----------------------|------------------------------|
|  NAMESPACE  |         NAME         |             URL              |
|-------------|----------------------|------------------------------|
| default     | ambassador           | http://192.168.178.108:32548 |
| default     | ambassador-admin     | http://192.168.178.108:30428 |
|-------------|----------------------|------------------------------|

$ curl http://192.168.178.108:32548/httpbin/ip
{
  "origin": "< your IP address >"
}
```

When you have found your Ambassador IP, I would recommend placing this into an
appropriate variable e.g.

```shell-session
$ export AMBASSADOR_IP=192.168.178.108:30428
```

### ORY Oathkeeper

[ORY Oathkeeper](https://github.com/ory/oathkeeper) is a cloud native Identity &
Access Service. As such, it evaluates incoming HTTP request based on a set of
rules, decides whether the request should be allowed or not, and converts the
session data to a consumable format. Decisions are made by consulting two
deciders: _Authenticators_ and _Authorizers_.

**[Authenticators](https://www.ory.sh/docs/guides/master/oathkeeper/1-overview/1-rules#authenticators)**
look for access credentials in the HTTP header - for example a
[bearer token](https://oauth.net/2/bearer-tokens/), and implement business logic
which validate those credentials. ORY Oathkeeper currently ships with different
authenticators:

- The **JWT authenticator** looks for the bearer token in the HTTP header and
  treats the value as a JSON Web Token. You can define which signature
  verification algorithm (HS256, RS256, …) should be used and provide the
  required key(s).
- The **[OAuth 2.0 Token Introspection](https://tools.ietf.org/html/rfc7662)
  authenticator** extracts the bearer token from the HTTP header and performs
  the OAuth 2.0 Token Introspection flow. This authenticator works great with
  [ORY Hydra](https://github.com/ory/hydra)!

For a complete list of implemented authenticators, head over to the
[ORY Oathkeeper developer guide](https://www.ory.sh/docs/guides/master/oathkeeper/1-overview/1-rules)
.

**[Authorizers](https://www.ory.sh/docs/guides/master/oathkeeper/1-overview/1-rules#authorizers)**
use the session state returned by the authenticator to authorize the request.
This could be by consulting an Access Control List (ACL), Role Based Access
Control (RBAC), or more advanced Access Control Policy Definitions like the one
provided by [ORY Keto](https://github.com/ory/keto).

**[Credential Issuers](https://www.ory.sh/docs/guides/master/oathkeeper/1-overview/1-rules#credentials-issuers)**
convert the session state returned by authenticators to an easily consumable
format. The session state can be converted to a JSON Web Token signed with a
private/public keypair, to HTTP Headers, and to HTTP Cookies.

ORY Oathkeeper has two operational modes. One is a _reverse proxy_ which can be
deployed as a sidecar or in close proximity to the API Gateway. The second is as
an _API_ which is connected to the API Gateway of your choice. For this
tutorial, we will exclusively look at the API operation mode.

#### Deploying and Configuring ORY Oathkeeper

First we need to create a secret which will be used to sign the ID Token. The
secret must be 32 characters long:

```shell-session
$ kubectl create secret generic ory-oathkeeper --from-literal=CREDENTIALS_ISSUER_ID_TOKEN_HS256_SECRET=<your-secret>
# For example:
# $ kubectl create secret generic ory-oathkeeper --from-literal=CREDENTIALS_ISSUER_ID_TOKEN_HS256_SECRET=dYmTueb6zg8TphfZbOUpOewd0gt7u0SH
```

Next, deploy the ORY Oathkeeper Service and Deployment in “API mode”.

```shell-session
$ kubectl apply -f https://raw.githubusercontent.com/ory/k8s/master/yaml/oathkeeper/simple/oathkeeper-api.yaml
```

This configuration sets up the ORY Oathkeeper API with an in-memory database
(please note, that restarting the service will remove all existing data!). ORY
Oathkeeper can connect to other database backends such as MySQL or PostgreSQL
for persistence.

This configuration additionally creates a _ClusterIP_ service which makes it
available from the Kubernetes-internal network.

But we want the service to be accessible from the outside world as well! To do
that we’ll fetch the yaml definition

```shell-session
$ wget https://raw.githubusercontent.com/ory/k8s/master/yaml/oathkeeper/simple/oathkeeper-api.yaml
```

and open it in a text editor. The first section reads the service definition of
ORY Oathkeeper:

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: ory-oathkeeper
spec:
  ports:
    - name: http-ory-oathkeeper
      port: 80
      targetPort: http-api
  selector:
    app: ory-oathkeeper
  type: ClusterIP
```

This configuration does not include metadata for Ambassador. Let’s change that
and make ORY Oathkeeper’s API available to the outside world. In a production
deployment, you wouldn’t do this under normal circumstances, and instead you
would expose this API only internally, or with some type of access control in
place - for example Ambassador + ORY Oathkeeper!

Ok, let’s define a mapping that makes ORY Oathkeeper available through
ambassador. To do so, the metadata of the service needs to be updated:

```yaml
---
metadata:
  name: ory-oathkeeper
  annotations:
    getambassador.io/config: |-
      ---
      apiVersion: ambassador/v0
      kind:  Mapping
      name:  ory-oathkeeper_mapping
      prefix: /ory-oathkeeper/
      service: ory-oathkeeper
```

The complete file should now look like this:

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: ory-oathkeeper
  annotations:
    getambassador.io/config: |
      ---
      apiVersion: ambassador/v0
      kind:  Mapping
      name:  ory-oathkeeper_mapping
      prefix: /ory-oathkeeper/
      service: ory-oathkeeper
spec:
  ports:
    - name: http-ory-oathkeeper
      port: 80
      targetPort: http-api
  selector:
    app: ory-oathkeeper
  type: ClusterIP
# [... rest of the file ...]
```

Let’s re-apply the configuration:

```shell-session
$ kubectl apply -f oathkeeper-api.yaml
```

Now you can check if the ORY Oathkeeper is alive via the Ambassador route you
have created, and you can also list all access rules via the Oathkeeper CLI you
downloaded earlier (for now just an empty array):

```shell-session
$ curl  http://${AMBASSADOR_IP}/ory-oathkeeper/health/alive
{"status":"ok"}

$ oathkeeper rules --endpoint  http://${AMBASSADOR_IP}/ory-oathkeeper list
[]
```

Next, we will define an access rule for accessing ORY Oathkeeper’s API. To keep
things simple, we will require no authentication or authorization to access the
API. Let’s echo to a new file _access-rule-oathkeeper.json_:

```shell-session
cat <<EOT > access-rule-oathkeeper.json
[{
  "id": "oathkeeper-access-rule",
  "match": {
    "url": "http://${AMBASSADOR_IP}/ory-oathkeeper/<.*>",
    "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"]
  },
  "authenticators": [{ "handler": "anonymous" }],
  "authorizer": { "handler": "allow" },
  "credentials_issuer": { "handler": "noop" }
}]
EOT
```

You need to make sure that the value of match.url (here
`http://${AMBASSADOR\_IP}/ory-oathkeeper/<.\*>`) has the host and port where
ambassador is available to you. If you set the environment variable previously,
this is the case. `${AMBASSADOR\_IP}` would be, for example, the IP:Port you can
find with minikube service list. The rule itself is very simple, it matches all
requests with prefix `http://${AMBASSADOR_IP}/oathkeeper-api/` and does not
enforce any authentication (“anonymous” allows access by unauthorized clients),
allows all requests, and does not transform the authorization header. We will
set up a more sophisticated rule in the next sections.

Let’s import this rule into ORY Oathkeeper:

```shell-session
$ oathkeeper rules --endpoint  http://${AMBASSADOR_IP}/ory-oathkeeper import access-rule-oathkeeper.json
```

Now we are ready to activate the external auth service in Ambassador. To do so,
we add another section to the annotations we downloaded earlier as file
_oathkeeper-api.yaml_:

```yaml
---
apiVersion: ambassador/v0
kind: AuthService
name: authentication
auth_service: ory-oathkeeper
path_prefix: /judge
allowed_headers:
  - Authorization
```

The complete file should now look like this:

```yaml
---
apiVersion: v1
kind: Service
metadata:
  annotations:
    getambassador.io/config: |
      ---
      apiVersion: ambassador/v0
      kind:  Mapping
      name:  ory-oathkeeper_mapping
      prefix: /ory-oathkeeper/
      service: ory-oathkeeper
      ---
      apiVersion: ambassador/v0
      kind:  AuthService
      name:  authentication
      auth_service: ory-oathkeeper
      path_prefix: /judge
      allowed_headers:
      - Authorization
  name: ory-oathkeeper
spec:
  ports:
    - name: http-ory-oathkeeper
      port: 80
      targetPort: http-api
  selector:
    app: ory-oathkeeper
  type: ClusterIP
# [... rest of file …]
```

And re-apply the configuration:

```shell-session
$ kubectl apply -f oathkeeper-api.yaml
```

If you retry the command from earlier

```shell-session
$ oathkeeper rules --endpoint  http://${AMBASSADOR_IP}/ory-oathkeeper list
[{
  "authenticators": [{ "handler": "noop" } ],
  [...]
```

You will notice that the request passes and you will also see the access rule
you just created! Now, if you try to call the httpbin service, the request will
fail with a 404 because no access rule has been configured for this service:

```shell-session
$ curl http://${AMBASSADOR_IP}/httpbin/
{"error":{"code":404,"status":"Not Found","request":"84a2b164-7229-4f69-a0cd-227611c07128","message":"Requested url does not match any rules"}}
```

Let’s change that by creating a simple access rule in file
_access-rule-httpbin.json_ for the _httpbin_ service (Don’t forget to replace
the URL with your Ambassador IP and port number):

```shell-session
cat <<EOT > access-rule-httpbin.json
[{
  "id": "httpbin-access-rule",
  "match": {
    "url": "http://${AMBASSADOR_IP}/httpbin/<.*>",
    "methods": ["GET"]
  },
  "authenticators": [{ "handler": "anonymous" }],
  "authorizer": { "handler": "deny" },
  "credentials_issuer": { "handler": "noop" }
}]
EOT
```

The access rule is very similar to the one we created for ORY Oathkeeper. This
time however, we are using a simple authorizer that denies all requests. Let’s
import the rule and see what happens when we request the _httpbin_ service.

```shell-session
$ oathkeeper rules --endpoint  http://${AMBASSADOR_IP}/ory-oathkeeper import access-rule-httpbin.json

$ curl http://${AMBASSADOR_IP}/httpbin/
{"error":{"code":403,"status":"Forbidden","request":"fa893865-35dc-47fd-9907-52da8664c242","message":"Access credentials are not sufficient to access this resource"}}
```

Ok, so authorization was not granted. Let’s update the rule and allow all
requests:

```shell-session
cat <<EOT > access-rule-httpbin.json
[{
  "id": "httpbin-access-rule",
  "match": {
    "url": "http://${AMBASSADOR_IP}/httpbin/<.*>",
    "methods": ["GET"]
  },
  "authenticators": [{ "handler": "anonymous" }],
  "authorizer": { "handler": "allow" },
  "credentials_issuer": { "handler": "noop" }
}]
EOT
```

Import the file again and execute curl:

```shell-session
$ oathkeeper rules --endpoint  http://${AMBASSADOR_IP}/ory-oathkeeper import access-rule-httpbin.json

$ curl http://${AMBASSADOR_IP}/httpbin/
<!DOCTYPE html>
<html lang="en">
[...]

```

It worked! There are obviously many more authentication and authorization
strategies. We barely touched the surface. For example, you can authenticate
OAuth 2.0 Access Tokens using the OAuth 2.0 Token Introspection Authenticator. A
list of all the possible handlers can be found in the
[ORY Oathkeeper documentation](https://www.ory.sh/docs/guides/master/oathkeeper/1-overview/1-rules)
.

If you’re looking for an OAuth 2.0 Server that just works, you should check out
[ORY Hydra](https://github.com/ory/hydra) immediately. All ORY products
integrate very well with one another but can also work completely standalone. We
at ORY are also working on an ORY Oathkeeper Authorizer that works with the
[Open Policy Agent (OPA)](https://github.com/open-policy-agent/opa). If you find
this interesting, check out the
[GitHub issue](https://github.com/ory/oathkeeper/issues/98) for this.

## Conclusion

You’ve made it! You deployed [Ambassador](https://www.getambassador.io/) and
[ORY Oathkeeper](https://github.com/ory/oathkeeper) to Kubernetes and set up
different access rules that grant or deny access to the upstream httpbin
service!

The next blogpost introduces [ORY Hydra](https://github.com/ory/hydra) and
[ORY Keto](https://github.com/ory/keto) and will explain how to set up all four
services in Kubernetes for a full-stack, cloud native access control system!
Sign up to our
[newsletter](https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53&group[15629][2]=true)
to be notified when the blogpost is released!
