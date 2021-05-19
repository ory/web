(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),o=(n(0),n(553)),i={id:"contributing",title:"Contribution Guidelines"},s={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contribution Guidelines",description:"\x3c!--",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/kratos/docs/next/contributing",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/contributing.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"contributing",title:"Contribution Guidelines"},sidebar:"docs",previous:{title:"Configuring",permalink:"/kratos/docs/next/configuring"},next:{title:"Frequently Asked Questions (FAQ)",permalink:"/kratos/docs/next/faq"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"How can I contribute?",id:"how-can-i-contribute",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Contributing Code",id:"contributing-code",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Disclosing vulnerabilities",id:"disclosing-vulnerabilities",children:[]},{value:"Code Style",id:"code-style",children:[]},{value:"Pull request procedure",id:"pull-request-procedure",children:[{value:"Working with Forks",id:"working-with-forks",children:[]}]},{value:"Conduct",id:"conduct",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"contributing-to-ory-kratos"},"Contributing to Ory Kratos"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#introduction"},"Introduction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#faq"},"FAQ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#how-can-i-contribute"},"How can I contribute?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#communication"},"Communication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#contributing-code"},"Contributing Code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#documentation"},"Documentation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#disclosing-vulnerabilities"},"Disclosing vulnerabilities")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-style"},"Code Style")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#pull-request-procedure"},"Pull request procedure"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#working-with-forks"},"Working with Forks")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#conduct"},"Conduct"))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"There are many ways in which you can contribute, beyond writing code. The goal\nof this document is to provide a high-level overview of how you can get\ninvolved."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Please note"),": We take Ory Kratos's security and our users' trust very\nseriously. If you believe you have found a security issue in Ory Kratos, please\nresponsibly disclose by contacting us at ",Object(o.b)("a",{parentName:"p",href:"mailto:security@ory.sh"},"security@ory.sh"),"."),Object(o.b)("p",null,"First: As a potential contributor, your changes and ideas are welcome at any\nhour of the day or night, weekdays, weekends, and holidays. Please do not ever\nhesitate to ask a question or send a pull request."),Object(o.b)("p",null,"If you are unsure, just ask or submit the issue or pull request anyways. You\nwon't be yelled at for giving it your best effort. The worst that can happen is\nthat you'll be politely asked to change something. We appreciate any sort of\ncontributions, and don't want a wall of rules to get in the way of that."),Object(o.b)("p",null,"That said, if you want to ensure that a pull request is likely to be merged,\ntalk to us! You can find out our thoughts and ensure that your contribution\nwon't clash or be obviated by Ory Kratos's normal direction. A great way to do\nthis is via ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/discussions"},"Ory Kratos Discussions"),"\nor the ",Object(o.b)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"Ory Chat"),"."),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"I am new to the community. Where can I find the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/master/CODE_OF_CONDUCT.md"},"Ory Community Code of Conduct?"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"I have a question. Where can I get\n",Object(o.b)("a",{parentName:"p",href:"#communication"},"answers to questions regarding Ory Kratos?"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"I would like to contribute but I am not sure how. Are there\n",Object(o.b)("a",{parentName:"p",href:"#how-can-i-contribute"},"easy ways to contribute?"),"\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/search?l=&o=desc&q=label%3A%22help+wanted%22+label%3A%22good+first+issue%22+is%3Aopen+user%3Aory+user%3Aory-corp&s=updated&type=Issues"},"Or good first issues?"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"I want to talk to other Ory Kratos users.\n",Object(o.b)("a",{parentName:"p",href:"#communication"},"How can I become a part of the community?"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"I would like to know what I am agreeing to when I contribute to Ory Kratos.\nDoes Ory have\n",Object(o.b)("a",{parentName:"p",href:"https://cla-assistant.io/ory/kratos"},"a Contributors License Agreement?"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"I would like updates about new versions of Ory Kratos.\n",Object(o.b)("a",{parentName:"p",href:"https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53"},"How are new releases announced?")))),Object(o.b)("h2",{id:"how-can-i-contribute"},"How can I contribute?"),Object(o.b)("p",null,"If you want to start contributing code right away, we have a\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/labels/good%20first%20issue"},"list of good first issues"),"."),Object(o.b)("p",null,"There are many other ways you can contribute without writing any code. Here are\na few things you can do to help out:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Give us a star.")," It may not seem like much, but it really makes a\ndifference. This is something that everyone can do to help out Ory Kratos.\nGithub stars help the project gain visibility and stand out.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Join the community.")," Sometimes helping people can be as easy as listening\nto their problems and offering a different perspective. Join our Slack, have a\nlook at discussions in the forum and take part in our weekly hangout. More\ninfo on this in ",Object(o.b)("a",{parentName:"p",href:"#communication"},"Communication"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Helping with open issues.")," We have a lot of open issues for Ory Kratos and\nsome of them may lack necessary information, some are duplicates of older\nissues. You can help out by guiding people through the process of filling out\nthe issue template, asking for clarifying information, or pointing them to\nexisting issues that match their description of the problem.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Reviewing documentation changes.")," Most documentation just needs a review\nfor proper spelling and grammar. If you think a document can be improved in\nany way, feel free to hit the ",Object(o.b)("inlineCode",{parentName:"p"},"edit")," button at the top of the page. More info\non contributing to documentation here.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Help with tests.")," Some pull requests may lack proper tests or test plans.\nThese are needed for the change to be implemented safely."))),Object(o.b)("h2",{id:"communication"},"Communication"),Object(o.b)("p",null,"We use ",Object(o.b)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"Slack"),". You are welcome to drop in and ask\nquestions, discuss bugs and feature requests, talk to other users of Ory, etc."),Object(o.b)("p",null,"Check out ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/discussions"},"Ory Kratos Discussions"),".\nThis is a great place for in-depth discussions and lots of code examples, logs\nand similar data."),Object(o.b)("p",null,"You can also join our community hangout, if you want to speak to the Ory team\ndirectly or ask some questions. You can find more info on the hangouts in\n",Object(o.b)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"Slack"),"."),Object(o.b)("p",null,"If you want to receive regular notifications about updates to Ory Kratos,\nconsider joining the mailing list. We will ",Object(o.b)("em",{parentName:"p"},"only")," send you vital information on\nthe projects that you are interested in."),Object(o.b)("p",null,"Also ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/orycorp"},"follow us on twitter"),"."),Object(o.b)("h2",{id:"contributing-code"},"Contributing Code"),Object(o.b)("p",null,"Unless you are fixing a known bug, we ",Object(o.b)("strong",{parentName:"p"},"strongly")," recommend discussing it with\nthe core team via a GitHub issue or ",Object(o.b)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"in our chat"),"\nbefore getting started to ensure your work is consistent with Ory Kratos's\nroadmap and architecture."),Object(o.b)("p",null,"All contributions are made via pull request. Note that ",Object(o.b)("strong",{parentName:"p"},"all patches from all\ncontributors get reviewed"),". After a pull request is made other contributors\nwill offer feedback, and if the patch passes review a maintainer will accept it\nwith a comment. When pull requests fail testing, authors are expected to update\ntheir pull requests to address the failures until the tests pass and the pull\nrequest merges successfully. Look here for more info on the\n",Object(o.b)("a",{parentName:"p",href:"#pull-request-procedure"},"Pull request procedure"),"."),Object(o.b)("p",null,"At least one review from a maintainer is required for all patches (even patches\nfrom maintainers)."),Object(o.b)("p",null,"Before your contributions can be merged you need to sign our\n",Object(o.b)("a",{parentName:"p",href:"https://cla-assistant.io/ory/kratos"},"Contributor License Agreement"),"."),Object(o.b)("p",null,"This agreement defines the terms under which your code is contributed to Ory.\nMore specifically it declares that you have the right to, and actually do, grant\nus the rights to use your contribution. You can see the Apache 2.0 license under\nwhich our projects are published\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/meta/blob/master/LICENSE"},"here"),"."),Object(o.b)("p",null,'Reviewers should leave a "LGTM" comment once they are satisfied with the patch.\nIf the patch was submitted by a maintainer with write access, the pull request\nshould be merged by the submitter after review.'),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("p",null,"Please provide documentation when changing, removing, or adding features.\nDocumentation resides in the project's\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/tree/master/docs"},"docs")," folder. Generate API and\nconfiguration reference documentation using ",Object(o.b)("inlineCode",{parentName:"p"},"cd docs; npm run gen"),"."),Object(o.b)("p",null,"For further instructions please head over to\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/master/README.md"},"docs/README.md"),"."),Object(o.b)("h2",{id:"disclosing-vulnerabilities"},"Disclosing vulnerabilities"),Object(o.b)("p",null,"Please disclose vulnerabilities exclusively to\n",Object(o.b)("a",{parentName:"p",href:"mailto:security@ory.sh"},"security@ory.sh"),". Do not use GitHub issues."),Object(o.b)("h2",{id:"code-style"},"Code Style"),Object(o.b)("p",null,"Please follow these guidelines when formatting source code:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go code should match the output of ",Object(o.b)("inlineCode",{parentName:"li"},"gofmt -s")," and pass ",Object(o.b)("inlineCode",{parentName:"li"},"golangci-lint run"),"."),Object(o.b)("li",{parentName:"ul"},"NodeJS and JavaScript code should be prettified using ",Object(o.b)("inlineCode",{parentName:"li"},"npm run format")," where\nappropriate.")),Object(o.b)("h2",{id:"pull-request-procedure"},"Pull request procedure"),Object(o.b)("p",null,"To make a pull request, you will need a GitHub account; if you are unclear on\nthis process, see GitHub's documentation on\n",Object(o.b)("a",{parentName:"p",href:"https://help.github.com/articles/fork-a-repo"},"forking")," and\n",Object(o.b)("a",{parentName:"p",href:"https://help.github.com/articles/using-pull-requests"},"pull requests"),". Pull\nrequests should be targeted at the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch. Before creating a pull\nrequest, go through this checklist:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a feature branch off of ",Object(o.b)("inlineCode",{parentName:"li"},"master")," so that changes do not get mixed up."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"http://git-scm.com/book/en/Git-Branching-Rebasing"},"Rebase")," your local\nchanges against the ",Object(o.b)("inlineCode",{parentName:"li"},"master")," branch."),Object(o.b)("li",{parentName:"ol"},"Run the full project test suite with the ",Object(o.b)("inlineCode",{parentName:"li"},"go test ./...")," (or equivalent)\ncommand and confirm that it passes."),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"gofmt -s")," (if the project is written in Go)."),Object(o.b)("li",{parentName:"ol"},"Ensure that each commit has a subsystem prefix (ex: ",Object(o.b)("inlineCode",{parentName:"li"},"controller:"),").")),Object(o.b)("p",null,'Pull requests will be treated as "review requests," and maintainers will give\nfeedback on the style and substance of the patch.'),Object(o.b)("p",null,"Normally, all pull requests must include tests that test your change.\nOccasionally, a change will be very difficult to test for. In those cases,\nplease include a note in your commit message explaining why."),Object(o.b)("h3",{id:"working-with-forks"},"Working with Forks"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# First you clone the original repository\ngit clone git@github.com:ory/ory/kratos.git\n\n# Next you add a git remote that is your fork:\ngit remote add fork git@github.com:<YOUR-GITHUB-USERNAME-HERE>/ory/kratos.git\n\n# Next you fetch the latest changes from origin for master:\ngit fetch origin\ngit checkout master\ngit pull --rebase\n\n# Next you create a new feature branch off of master:\ngit checkout my-feature-branch\n\n# Now you do your work and commit your changes:\ngit add -A\ngit commit -a -m "fix: this is the subject line" -m "This is the body line. Closes #123"\n\n# And the last step is pushing this to your fork\ngit push -u fork my-feature-branch\n')),Object(o.b)("p",null,'Now go to the project\'s GitHub Pull Request page and click "New pull request"'),Object(o.b)("h2",{id:"conduct"},"Conduct"),Object(o.b)("p",null,"Whether you are a regular contributor or a newcomer, we care about making this\ncommunity a safe place for you and we've got your back."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We are committed to providing a friendly, safe and welcoming environment for\nall, regardless of gender, sexual orientation, disability, ethnicity,\nreligion, or similar personal characteristic."),Object(o.b)("li",{parentName:"ul"},"Please avoid using nicknames that might detract from a friendly, safe and\nwelcoming environment for all."),Object(o.b)("li",{parentName:"ul"},"Be kind and courteous. There is no need to be mean or rude."),Object(o.b)("li",{parentName:"ul"},"We will exclude you from interaction if you insult, demean or harass anyone.\nIn particular, we do not tolerate behavior that excludes people in socially\nmarginalized groups."),Object(o.b)("li",{parentName:"ul"},"Private harassment is also unacceptable. No matter who you are, if you feel\nyou have been or are being harassed or made uncomfortable by a community\nmember, please contact one of the channel ops or a member of the Ory Kratos\ncore team immediately."),Object(o.b)("li",{parentName:"ul"},"Likewise any spamming, trolling, flaming, baiting or other attention-stealing\nbehaviour is not welcome.")),Object(o.b)("p",null,"We welcome discussion about creating a welcoming, safe, and productive\nenvironment for the community. If you have any questions, feedback, or concerns\n",Object(o.b)("a",{parentName:"p",href:"https://www.ory.sh/chat"},"please let us know"),"."))}u.isMDXComponent=!0},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,h=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);