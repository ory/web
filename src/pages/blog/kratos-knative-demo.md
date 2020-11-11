---
published: true
path: '/kratos-knative-demo/'
title: 'ORY Kratos on Knative'
metaTitle: 'ORY Kratos on Knative'
publishedAt: '2020-10-01'
author: 'Kim Neunert'

subtitle: >
  ORY Kratos running on knative in a minikube on your laptop

overline: >
  ORY Kratos and knative in minikube: Have your cake and eat it too ...

teaser: >
  We evaluated knative as a platform for running kratos and here is what we
  found out ...

metaDescription: >
  We evaluated knative as a platform for running kratos and here is what we
  found out ...

category: Tutorial
---

Serverless computing is a hot topic these days, and so is vendor lock in.
Knative [https://knative.dev/] looks like something that addresses both points:
You can have the cake and eat it too. For sure, there is always some downsides
and that should be discussed elsewhere. For now, let's simply assume you're
interested in ORY's cloud native software applications for security and identity
management. And you want to run it on Knative. In order to examine that it's
best to have Knative running on your computer.

## Prerequisites

Kubernetes and Minikube are high performance resource intensive applications. As
a minimum requirement, we suggest 16GB of RAM. This example was developed on
UbuntuLinux/minikube/kvm2 and it should definitely work with
[other setups](https://www.youtube.com/watch?v=q6kyHDleioA&t=202s).

We're using a "make" utility that fulfills all the other components:

```
# Ubuntu
sudo apt install build-essential
# MacOS
brew install make
```

We'll also need Helm. Please download the helm-binary in a local .bin directory
for later usage.

`make init`

```
mkdir -p .bin
HELM_INSTALL_DIR=./.bin bash <(curl -s https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3) --no-sudo --version v3.1.2
```

## minikube

Minikube is where it starts. We'll need at least 8GB of RAM for this.

_`make minikube-init`_

```
minikube delete -p ory-knative
@echo "Waiting for minikube delete..."
sleep 15
minikube start -p ory-knative \
--memory=8192 --cpus=6 \
--kubernetes-version=v1.15.0 \
--vm-driver=$$VM_DRIVER \
--disk-size=30g \
--extra-config=apiserver.enable-admission-plugins="LimitRanger,NamespaceExists,NamespaceLifecycle,ResourceQuota,ServiceAccount,DefaultStorageClass,MutatingAdmissionWebhook"
#minikube addons -p ory-knative enable ingress
#minikube addons -p ory-knative enable dashboard
kubectl config use-context ory-knative
```

It will probably take some time and you'll have a fully running kubernetes
available afterwards. The last command will also make this cluster available to
your kubectl-command by default. Let's test it with some commands, e.g.
`kubectl cluster-info` We want to have the kubernetes dashboard available as
well. Also, a cluster does not make much sense if you can't access it via a
Loadbalancer. In Minikube, there is a built-in tool that simulates a
`LoadBalancer: tunnel`. However, the `tunnel` command is not coming back but
will continue to run in the foreground. For that reason open a second shell
terminal session. `make mikikube-access`

```
minikube -p ory-knative dashboard & # tidy this up is to to user
minikube -p ory-knative tunnel
```

## Istio and Knative

We'll install Istio [https://https:/istio.io/] version 1.3.6. That is the one
recommended in the
[knative-installation-documentation](https://knative.dev/v0.12-docs/install/installing-istio/).
This takes about 30 seconds. `make istio-init`

```
ISTIO_VERSION=1.3.6 .bin/getLatestIstio
cd istio-1.3.6
for i in install/kubernetes/helm/istio-init/files/crd*yaml; do kubectl apply -f $${i}; done
kubectl create namespace istio-system
kubectl label namespace istio-system istio-injection=disabled
cd istio-1.3.6
../.bin/helm template --namespace=istio-system \
--set prometheus.enabled=false \
--set mixer.enabled=false \
--set mixer.policy.enabled=false \
--set mixer.telemetry.enabled=false \
`# Pilot doesn't need a sidecar.` \
--set pilot.sidecar=false \
--set pilot.resources.requests.memory=128Mi \
`# Disable galley (and things requiring galley).` \
--set galley.enabled=false \
--set global.useMCP=false \
`# Disable security / policy.` \
--set security.enabled=false \
--set global.disablePolicyChecks=true \
`# Disable sidecar injection.` \
--set sidecarInjectorWebhook.enabled=false \
--set global.proxy.autoInject=disabled \
--set global.omitSidecarInjectorConfigMap=true \
--set gateways.istio-ingressgateway.autoscaleMin=1 \
--set gateways.istio-ingressgateway.autoscaleMax=2 \
`# Set pilot trace sampling to 100%` \
--set pilot.traceSampling=100 \
--set global.mtls.auto=false \
install/kubernetes/helm/istio \
> ./istio-lean.yaml
kubectl apply -f istio-${ISTIO_VERSION}/istio-lean.yaml
echo "Let's wait on the pods coming up in istio-system"
while [[ "$$(kubectl get pods --field-selector=status.phase!=Running -n istio-system  -o json | jq '.items[].metadata.name' | wc -l )" != 0 ]]; do echo "waiting another 5 secs of approx 30 secs..."; sleep 5; done
cd ..
```

The knative-installation takes 4 minutes approximately. It's effectively simply
applying yaml-files directly from Github:

`make knative-init`

```
kubectl apply --selector knative.dev/crd-install=true \
--filename https://github.com/knative/serving/releases/download/v0.12.0/serving.yaml \
--filename https://github.com/knative/eventing/releases/download/v0.12.0/eventing.yaml \
--filename https://github.com/knative/serving/releases/download/v0.12.0/monitoring.yaml || true
kubectl apply --filename https://github.com/knative/serving/releases/download/v0.12.0/serving.yaml \
--filename https://github.com/knative/eventing/releases/download/v0.12.0/eventing.yaml \
--filename https://github.com/knative/serving/releases/download/v0.12.0/monitoring.yaml
```

You can check whether the installation is finished by listing resources that are
not yet in "RUNNING" state in each of the 3 knative specific namespaces:

`make knative-check`

```
kubectl get pods --field-selector=status.phase!=Running -n -o jsonpath='{.items[*].metadata.name}' -n knative-serving | tr -s '[[:space:]]' '\n'
kubectl get pods --field-selector=status.phase!=Running -n -o jsonpath='{.items[*].metadata.name}' -n knative-eventing | tr -s '[[:space:]]' '\n'
kubectl get pods --field-selector=status.phase!=Running -n -o jsonpath='{.items[*].metadata.name}' -n knative-eventing | tr -s '[[:space:]]' '\n'
knative-serving  -o json | jq '.items[].metadata.name' | wc -l )" != 0 ]]
```

## Deploy an Go-container example and the ORY Oathkeeper demo

The Knative documentation has a very
[simplistic hello world example](https://knative.dev/docs/serving/getting-started-knative-app/),
which we'll use here as a kind of probe to test the funtionality. It's a very
simple go-container running a webserver returning "Hello Go Sample v1!".

`make deploy-probe`

```
kubectl apply --filename probe-helloworld.yaml
./modify_etchosts.sh $$(kubectl get route helloworld-go --output jsonpath="{.status.url}" | cut -d"/" -f3)
printf "\n\n    --> Access the probe at  $$(kubectl get route helloworld-go --output jsonpath='{.status.url}')"
```

The code above will also modify your /etc/hosts file in order to make the
DNS-name resolvable:
[http://helloworld-go.default.example.com](http://helloworld-go.default.example.com).

So if the example is not working properly by returning "Hello Go Sample v1!",
please check your hostfile. The above DNS-name needs to resolve to the
IP-address that you get by running
`kubectl get svc istio-ingressgateway -n istio-system --output jsonpath="{.status.loadBalancer.ingress[0].ip}"`.
That's especially important if you've purged and recreated the cluster. Also
make sure that the tunnel process, mentioned above, is up and running.

The next step is to deploy a very basic oathkeeper-demo.

`make deploy-oathkeeper-demo`

```
		kubectl create ns demo || true
		helm template --name-template=demo --namespace=demo \
		--set 'demo=true' \
		--set maester.enabled=false \
		--set service.enabled=false \
		--set service.api.enabled=false \
		--set service.proxy.enabled=false \
		--set global.ory.oathkeeper.maester.mode=this_prevents_rendering_the_deployment \
		ory/oathkeeper > oathkeeper_config.yaml
		kubectl apply -f oathkeeper_config.yaml
		# the other file is handcrafted by merging the deployment-spec with the ksvc-spec
		kubectl apply -f oathkeeper_ksvc.yaml
		# see Readme.md for issues which came up with that approach
		sleep 15
		./modify_etchosts.sh $$(kubectl get route demo-oathkeeper -n demo --output jsonpath="{.status.url}" | cut -d"/" -f3)
		printf "\n\n    --> Access the demo at  $$(kubectl get route demo-oathkeeper -n demo --output jsonpath='{.status.url}')/authenticator/anonymous/authorizer/allow/mutator/id_token "
```

The trick here is to use some Helm variables in a way that suppress the creation
of deployment- and pod-yaml-files. After that, we can apply the config map and
the secret without any modifications. The ksvc-yaml script needs to be
handcrafted, though. While its creation was quite simple and straightforward,
the file can also be reviewed in Github:

- Create a stub by copying the above helloworld-example and adjust the name,
  label and other meta-values
- Copy the spec from the created deployment part of the oathkeeper-helm-charts
  and replace the spec of our newly created file
- Remove the liveness- and readyness-probe-sections (commented in our case)
- Remove the admin-part port-section. A ksvc may only have one port exposed. We
  will need to duplicate the ksvc in order to also expose Oathkeeper's
  admin-port (attention: security-risk!)
- Replace the name of the exposed port as "http1"

So applying that yaml-file should make the service available and you can test it
via
[http://demo-oathkeeper.demo.example.com/authenticator/anonymous/authorizer/allow/mutator/id_token](http://demo-oathkeeper.demo.example.com/authenticator/anonymous/authorizer/allow/mutator/id_token).
That's not very usefull, but we have to continue as we're only doing a very
shallow example here on Knative and Ory software.

## Working on ORY Kratos

The goal of this part was to make as much workable as possible from the
[ORY Kratos quickstart tutorial](https://www.ory.sh/kratos/docs/quickstart/). We
won't get that far, but more about that later. But first another prerequisite:
Running ORY Kratos requires an open source relational database system such as
Postgres or something equivalent. Without fullfilling that, kratos-bootup will
quickly fail.

`make deploy-psql`

```
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install kratos-psql bitnami/postgresql
```

This will also give you a hint on how to obtain the password:
`kubectl get secret --namespace default kratos-psql-postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode`

As the whole database-connection-string is specified as dsn in the values.yaml
file, you have to replace the PASSWORD in that file in line 28.

Ok, guess we're ready to deploy ORY Kratos.

`make deploy-kratos`

```
kubectl create ns kratos-demo || true
helm template --name-template=kratos-demo --namespace=kratos-demo \
--set kratos.config.secrets.session=someSecretNeeds16 \
-f values.yaml \
ory/kratos | .bin/helm-fan-out.sh kratos-helm
kubectl apply -f ./kratos-helm/kratos/templates/secrets.yaml
kubectl apply -f ./kratos-helm/kratos/templates/configmap-config.yaml
kubectl apply -f kratos_ksvc_public.yaml
```

Other than on the oathkeeper-charts, we were not able to suppress the creation
of the deployment/pod. So we needed to "post-process" the created file in order
to split the different components in individual files. That's what the
"helm-fan-out.sh" script is doing (thanks to
[washtubs](https://github.com/washtubs) on this
[issue](https://github.com/helm/helm/issues/4680#issuecomment-613201032)).

After that, we're selectively only applying the configmap and the secret. The
ksvc-yaml is handcrafted again. In that case, we took most of that from
investigating the
[quickstart.yml](https://github.com/ory/kratos/blob/master/quickstart.yml). The
values.yaml stuff (kratos.config) is coming from the
[quickstart .kratos.yml](https://github.com/ory/kratos/blob/master/contrib/quickstart/kratos/email-password/.kratos.yml).
Most of these values are not yet adapted though. So we can expect that things
don't work, but let's check.

```
kubectl get  ksvc kratos -n kratos-demo
curl http://kratos.kratos-demo.example.com
kubectl describe ksvc kratos -n kratos-demo
kubectl describe configuration kratos -n kratos-demo
```

the first two commands make sure that the pod is created. Remember, it's
Knative, and it does that on request. The third command verifies that the
configuration was successfully created:

```
Events:
  Type     Reason         Age                    From                Message
  ----     ------         ----                   ----                -------
  Normal   Created        6m25s                  service-controller  Created Configuration "kratos"
```

And the last command is looking at the error messages in the logs that are
copied to the Status. Conditions of the configuration-object for our
convenience:

```
Status:
  Conditions:
    Last Transition Time:  2020-05-27T15:24:34Z
    Message:               Revision "kratos-gln24" failed with message: Container failed with: time="2020-05-27T15:23:53Z" level=info msg="Config file loaded successfully." path=/etc/config/config.yaml
time="2020-05-27T15:23:53Z" level=fatal msg="The configuration is invalid and could not be loaded." config_key[1]=urls validation_error[1]="validation failed"
```

So the fatal-message tells us that something with these configuration-lines
(values.yaml) is wrong:

```
    urls:
      login_ui: http://127.0.0.1:4455/auth/login
      registration_ui: http://127.0.0.1:4455/auth/registration
      error_ui: http://127.0.0.1:4455/error
      settings_ui: http://127.0.0.1:4455/settings
      verify_ui: http://127.0.0.1:4455/verify
```

We shouldn't be surprised! So we need the selfservice_node-application somewhere
and we created a very basic ksvc-file for that in the Github-repo. But here are
the main two issues we'd need to solve going forward:

- ORY Kratos and the application need to share the same DNS-name in order to be
  able to communicate with cookies. That's not how things are working
  out-of-the-box in Knative where each service gets its own DNS-name.
- The admin-port, which we haven't have deployed yet, needs to be protected
  somehow.

And that's the point where this small article ends. For now, we won't continue
going down that path even though we assume that the first problem might be
solvable by creating a
[custom ingress gateway](https://knative.dev/docs/serving/setting-up-custom-ingress-gateway/.)
or maybe even less invasive
([knative-ingress](https://knative.dev/docs/reference/serving-api/#networking.internal.knative.dev/v1alpha1.Ingress),
[-ingress-spec](https://knative.dev/docs/reference/serving-api/#networking.internal.knative.dev/v1alpha1.IngressSpec)).

Thanks for reading, hopefully it can help you in some way.
