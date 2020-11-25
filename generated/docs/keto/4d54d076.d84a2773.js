(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),h=a,m=b["".concat(i,".").concat(h)]||b[h]||p[h]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(108)),i={id:"contributing",title:"Contribution Guidelines"},c={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contribution Guidelines",description:"\x3c!--",source:"@site/docs/contributing.md",slug:"/contributing",permalink:"/keto/docs/next/contributing",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/contributing.md",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1605603531},l=[{value:"Introduction",id:"introduction",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"How can I contribute?",id:"how-can-i-contribute",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Contributing Code",id:"contributing-code",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Disclosing vulnerabilities",id:"disclosing-vulnerabilities",children:[]},{value:"Code Style",id:"code-style",children:[]},{value:"Pull request procedure",id:"pull-request-procedure",children:[{value:"Working with Forks",id:"working-with-forks",children:[]}]},{value:"Conduct",id:"conduct",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"contributing-to-ory-project"},"Contributing to ORY {{Project}}"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#faq"}),"FAQ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#how-can-i-contribute"}),"How can I contribute?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#communication"}),"Communication")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#contributing-code"}),"Contributing Code")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#documentation"}),"Documentation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#disclosing-vulnerabilities"}),"Disclosing vulnerabilities")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#code-style"}),"Code Style")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#pull-request-procedure"}),"Pull request procedure"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#working-with-forks"}),"Working with Forks")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#conduct"}),"Conduct"))),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"There are many ways in which you can contribute, beyond writing code. The goal of this document is to provide a high-level overview of how you can get involved."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Please note"),": We take ORY {{Project}}'s security and our users' trust very\nseriously. If you believe you have found a security issue in ORY {{Project}},\nplease responsibly disclose by contacting us at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:security@ory.sh"}),"security@ory.sh"),"."),Object(r.b)("p",null,"First:\nAs a potential contributor, your changes and ideas are welcome at any hour of the day or night, weekdays, weekends, and holidays. Please do not ever hesitate to ask a question or send a pull request."),Object(r.b)("p",null,"If you are unsure, just ask or submit the issue or pull request anyways. You won't be yelled at for giving it your best effort. The worst that can happen is that you'll be politely asked to change something. We appreciate any sort of contributions, and don't want a wall of rules to get in\nthe way of that."),Object(r.b)("p",null,"That said, if you want to ensure that a pull request is likely to be merged,\ntalk to us! You can find out our thoughts and ensure that your contribution\nwon't clash or be obviated by ORY {{Project}}'s normal direction. A great way to\ndo this is via the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.ory.sh/"}),"ORY Community")," or join the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/chat"}),"ORY Chat"),"."),Object(r.b)("h2",{id:"faq"},"FAQ"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"I am new to the community. Where can I find the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"CODE_OF_CONDUCT.md"}),"ORY Community Code of Conduct?"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"I have a question. Where can I get ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#communication"}),"answers to questions regarding ORY {{Project}}?"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"I would like to contribute but I am not sure how. Are there ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#how-can-i-contribute"}),"easy ways to contribute?"),"\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/search?l=&o=desc&q=label%3A%22help+wanted%22+label%3A%22good+first+issue%22+is%3Aopen+user%3Aory+user%3Aory-corp&s=updated&type=Issues"}),"Or good first issues?"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"I want to talk to other ORY {{Project}} users. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#communication"}),"How can I become a part of the community?"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"I would like to know what I am agreeing to when I contribute to ORY {{Project}}. Does ORY have ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://cla-assistant.io/ory/"}),"a Contributors License Agreement?"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"I would like updates about new versions of ORY {{Project}}. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53"}),"How are new releases announced?")))),Object(r.b)("h2",{id:"how-can-i-contribute"},"How can I contribute?"),Object(r.b)("p",null,"If you want to start contributing code right away, we have a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/%7B%7BProject%7D%7D/labels/good%20first%20issue"}),"list of good first issues"),"."),Object(r.b)("p",null,"There are many other ways you can contribute without writing any code. Here are a few things you can do to help out:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Give us a star.")," It may not seem like much, but it really makes a difference. This is something that everyone can do to help out ORY {{Project}}. Github stars help the project gain visibility and stand out.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Join the community.")," Sometimes helping people can be as easy as listening to their problems and offering a different perspective. Join our Slack, have a look at discussions in the forum and take part in our weekly hangout. More info on this in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#communication"}),"Communication"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Helping with open issues."),"\nWe have a lot of open issues for ORY {{Project}} and some of them may lack necessary information, some are duplicates of older issues. You can help out by guiding people through the process of filling out the issue template, asking for clarifying information, or pointing them to existing issues that match their description of the problem.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Reviewing documentation changes."),"\nMost documentation just needs a review for proper spelling and grammar. If you think a document can be improved in any way, feel free to hit the ",Object(r.b)("inlineCode",{parentName:"p"},"edit")," button at the top of the page. More info on contributing to documentation here.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Help with tests."),"\nSome pull requests may lack proper tests or test plans. These are needed for the change to be implemented safely."))),Object(r.b)("h2",{id:"communication"},"Communication"),Object(r.b)("p",null,"We use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/chat"}),"Slack"),". You are welcome to drop in and ask\nquestions, discuss bugs and feature requests, talk to other users of ORY, etc."),Object(r.b)("p",null,"We have a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.ory.sh/"}),"forum"),". This is a great place for in-depth discussions and lots of code examples, logs and similar data."),Object(r.b)("p",null,"You can also join our weekly hangout, if you want to speak to the ORY team directly or ask some questions. You can find more info on the hangouts in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/chat"}),"Slack"),"."),Object(r.b)("p",null,"If you want to receive regular notifications about updates to ORY {{Project}}, consider joining the mailing list. We will ",Object(r.b)("em",{parentName:"p"},"only")," send you vital information on the projects that you are interested in."),Object(r.b)("p",null,"Also ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/orycorp"}),"follow us on twitter"),"."),Object(r.b)("h2",{id:"contributing-code"},"Contributing Code"),Object(r.b)("p",null,"Unless you are fixing a known bug, we ",Object(r.b)("strong",{parentName:"p"},"strongly")," recommend discussing it with\nthe core team via a GitHub issue or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/chat"}),"in our chat"),"\nbefore getting started to ensure your work is consistent with ORY {{Project}}'s\nroadmap and architecture."),Object(r.b)("p",null,"All contributions are made via pull request. Note that ",Object(r.b)("strong",{parentName:"p"},"all patches from all\ncontributors get reviewed"),". After a pull request is made other contributors\nwill offer feedback, and if the patch passes review a maintainer will accept it\nwith a comment. When pull requests fail testing, authors are expected to update\ntheir pull requests to address the failures until the tests pass and the pull\nrequest merges successfully. Look here for more info on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#pull-request-procedure"}),"Pull request procedure"),"."),Object(r.b)("p",null,"At least one review from a maintainer is required for all patches (even patches\nfrom maintainers)."),Object(r.b)("p",null,"Before your contributions can be merged you need to sign our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://cla-assistant.io/ory/"}),"Contributor License Agreement"),"."),Object(r.b)("p",null,"This agreement defines the terms under which your code is contributed to ORY.\nMore specifically it declares that you have the right to, and actually do, grant us the rights to use your contribution. You can see the Apache 2.0 license under\nwhich our projects are published ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/meta/blob/master/LICENSE"}),"here"),"."),Object(r.b)("p",null,'Reviewers should leave a "LGTM" comment once they are satisfied with the patch.\nIf the patch was submitted by a maintainer with write access, the pull request\nshould be merged by the submitter after review.'),Object(r.b)("h2",{id:"documentation"},"Documentation"),Object(r.b)("p",null,"Please provide documentation when changing, removing, or adding features.\nDocumentation resides in the project's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"docs"}),"docs")," folder. Generate API and\nconfiguration reference documentation using ",Object(r.b)("inlineCode",{parentName:"p"},"cd docs; npm run gen"),"."),Object(r.b)("p",null,"For further instructions please head over to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"docs/README.md"}),"docs/README.md"),"."),Object(r.b)("h2",{id:"disclosing-vulnerabilities"},"Disclosing vulnerabilities"),Object(r.b)("p",null,"Please disclose vulnerabilities exclusively to\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:security@ory.sh"}),"security@ory.sh"),". Do not use GitHub issues."),Object(r.b)("h2",{id:"code-style"},"Code Style"),Object(r.b)("p",null,"Please follow these guidelines when formatting source code:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go code should match the output of ",Object(r.b)("inlineCode",{parentName:"li"},"gofmt -s")," and pass ",Object(r.b)("inlineCode",{parentName:"li"},"golangci-lint run"),"."),Object(r.b)("li",{parentName:"ul"},"NodeJS and JavaScript code should be prettified using ",Object(r.b)("inlineCode",{parentName:"li"},"npm run format")," where\nappropriate.")),Object(r.b)("h2",{id:"pull-request-procedure"},"Pull request procedure"),Object(r.b)("p",null,"To make a pull request, you will need a GitHub account; if you are unclear on\nthis process, see GitHub's documentation on\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/articles/fork-a-repo"}),"forking")," and\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/articles/using-pull-requests"}),"pull requests"),". Pull\nrequests should be targeted at the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch. Before creating a pull\nrequest, go through this checklist:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a feature branch off of ",Object(r.b)("inlineCode",{parentName:"li"},"master")," so that changes do not get mixed up."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://git-scm.com/book/en/Git-Branching-Rebasing"}),"Rebase")," your local\nchanges against the ",Object(r.b)("inlineCode",{parentName:"li"},"master")," branch."),Object(r.b)("li",{parentName:"ol"},"Run the full project test suite with the ",Object(r.b)("inlineCode",{parentName:"li"},"go test ./...")," (or equivalent)\ncommand and confirm that it passes."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"gofmt -s")," (if the project is written in Go)."),Object(r.b)("li",{parentName:"ol"},"Ensure that each commit has a subsystem prefix (ex: ",Object(r.b)("inlineCode",{parentName:"li"},"controller:"),").")),Object(r.b)("p",null,'Pull requests will be treated as "review requests," and maintainers will give\nfeedback on the style and substance of the patch.'),Object(r.b)("p",null,"Normally, all pull requests must include tests that test your change.\nOccasionally, a change will be very difficult to test for. In those cases,\nplease include a note in your commit message explaining why."),Object(r.b)("h3",{id:"working-with-forks"},"Working with Forks"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'# First you clone the original repository\ngit clone git@github.com:ory/{{Project}}.git\n\n# Next you add a git remote that is your fork:\ngit remote add fork git@github.com:<YOUR-GITHUB-USERNAME-HERE>/{{Project}}.git\n\n# Next you fetch the latest changes from origin for master:\ngit fetch origin\ngit checkout master\ngit pull --rebase\n\n# Next you create a new feature branch off of master:\ngit checkout my-feature-branch\n\n# Now you do your work and commit your changes:\ngit add -A\ngit commit -a -m "fix: this is the subject line" -m "This is the body line. Closes #123"\n\n# And the last step is pushing this to your fork\ngit push -u fork my-feature-branch\n')),Object(r.b)("p",null,'Now go to the project\'s GitHub Pull Request page and click "New pull request"'),Object(r.b)("h2",{id:"conduct"},"Conduct"),Object(r.b)("p",null,"Whether you are a regular contributor or a newcomer, we care about making this\ncommunity a safe place for you and we've got your back."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We are committed to providing a friendly, safe and welcoming environment for\nall, regardless of gender, sexual orientation, disability, ethnicity,\nreligion, or similar personal characteristic."),Object(r.b)("li",{parentName:"ul"},"Please avoid using nicknames that might detract from a friendly, safe and\nwelcoming environment for all."),Object(r.b)("li",{parentName:"ul"},"Be kind and courteous. There is no need to be mean or rude."),Object(r.b)("li",{parentName:"ul"},"We will exclude you from interaction if you insult, demean or harass anyone.\nIn particular, we do not tolerate behavior that excludes people in socially\nmarginalized groups."),Object(r.b)("li",{parentName:"ul"},"Private harassment is also unacceptable. No matter who you are, if you feel\nyou have been or are being harassed or made uncomfortable by a community\nmember, please contact one of the channel ops or a member of the ORY\n{{Project}} core team immediately."),Object(r.b)("li",{parentName:"ul"},"Likewise any spamming, trolling, flaming, baiting or other attention-stealing\nbehaviour is not welcome.")),Object(r.b)("p",null,"We welcome discussion about creating a welcoming, safe, and productive\nenvironment for the community. If you have any questions, feedback, or concerns\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/chat"}),"please let us know"),"."))}u.isMDXComponent=!0}}]);