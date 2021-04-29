(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(8),o=(t(0),t(112)),i={id:"contributing",title:"Contributing"},l={unversionedId:"ecosystem/contributing",id:"ecosystem/contributing",isDocsHomePage:!1,title:"Contributing",description:"This document is a work in progress. We will be documenting the inner workings",source:"@site/docs/ecosystem/contributing.md",sourceDirName:"ecosystem",slug:"/ecosystem/contributing",permalink:"/docs/ecosystem/contributing",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/ecosystem/contributing.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619623984,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"docs",previous:{title:"Software Updates",permalink:"/docs/ecosystem/upgrading"},next:{title:"Roadmap",permalink:"/docs/ecosystem/roadmap"}},s=[{value:"Releasing Software",id:"releasing-software",children:[{value:"Defining Release Config",id:"defining-release-config",children:[]},{value:"Update install script",id:"update-install-script",children:[]},{value:"CircleCI",id:"circleci",children:[]}]},{value:"CI",id:"ci",children:[{value:"ory/nancy",id:"orynancy",children:[]}]},{value:"Toolchain",id:"toolchain",children:[{value:"Checking for vulnerabilities",id:"checking-for-vulnerabilities",children:[]},{value:"Pinning indirect go module dependencies.",id:"pinning-indirect-go-module-dependencies",children:[]}]},{value:"Development",id:"development",children:[{value:"DBAL gobuffalo/pop",id:"dbal-gobuffalopop",children:[]},{value:"SQL Migrations",id:"sql-migrations",children:[]}]}],c={toc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document is a work in progress. We will be documenting the inner workings\nof the Ory GitHub ecosystem and project structures in here. If you feel there is\nsomething missing or should be added, please open an issue in\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/docs"},"ory/docs")," or contact us on the\n",Object(o.b)("a",{parentName:"p",href:"https://community.ory.sh/"},"forum")," or ",Object(o.b)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"chat"),"."),Object(o.b)("h2",{id:"releasing-software"},"Releasing Software"),Object(o.b)("p",null,"To release a project, run the following bash command in the root of the project\nyou would like to release. The first argument can be one of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"patch")," bumps ",Object(o.b)("inlineCode",{parentName:"li"},"v1.2.3")," to ",Object(o.b)("inlineCode",{parentName:"li"},"v1.2.4")," (does not work for pre-releases such as\n",Object(o.b)("inlineCode",{parentName:"li"},"v1.2.3-beta.1"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"minor")," bumps ",Object(o.b)("inlineCode",{parentName:"li"},"v1.2.3")," to ",Object(o.b)("inlineCode",{parentName:"li"},"v1.3.0")," (does not work for pre-releases such as\n",Object(o.b)("inlineCode",{parentName:"li"},"v1.2.3-beta.1"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"major")," bumps ",Object(o.b)("inlineCode",{parentName:"li"},"v1.2.3")," to ",Object(o.b)("inlineCode",{parentName:"li"},"v2.0.0")," (does not work for pre-releases such as\n",Object(o.b)("inlineCode",{parentName:"li"},"v1.2.3-beta.1"),")"),Object(o.b)("li",{parentName:"ul"},"Any ",Object(o.b)("a",{parentName:"li",href:"https://semver.org"},"semver-valid")," version, for example ",Object(o.b)("inlineCode",{parentName:"li"},"v1.2.3-beta.1"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"release_as=v1.2.3\nbash <(curl -s https://raw.githubusercontent.com/ory/meta/master/scripts/release.sh) $release_as\n")),Object(o.b)("h3",{id:"defining-release-config"},"Defining Release Config"),Object(o.b)("p",null,"For the scripts to work, the project must be located in a directory structure\nthat reflects the GitHub organisation and repository name, for example:\n",Object(o.b)("inlineCode",{parentName:"p"},"path/to/ory/hydra"),"."),Object(o.b)("h4",{id:"goreleaser"},"Goreleaser"),Object(o.b)("p",null,"We use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/goreleaser/goreleaser/releases"},"goreleaser"),"."),Object(o.b)("p",null,"The listed configuration options should be included in every ",Object(o.b)("inlineCode",{parentName:"p"},".goreleaser.yml"),"\nconfig. Make sure you set env vars and ",Object(o.b)("inlineCode",{parentName:"p"},"go mod download")," and run e.g. packr2 and\nother tools first:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".goreleaser.yml"',title:'".goreleaser.yml"'},"env:\n  - GO111MODULE=on\n\nbefore:\n  hooks:\n    - go mod download\n    # - go install github.com/gobuffalo/packr/v2/packr2\n    # - packr2\n")),Object(o.b)("p",null,"Tag ",Object(o.b)("inlineCode",{parentName:"p"},"-alpha.1")," and other pre-release tags as pre-release on GitHub:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"release:\n  prerelease: auto\n")),Object(o.b)("p",null,"Name snapshot releases ",Object(o.b)("inlineCode",{parentName:"p"},"-next"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"snapshot:\n  name_template: '{{ .Tag }}-next'\n")),Object(o.b)("p",null,"If you create a new goreleaser config, you may also want to create the following\nempty GitHub repositories:"),Object(o.b)("p",null,"Build and publish on Docker. You need to create a repository on Docker Hub\nfirst!"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"# Build dockerfiles\ndockers:\n  - dockerfile: Dockerfile\n    binaries:\n      - $PROJECT_NAME\n    image_templates:\n      - 'oryd/$PROJECT_NAME:v{{ .Major }}'\n      - 'oryd/$PROJECT_NAME:v{{ .Major }}.{{ .Minor }}'\n      - 'oryd/$PROJECT_NAME:v{{ .Major }}.{{ .Minor }}.{{ .Patch }}'\n      - 'oryd/$PROJECT_NAME:latest'\n")),Object(o.b)("p",null,"If you add ",Object(o.b)("a",{parentName:"p",href:"https://scoop.sh"},"Scoop")," (Homebrew for Windows) you must also create\na GitHub repository under the ",Object(o.b)("inlineCode",{parentName:"p"},"ory")," org named ",Object(o.b)("inlineCode",{parentName:"p"},"scoop-$PROJECT_NAME")," (e.g.\n",Object(o.b)("inlineCode",{parentName:"p"},"scoop-hydra"),")."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"scoop:\n  bucket:\n    owner: ory\n    name: scoop-$PROJECT_NAME\n  homepage: https://www.ory.sh\n  commit_author:\n    name: aeneasr\n    email: aeneas@ory.sh\n")),Object(o.b)("p",null,"If you add ",Object(o.b)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," you must also create a GitHub repository\nunder the ",Object(o.b)("inlineCode",{parentName:"p"},"ory")," org named ",Object(o.b)("inlineCode",{parentName:"p"},"homebrew-$PROJECT_NAME")," (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"homebrew-hydra"),")."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"brews:\n  - github:\n      owner: ory\n      name: homebrew-$PROJECT_NAME\n    ids:\n      - <<REPLACE-WITH-ARCHIVE-ID>>\n    homepage: https://www.ory.sh\n    commit_author:\n      name: aeneasr\n      email: aeneas@ory.sh\n")),Object(o.b)("p",null,"We use the following replacements:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"archives:\n  - replacements:\n      darwin: macOS\n      386: 32-bit\n      amd64: 64-bit\n    format_overrides:\n      - goos: windows\n        format: zip\n")),Object(o.b)("h3",{id:"update-install-script"},"Update install script"),Object(o.b)("p",null,"When you have finalized changes to the ",Object(o.b)("inlineCode",{parentName:"p"},".goreleaser.yml"),", run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ GO111MODULES=off go get -u github.com/goreleaser/godownloader\n$ godownloader .goreleaser.yml --repo=$(basename $(dirname $(pwd)))/$(basename $(pwd)) > ./install.sh\n")),Object(o.b)("h3",{id:"circleci"},"CircleCI"),Object(o.b)("p",null,"Define CI Environment Variables:"),Object(o.b)("ul",{className:"contains-task-list"},Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure you set ",Object(o.b)("inlineCode",{parentName:"li"},"GITHUB_TOKEN")," in the project's CI config."),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure you set ",Object(o.b)("inlineCode",{parentName:"li"},"MAILCHIMP_API_KEY")," in the project's CI config."),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure you set ",Object(o.b)("inlineCode",{parentName:"li"},"DOCKER_USER")," in the project's CI config."),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure you set ",Object(o.b)("inlineCode",{parentName:"li"},"DOCKER_TOKEN")," in the project's CI config.")),Object(o.b)("p",null,"In the project's CircleCI config (",Object(o.b)("inlineCode",{parentName:"p"},".circleci/config.yml"),"), use the following\nworkflow (please use an appropriate ",Object(o.b)("inlineCode",{parentName:"p"},"$VERSION"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"orbs:\n  goreleaser: ory/goreleaser@0.1.7\n  slack: circleci/slack@3.4.2\n\nworkflows:\n  my-workflow:\n    jobs:\n      - goreleaser/test:\n          filters:\n            tags:\n              only: /.*/\n      - goreleaser/release:\n          requires:\n            - goreleaser/test\n          filters:\n            branches:\n              ignore: /.*/\n            tags:\n              only: /.*/\n\n      - goreleaser/newsletter-draft:\n          chimp-list: f605a41b53\n          chimp-segment: 6478605\n          requires:\n            - goreleaser/release\n          filters:\n            tags:\n              only: /.*/\n      - slack/approval-notification:\n          message: Pending approval\n          channel: release-automation\n          requires:\n            - goreleaser/newsletter-draft\n          filters:\n            tags:\n              only: /.*/\n      - newsletter-approval:\n          type: approval\n          requires:\n            - goreleaser/newsletter-draft\n          filters:\n            tags:\n              only: /.*/\n      - goreleaser/newsletter-send:\n          chimp-list: f605a41b53\n          requires:\n            - newsletter-approval\n          filters:\n            tags:\n              only: /.*/\n")),Object(o.b)("h2",{id:"ci"},"CI"),Object(o.b)("p",null,"We use ",Object(o.b)("a",{parentName:"p",href:"http://github.com/ory/ci"},"our own CircleCI Orbs"),":"),Object(o.b)("h3",{id:"orynancy"},"ory/nancy"),Object(o.b)("p",null,"Enables nancy vulnerability scanning for the repository."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"orbs:\n  nancy: ory/nancy@0.0.9\n\nworkflows:\n  test:\n    jobs:\n      - nancy/test:\n        filters:\n          tags:\n            only: /.*/\n")),Object(o.b)("h2",{id:"toolchain"},"Toolchain"),Object(o.b)("h3",{id:"checking-for-vulnerabilities"},"Checking for vulnerabilities"),Object(o.b)("h4",{id:"nodejs"},"NodeJS"),Object(o.b)("p",null,"This is done automatically by GitHub"),Object(o.b)("h4",{id:"go"},"Go"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"# Outside of a go module-enabled project:\n$ go get -u github.com/sonatype-nexus-community/nancy\n\n# Inside your go module-enabled project:\n$ go mod list -m all | nancy\n")),Object(o.b)("h3",{id:"pinning-indirect-go-module-dependencies"},"Pinning indirect go module dependencies."),Object(o.b)("p",null,"Sometimes a project has an indirect dependency (another dependency requires that\ndependency) which does not pass, for example, ",Object(o.b)("inlineCode",{parentName:"p"},"nancy")," vulnerability scanning.\nBecause it's not possible to pin this dependency to a specific version, we need\nto explicitly require it. But because it's not directly required by our code, it\nwill be pruned when using ",Object(o.b)("inlineCode",{parentName:"p"},"go mod tidy"),". To prevent that, create a file which\nimports the dependency without use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:'language-title="go_mod_indirect_pins.go'},'// +build go_mod_indirect_pins\n\npackage main\n\nimport _ "github.com/my/dependency"\n')),Object(o.b)("p",null,"You would do the same if the project uses dev tools such as ",Object(o.b)("inlineCode",{parentName:"p"},"packr2"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"goimports"),", ",Object(o.b)("inlineCode",{parentName:"p"},"goreturns"),", ",Object(o.b)("inlineCode",{parentName:"p"},"swagutil"),", ... as part of e.g. the Makefile or other\nscripts."),Object(o.b)("h2",{id:"development"},"Development"),Object(o.b)("h3",{id:"dbal-gobuffalopop"},"DBAL gobuffalo/pop"),Object(o.b)("h4",{id:"table-names"},"Table Names"),Object(o.b)("p",null,"Please define custom table names for all table structs. Keep in mind that\n",Object(o.b)("inlineCode",{parentName:"p"},"TableName()")," must be a value receiver, not a pointer receiver, for slices\n",Object(o.b)("inlineCode",{parentName:"p"},"[]Model")," to work properly:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},'-func (m *Model) TableName(ctx context.Context) string {\n+func (m Model) TableName(ctx context.Context) string {\n    return "foo"\n}\n')),Object(o.b)("h3",{id:"sql-migrations"},"SQL Migrations"),Object(o.b)("p",null,"Ory uses a lightweight DBAL across all projects that require a database. This\nDBAL is typically stored in the ",Object(o.b)("inlineCode",{parentName:"p"},"persistence/")," directory. Since we only support\nSQL at the moment - there are no plans to add new databases and contributions\nwill not be accepted due to maintenance effort - you will find the\nimplementation in ",Object(o.b)("inlineCode",{parentName:"p"},"persistence/sql"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This section currently only applies to Ory Kratos and Ory Keto. Ory Hydra is\ncurrently using an approach that does not rely on fizz migrations. Please\ndiscuss with maintainers before making changes to Ory Hydra SQL schemata."))),Object(o.b)("p",null,"In order to provide a process to upgrade SQL schemata, we use migrations. These\nmigrations are generated using the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/gobuffalo/fizz"},"fizz language")," and then rendered to SQL\nusing the Ory CLI."),Object(o.b)("p",null,'This is necessary because there are differences between the SQL "dialects" of\nSQLite (does not support certain ',Object(o.b)("inlineCode",{parentName:"p"},"ALTER TABLE")," statements for example),\nPostgreSQL, MySQL, and CockroachDB."),Object(o.b)("p",null,"To change the schema, create a new fizz template using:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"# In the project root - e.g. /kratos\n$ make .bin/ory\n\n# If make .bin/ory fails use:\n# $ make .bin/cli\n#\n# and replace `.bin/ory` with `.bin/cli`.\n# We are working on streamlining this\n# across all repos.\n\n$ .bin/ory dev pop migration create persistence/sql/migrations/templates descriptive_change\n")),Object(o.b)("p",null,"This will create two new files:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ ls -la persistence/sql/migrations/templates | tail -n 2\n-rw-r--r--   1 foobar  staff      0 Apr 28 17:25 20210428172500_descriptive_change.down.fizz\n-rw-r--r--   1 foobar  staff      0 Apr 28 17:25 20210428172500_descriptive_change.up.fizz\n")),Object(o.b)("p",null,"Add you fizz migrations there. The ",Object(o.b)("inlineCode",{parentName:"p"},"up")," file is for applying your schema\nchanges, the ",Object(o.b)("inlineCode",{parentName:"p"},"down")," file for reverting them."),Object(o.b)("p",null,"Once your migrations are added, it is time to render them to SQL. Make sure that\nDocker is running and execute:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ .bin/ory dev pop migration render persistence/sql/migrations/templates persistence/sql/migrations/sql\n")),Object(o.b)("p",null,"If you encounter errors you can also try running this with the ",Object(o.b)("inlineCode",{parentName:"p"},"--replace"),"\noption but please let maintainers know that you used ",Object(o.b)("inlineCode",{parentName:"p"},"--replace")," in your PR:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ .bin/ory dev pop migration render --replace persistence/sql/migrations/templates persistence/sql/migrations/sql\n")),Object(o.b)("p",null,"This will render your migrations to SQL files. Add them to git (",Object(o.b)("inlineCode",{parentName:"p"},"git add -A"),")\nand commit them."),Object(o.b)("p",null,"Next, you need to update the migration tests. To do so, run the sync command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ .bin/ory dev pop migration sync persistence/sql/migrations/templates persistence/sql/migratest/testdata\n")),Object(o.b)("p",null,"This will add create a new SQL file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ ls -la  persistence/sql/migratest/testdata | tail -n 1\n-rw-r--r--   1 foobar  staff      0 Apr 28 17:28 20210428172500_testdata.sql\n")),Object(o.b)("p",null,"Add an ",Object(o.b)("inlineCode",{parentName:"p"},"INSERT")," or ",Object(o.b)("inlineCode",{parentName:"p"},"UPDATE")," or ",Object(o.b)("inlineCode",{parentName:"p"},"DELETE")," statement that reflects the changes you\nhave made to the schema to the file. Let's say you added a new column\n",Object(o.b)("inlineCode",{parentName:"p"},"new_column")," to table ",Object(o.b)("inlineCode",{parentName:"p"},"bar"),". In that case, write an ",Object(o.b)("inlineCode",{parentName:"p"},"INSERT")," statement that\nreflects this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"INSERT INTO bar (old_column, new_column) VALUES ('foo', 'bar');\n")),Object(o.b)("p",null,"Next, execute the tests:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ cd persistence/sql/migratest\n$ go test -tags sqlite ./...\n")),Object(o.b)("p",null,"The tests will probably fail because the fixtures need to be updated. To update\nthem, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ cd persistence/sql/migratest\n$ go test -tags sqlite,refresh -short .\n")),Object(o.b)("p",null,"You might need to run the ",Object(o.b)("inlineCode",{parentName:"p"},"go test")," command two or three times before all\nfixtures have been updated."),Object(o.b)("p",null,"That's it! :)"))}b.isMDXComponent=!0},112:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.a.createElement(u,l(l({ref:n},c),{},{components:t})):r.a.createElement(u,l({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);