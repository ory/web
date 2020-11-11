(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(470)),r={id:"gitlab",title:"Gitlab Hydra integration"},l={unversionedId:"guides/gitlab",id:"version-v1.9/guides/gitlab",isDocsHomePage:!1,title:"Gitlab Hydra integration",description:"Gitlab has several OAuth2 related features. The relevant here is the possibility",source:"@site/versioned_docs/version-v1.9/guides/gitlab.mdx",slug:"/guides/gitlab",permalink:"/hydra/docs/guides/gitlab",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/guides/gitlab.mdx",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1603200622,sidebar:"version-v1.9/docs",previous:{title:"Setting up Cross-origin resource sharing (CORS)",permalink:"/hydra/docs/guides/cors"},next:{title:"Advanced OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/advanced"}},s=[{value:"Preparation",id:"preparation",children:[]},{value:"Spin up the instances and logging in",id:"spin-up-the-instances-and-logging-in",children:[]},{value:"Creating the client in ORY Hydra",id:"creating-the-client-in-ory-hydra",children:[]},{value:"OAuth2 Login",id:"oauth2-login",children:[]},{value:"Docker-setup",id:"docker-setup",children:[]},{value:"GitLab configuration - OAuth2-setup",id:"gitlab-configuration---oauth2-setup",children:[]},{value:"Proper GitLab user-creation",id:"proper-gitlab-user-creation",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Client wrong",id:"client-wrong",children:[]},{value:"From Hydra: request is missing ... or otherwise malformed",id:"from-hydra-request-is-missing--or-otherwise-malformed",children:[]},{value:"ORY Hydra Logs: Redirect URL is using an insecure protocol",id:"ory-hydra-logs-redirect-url-is-using-an-insecure-protocol",children:[]},{value:"GitLab: Signing in ... is not allowed",id:"gitlab-signing-in--is-not-allowed",children:[]},{value:"GitLab: Email can&#39;t be blank",id:"gitlab-email-cant-be-blank",children:[]}]},{value:"Appendix: Some notes about OpenID connect",id:"appendix-some-notes-about-openid-connect",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Gitlab has several OAuth2 related features. The relevant here is the possibility\nto sign into GitLab with (almost) any OAuth2 provider, in this case ORY Hydra.\nSo, in this guide, we'll connect GitLab's omniauth-connector to ORY Hydra. We'll\ndo that in a docker-based lab-environment in order to investigate the details\nbefore you do something like this in production."),Object(o.b)("h2",{id:"preparation"},"Preparation"),Object(o.b)("p",null,"Even though we're mostly using ORY Hydra in a docker-container, having the\ncommand-line-client available is quite useful. So please install ORY Hydra as\nexplained in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../install"}),"installation-guide"),". You'll also need\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"docker")," and\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"docker-compose"),"."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../5min-tutorial"}),"5-min-tutorial")," might be worth checking out upfront.\nIt'll a give a nice quick overview how OAuth2 is working within ORY Hydra with a\nminimal example. We assume basic knowledge, here."),Object(o.b)("p",null,"If you have not yet the source code of ORY Hydra, which we'll need for the\n",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose")," yaml-files and the gitlab-configuration, clone the repository:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"git clone https://github.com/ory/hydra.git\n")),Object(o.b)("p",null,"We will access GitLab via the url ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://gitlab.example.com."}),"http://gitlab.example.com.")," So we need to map\nit to localhost. This is done by modifying the hosts-file. On an unixoid system\nfind this file in ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/hosts"),", on windows, you should find it in\n",Object(o.b)("inlineCode",{parentName:"p"},"c:\\WINDOWS\\system32\\drivers\\etc\\hosts"),". Add this line:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"127.0.0.1 gitlab.example.com\n")),Object(o.b)("p",null,"As this POC will work with http instead of https, we need to whitelist the above\ndomain-name to allow unencrypted http traffic. So add the following switch to\nthe services.hydra.command-section in the quickstart.yml around line 24 so that\nthe line looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"    serve all --dangerous-allow-insecure-redirect-urls http://gitlab.example.com:8000/users/auth/ORY_Hydra/callback\n")),Object(o.b)("h2",{id:"spin-up-the-instances-and-logging-in"},"Spin up the instances and logging in"),Object(o.b)("p",null,"Use this command to spinup the instances. This will show the logs on the\nterminal and it will take some time."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml -f ./contrib/quickstart/quickstart-gitlab.yml \\\n    up --build\n")),Object(o.b)("p",null,"After this suceeds, you can access the login page\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8000/users/sign_in"}),"sign-in-page"),". Don't try to login, yet, we\nhave to create the client in ORY Hydra, first."),Object(o.b)("h2",{id:"creating-the-client-in-ory-hydra"},"Creating the client in ORY Hydra"),Object(o.b)("p",null,"Depending on whether you've the hydra-binary available, you can use it directly\nor the one in the docker-container."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ hydra clients create \\\n    --endpoint http://127.0.0.1:4445 \\\n    --id gitlab \\\n    --secret theSecret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code,id_token, email \\\n    --scope openid,offline_access,profile,email \\\n    --callbacks http://gitlab.example.com:8000/users/auth/ORY_Hydra/callback \\\n    --token-endpoint-auth-method client_secret_post\n")),Object(o.b)("p",null,"or you can use the binary within the docker-container:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445 \\\n    --id gitlab \\\n    --secret theSecret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code,id_token,email \\\n    --scope openid,offline_access,profile,email \\\n    --callbacks http://gitlab.example.com:8000/users/auth/ORY_Hydra/callback \\\n    --token-endpoint-auth-method client_secret_post\n")),Object(o.b)("h2",{id:"oauth2-login"},"OAuth2 Login"),Object(o.b)("p",null,"With the first access of your\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://gitlab.example.com:8000/"}),"GitLab-instance"),', you will have to change the\nroot-password. You should see a "Ory Hydra" Login-button. Clicking it will\nforward you to the hydra-consent-app where you can login with ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:foo@bar.com"}),"foo@bar.com"),"/foobar\nsimiliar to the 5-min-tutorial. After that you have to give consent to accessing\nyour email-address. Congratulations, doing that should redirect you directly to\nyour personal GitLab-page. You have logged into GitLab via ORY Hydra."),Object(o.b)("p",null,"So now, let's look at the individual pieces and how all of them work together."),Object(o.b)("h2",{id:"docker-setup"},"Docker-setup"),Object(o.b)("p",null,"Gitlab has some ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.gitlab.com/omnibus/docker/"}),"documentation")," about\nhow to use their docker-images. It has also an example for docker-compose. The\n",Object(o.b)("inlineCode",{parentName:"p"},"quickstart-gitlab.yaml")," file in the contrib directory doesn't contain\nsurprising things:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"version: '3'\n\nservices:\n  gitlab:\n    image: gitlab/gitlab-ce:13.0.6-ce.0\n    restart: always\n    hostname: gitlab.example.com\n    environment:\n      GITLAB_OMNIBUS_CONFIG: |\n        external_url 'http://gitlab.example.com:8000/'\n    ports:\n      - '8000:8000' # http\n    volumes:\n      - './contrib/quickstart/gitlab/config:/etc/gitlab'\n      - './contrib/quickstart/gitlab/logs:/var/log/gitlab'\n      - './contrib/quickstart/gitlab/data:/var/opt/gitlab'\n")),Object(o.b)("p",null,"Other then ",Object(o.b)("inlineCode",{parentName:"p"},"logs")," and ",Object(o.b)("inlineCode",{parentName:"p"},"data"),", the config directory is already prepopulated and\nthe single most important configuration-file is the ",Object(o.b)("inlineCode",{parentName:"p"},"gitlab.rb")," file. GitLab has\na mechanism to override values and we use it here to specify the ",Object(o.b)("inlineCode",{parentName:"p"},"external_url"),"."),Object(o.b)("p",null,"So let's move on to ",Object(o.b)("inlineCode",{parentName:"p"},"gitlab.rb"),"."),Object(o.b)("h2",{id:"gitlab-configuration---oauth2-setup"},"GitLab configuration - OAuth2-setup"),Object(o.b)("p",null,"The gitLab-configuration in ",Object(o.b)("inlineCode",{parentName:"p"},"contrib/quickstart/gitlab/config/gitlab.rb"),' is the\noriginal "template" which consists of 2400 lines of comments on how to do stuff.\nOur relevant configuration starts at line 432 where the corresponding comments\nabout OAuth2 is located as well. It looks like this:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),"gitlab_rails['omniauth_enabled'] = true\ngitlab_rails['omniauth_block_auto_created_users'] = false\ngitlab_rails['omniauth_allow_single_sign_on'] = ['ORY_Hydra']\ngitlab_rails['omniauth_providers'] = [\n  {\n    'name' => 'oauth2_generic',\n    'app_id' => 'gitlab',\n    'app_secret' => 'theSecret',\n    'args' => {\n      client_options: {\n        'site' => 'http://127.0.0.1:4444', # including port if necessary\n        'user_info_url' => 'http://hydra:4444/userinfo',\n        'authorize_url' => 'http://127.0.0.1:4444/oauth2/auth',\n        'token_url' => 'http://hydra:4444/oauth2/token'\n      },\n      user_response_structure: {\n        root_path: [],\n        id_path: 'sub',\n        attributes: {\n                email: 'sub'\n        }\n      },\n      authorize_params: {\n        scope: 'email'\n      },\n      # optionally, you can add the following two lines to \"white label\" the display name\n      # of this strategy (appears in urls and Gitlab login buttons)\n      # If you do this, you must also replace oauth2_generic, everywhere it appears above, with the new name.\n      name: 'ORY_Hydra', # display name for this strategy\n      #strategy_class: \"OmniAuth::Strategies::OAuth2Generic\" # Devise-specific config option Gitlab uses to find renamed strategy\n    }\n  }\n]\n")),Object(o.b)("p",null,"The documentation for this, other then inside the file, is a bit scattered:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A specific\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.gitlab.com/ee/integration/oauth2_generic.html"}),"step-by-step guide"),"\nbut not very detailed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.gitlab.com/ee/integration/omniauth.html#initial-omniauth-configuration"}),"OmniAuth reference documentation in GitLab")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.gitlab.com/ee/integration/oauth2_generic.html"}),"OmniAuth Generic reference documenation in GitLab")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/satorix/omniauth-oauth2-generic#gitlab-config-example"}),"OmniAuth Gem-documentation from Satorix"))),Object(o.b)("p",null,"The biggest-source for errors is the clients-options-section. Here we'll specify\nthe details for the OAuth2 flow and where ORY Hydra is located. Two things are\nextremely important to keep in your mind when looking at configurations which\nare specifying some flow one way or another:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Where is the DNS-name resolved? Sometimes it's on the users browser, sometimes\non GitLab or on the hydra-side. Especially in our docker-based POC, it makes a\nhuge difference!"),Object(o.b)("li",{parentName:"ul"},'Cookies can only be written/read, if they are from the same domain. In that\ncase "127.0.0.1". That would be a different domain than "localhost". Pay\nattention to that.')),Object(o.b)("p",null,"These two points in our mind, let's look at the three configurations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'site' => 'http://127.0.0.1:4444'")," This is the default for the three URLs\nlater if not specified otherwise."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'authorize_url' => 'http://127.0.0.1:4444/oauth2/auth'")," this url will be a\nredirect-target and therefore resolved on the browser of the user. Probably we\ncould omit the scheme, host and port as this is already defined in ",Object(o.b)("inlineCode",{parentName:"li"},"site"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'token_url' => 'http://hydra:4444/oauth2/token'")," the ",Object(o.b)("inlineCode",{parentName:"li"},"token_url")," will get\nused on the GitLab-server to get a token after GitLab received the grant. As\nit's resolved on the GitLab-side, we're using docker-name of the\nhydra-container which is by default resolvable on the GitLab-container."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'user_info_url' => 'http://hydra:4444/userinfo',")," same thing for the\n",Object(o.b)("inlineCode",{parentName:"li"},"user_info_url"),". It's called on the GitLab-container and needs to be\nresolvable there.")),Object(o.b)("p",null,"The paths here are by default the same paths which are specified by OpenID\nconnect. The configuration would be simpler if we would use OpenID-Connect (more\nabout that later in the appendix) but in our case we're simply manually\nspecifying the values. So it's not an accident that these pathes here are the\nvery same then what you get from ORY Hydra:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ curl http://127.0.0.1:4444/.well-known/openid-configuration | jq .\n[...]\n{\n  "issuer": "http://127.0.0.1:4444/",\n  "authorization_endpoint": "http://127.0.0.1:4444/oauth2/auth",\n  "token_endpoint": "http://127.0.0.1:4444/oauth2/token",\n  "jwks_uri": "http://127.0.0.1:4444/.well-known/jwks.json",\n[...]\n  "userinfo_endpoint": "http://127.0.0.1:4444/userinfo",\n  "scopes_supported": [\n    "offline_access",\n    "offline",\n    "openid"\n  ],\n  "token_endpoint_auth_methods_supported": [\n    "client_secret_post",\n    "client_secret_basic",\n    "private_key_jwt",\n    "none"\n  ],\n  [...]\n}\n')),Object(o.b)("p",null,"Also worth noting here is the supported ",Object(o.b)("inlineCode",{parentName:"p"},"token_endpoint_auth_methods"),": How does\nGitLab authenticate against ORY Hydra? So GitLab is using ",Object(o.b)("inlineCode",{parentName:"p"},"client_secret_post"),"\nwhich we needed to specify when we've created the GitLab-client in ORY Hydra."),Object(o.b)("p",null,"Some remarks for creating the client. We have created the client like this. The\nsecond command shows the created client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ hydra clients create \\\n    --endpoint http://127.0.0.1:4445 \\\n    --id gitlab \\\n    --secret theSecret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code,id_token, email \\\n    --scope openid,offline_access,profile,email \\\n    --callbacks http://gitlab.example.com:8000/users/auth/ORY_Hydra/callback \\\n    --token-endpoint-auth-method client_secret_post\n\n$ hydra clients get hydra --endpoint http://127.0.0.1:4445\n{\n        "client_id": "gitlab",\n        "created_at": "2020-08-31T08:47:30.000Z",\n        "grant_types": [\n                "authorization_code",\n                "refresh_token"\n        ],\n        "jwks": {},\n        "metadata": {},\n        "redirect_uris": [\n                "http://gitlab.example.com:8000/users/auth/ORY_Hydra/callback"\n        ],\n        "response_types": [\n                "code",\n                "id_token",\n                ""\n        ],\n        "scope": "openid offline_access profile email",\n        "subject_type": "public",\n        "token_endpoint_auth_method": "client_secret_post",\n        "updated_at": "2020-08-31T08:47:30.000Z",\n        "userinfo_signed_response_alg": "none"\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The endpoint is not part of the configuration but it's a command-line-switch\ntelling the hydra-binary to which hydra-instance to talk to"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"id")," and ",Object(o.b)("inlineCode",{parentName:"li"},"secret")," has been specified before in the GitLab-config"),Object(o.b)("li",{parentName:"ul"},"the token-endpoint-auth-method is by default ",Object(o.b)("inlineCode",{parentName:"li"},"client_secret_basic")," but GitLab\nis using ",Object(o.b)("inlineCode",{parentName:"li"},"client_secret_post")," (couldn't find that anywhere in the\nGitLab-documentation, though)"),Object(o.b)("li",{parentName:"ul"},"The callback needs to be resolvable on the users-browser. However, originally,\nthe callback-url is created on the GitLab-side. In order to make that\nresolvable on the client, we set the ",Object(o.b)("inlineCode",{parentName:"li"},"external_url")," in the\nGitLab-configuration. Here that value is just there to cross-check with the\ngenerated one. It needs to match exactly.")),Object(o.b)("h2",{id:"proper-gitlab-user-creation"},"Proper GitLab user-creation"),Object(o.b)("p",null,"Initially, GitLab doesn't have any user but it needs them in order to manage\nauthorisation, no matter how the login is done. This is a common issue and a\ncommon solution to this is to create the users on the fly with the first login.\nSo in order to do that, these lines are enabling that:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),"gitlab_rails['omniauth_block_auto_created_users'] = false\ngitlab_rails['omniauth_allow_single_sign_on'] = ['ORY_Hydra']\n")),Object(o.b)("p",null,"In order to get the necessary data for the user, gitlab needs to call to hydra's\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../reference/api#openid-connect-userinfo"}),"userinfo-endpoint"),". The most\nimportant attribute is the sub-attribute which provides, according to the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://openid.net/specs/openid-connect-core-1_0.html#IDToken"}),"specification"),",\nthe ID of a user which is (in this case) the email-address. However, the\nemail-address is also an attribute in the specification but in the\nimplementation of the of this one hardcoded user (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:foo@bar.com"}),"foo@bar.com"),") is empty."),Object(o.b)("p",null,"So therefore we're specifying a mapping telling gitlab it should take the\nsub-field and use it as email:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),"      user_response_structure: {\n        root_path: [],\n        id_path: 'sub',\n        attributes: {\n                email: 'sub'\n        }\n      },\n")),Object(o.b)("p",null,'Whether the attribute "email" is there or not is quite critical here. The\nLogin-ID has the form of an email. So in order to satisfy Gitlab\'s requirement,\nwe\'re mapping here the email-attribute to the Login-ID which is represented by\n"sub". This shouldn\'t be necessary in a real-world-implementation.'),Object(o.b)("p",null,"But assuming that it's not doing that mapping, then GitLab would need to ask ORY\nHydra on that endpoint the email-address. But is GitLab even allowed to read it?\nWe need consent from the user for that and fortunately we configured the client\nabove to be able to ask for that scope. However, we also need to configure\nGitLab to actually ask for that scope:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"     authorize_params: {\n           scope: 'email'\n      },\n")),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"We've successfully integrated GitLab with ORY Hydra. Everything was done as\nconfiguration. No code has been created nor has any application been\nmonkey-patched while following this guide (so far)."),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("h3",{id:"client-wrong"},"Client wrong"),Object(o.b)("p",null,"After trying to login you get a message like this:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Error: invalid_client Description: Client authentication failed (e.g., unknown\nclient, no client authentication included, or unsupported authentication\nmethod) Hint: The requested OAuth 2.0 Client does not exist.")),Object(o.b)("p",null,"Doublecheck your registered clients. Mae sure ID and password are correct and\nmatches that of the gitlab.rb:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ hydra clients list --endpoint http://127.0.0.1:4445\n| CLIENT ID | NAME | RESPONSE TYPES |             SCOPE              |                        REDIRECT URIS                         |           GRANT TYPES            | TOKEN ENDPOINT AUTH METHOD |\n|-----------|------|----------------|--------------------------------|--------------------------------------------------------------|----------------------------------|----------------------------|\n| gitlab    |      | code,id_token, | openid offline_access profile  | http://gitlab.example.com:8000/users/auth/ORY_Hydra/callback | authorization_code,refresh_token | client_secret_post         |\n|           |      |                | email                          |                                                              |                                  |                            |\n$\n")),Object(o.b)("h3",{id:"from-hydra-request-is-missing--or-otherwise-malformed"},"From Hydra: request is missing ... or otherwise malformed"),Object(o.b)("p",null,"So after this, clicking the login-button on the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8000/users/sign_in"}),"sign-in-page")," will forward to Ory Hydra,\nwhich will redirect to the consent-app on port 3000. After the login, you'd get\nto the granting-page of the consent-app and after you've \"allowed access\",\nyou'll get redirected back to gitlab which will unfortunately mention:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'Could not authenticate you from ORYHydra because "The request is missing a\nrequired parameter, includes an invalid parameter value, includes a parameter\nmore than once, or is otherwise malformed".')),Object(o.b)("p",null,"So the message in quotes is from ORY Hydra and not very expressive. Note that\nit's a bit difficult to expose very meaningful error-messages as this could be\nused for security-attacks. So in such cases check the hydra-logs on what's\nwrong."),Object(o.b)("h3",{id:"ory-hydra-logs-redirect-url-is-using-an-insecure-protocol"},"ORY Hydra Logs: Redirect URL is using an insecure protocol"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'hydra_1          | time=2020-08-24T12:42:36Z level=error msg=An error occurred\naudience=application error=map[message:invalid_request reason:Redirect URL is\nusing an insecure protocol, http is only allowed for hosts with suffix `localhost`,\nfor example: http://myapp.localhost/. status:Bad Request status_code:400]\nhttp_request=map[headers:map[accept:text/html,application/xhtml+xml,application/xml;\nq=0.9,image/webp,*/*;q=0.8 accept-encoding:gzip, deflate accept-language:en-US,en;\nq=0.5 cookie:Value is sensitive and has been redacted. To see the value set config\nkey "log.leak_sensitive_values = true" or environment variable\n"LOG_LEAK_SENSITIVE_VALUES=true". referer:http://127.0.0.1:3000/consent?consent_challenge=b695307490fa4732a80d3324f45f5a93\nuser-agent:Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0]\nhost:127.0.0.1:4444 method:GET path:/oauth2/auth query:Value is sensitive and has\nbeen redacted. To see the value set config key "log.leak_sensitive_values = true"\nor environment variable "LOG_LEAK_SENSITIVE_VALUES=true".\nremote:172.19.0.1:47684 scheme:http] service_name= service_version=\n')),Object(o.b)("p",null,"The relevant part here is: ",Object(o.b)("inlineCode",{parentName:"p"},"Redirect URL is using an insecure protocol"),". Make\nsure to add the --dangerous-force-http to the hydra-command as described above."),Object(o.b)("p",null,"After that, restart the hydra-container like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml -f quickstart-gitlab.yml \\\n    restart hydra\n")),Object(o.b)("h3",{id:"gitlab-signing-in--is-not-allowed"},"GitLab: Signing in ... is not allowed"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Signing in using your Ory Hydra account without a pre-existing GitLab account\nis not allowed. Create a GitLab account first, and then connect it to your Ory\nHydra account.")),Object(o.b)("p",null,"Double-Check the above explanation about user-creation."),Object(o.b)("h3",{id:"gitlab-email-cant-be-blank"},"GitLab: Email can't be blank"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Sign-in failed because Email can't be blank and Notification email can't be\nblank.")),Object(o.b)("p",null,"Double-check the ",Object(o.b)("inlineCode",{parentName:"p"},"user_response_structure")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"authorize_params"),". The\n",Object(o.b)("inlineCode",{parentName:"p"},"attributes")," need an email-entry."),Object(o.b)("h2",{id:"appendix-some-notes-about-openid-connect"},"Appendix: Some notes about OpenID connect"),Object(o.b)("p",null,"GitLab is supporting OpenID-Connect and ORY Hydra does that as well. Why hasn't\nthat been used in this guide?"),Object(o.b)("p",null,'OpenID might be the better choice then plain OAuth2. When we tried that, we ran\ninto the issue that the used OpenID-connect-implementation does not allow\nhttp-connection but "only" https. That\'s in general a good thing but stupid for\nPOCs like this. Whereas ORY Hydra has a switch to whitelist URLs in such cases,\nthe used\n',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nov/openid_connect/issues/47"}),"openid-connect-implementation"),"\ndoesn't seem to have that. So, here is a reasonable openID-Connect\nconfiguration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),"gitlab_rails['omniauth_providers'] = [\n  { 'name' => 'openid_connect',\n    'label' => 'ORY Hydra',\n    # 'icon' => '<custom_provider_icon>',\n    'args' => {\n      'name' => 'openid_connect',\n      'scope' => ['openid'],\n      'response_type' => 'code',\n      'issuer' => 'http://127.0.0.1:4444/',\n      'discovery' => true,\n      'client_auth_method' => 'basic',\n      'send_scope_to_token_endpoint' => 'false',\n      'client_options' => {\n        'identifier' => 'gitlab',\n        'secret' => 'theSecret',\n        'redirect_uri' => 'http://gitlab.example.com:8000/users/auth/openid_connect/callback'\n      }\n    }\n  }\n]\n")),Object(o.b)("p",null,"In order to make that work which is not ssl, we need to patch the openid_connect\ngem. Checkout the details\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nov/openid_connect/issues/47"}),"here"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker-compose -f quickstart.yml  -f quickstart-postgres.yml -f quickstart-gitlab.yml exec gitlab /opt/gitlab/embedded/lib/ruby/gems/2.6.0/gems/openid_connect-1.1.8/lib/openid_connect/discovery/provider/config.rb\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"          def initialize(uri)\n            @host = uri.host\n            @port = uri.port unless [80, 443].include?(uri.port)\n            @path = File.join uri.path, '.well-known/openid-configuration'\n            @scheme = uri.scheme\n            attr_missing!\n          end\n\n          def endpoint\n            case scheme\n            when \"http\"\n              SWD.url_builder = URI::HTTP\n            else\n              SWD.url_builder = URI::HTTPS\n            end\n            SWD.url_builder.build [nil, host, port, path, nil, nil]\n          rescue URI::Error => e\n            raise SWD::Exception.new(e.message)\n          end\n")),Object(o.b)("p",null,"In order to avoid that scenario, this guide avoids OpenID-Connect. There might\nalso be other ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitlab.com/gitlab-org/gitlab-foss/-/issues/62208"}),"issues"),"\nwith OpenID-Connect on GitLab."))}b.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=b(n),p=a,d=h["".concat(r,".").concat(p)]||h[p]||u[p]||o;return n?i.a.createElement(d,l(l({ref:t},c),{},{components:n})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);