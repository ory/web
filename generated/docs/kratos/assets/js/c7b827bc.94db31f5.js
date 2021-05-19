(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{425:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(552)),s={id:"security",title:"Threat Models and Security Profiles"},o={unversionedId:"concepts/security",id:"version-v0.1/concepts/security",isDocsHomePage:!1,title:"Threat Models and Security Profiles",description:"Running any software that stores personal information exposes the",source:"@site/versioned_docs/version-v0.1/concepts/security.md",sourceDirName:"concepts",slug:"/concepts/security",permalink:"/kratos/docs/v0.1/concepts/security",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/concepts/security.md",version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,formattedLastUpdatedAt:"4/6/2020",frontMatter:{id:"security",title:"Threat Models and Security Profiles"},sidebar:"version-v0.1/docs",previous:{title:"Federation",permalink:"/kratos/docs/v0.1/concepts/federation"},next:{title:"Overview",permalink:"/kratos/docs/v0.1/self-service/flows/index"}},c=[{value:"Understanding Threats",id:"understanding-threats",children:[{value:"Account Enumeration Attacks",id:"account-enumeration-attacks",children:[]},{value:"Bruteforce Attacks",id:"bruteforce-attacks",children:[]},{value:"Phishing Attacks",id:"phishing-attacks",children:[]},{value:"Social Engineering Attacks",id:"social-engineering-attacks",children:[]},{value:"SMS Spoofing Attacks",id:"sms-spoofing-attacks",children:[]}]},{value:"Choosing the right Security Profile and Configuration",id:"choosing-the-right-security-profile-and-configuration",children:[{value:"Argon2",id:"argon2",children:[]}]},{value:"Digital Identity Guidelines",id:"digital-identity-guidelines",children:[{value:"Password Policy",id:"password-policy",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Running any software that stores personal information exposes the\ndeveloper/company to risks. Analyzing which threat agents pose a risk,\nunderstanding the possible motivations for an attack, or why an agent is a\nthreat, knowing the attack surface, the likelihood, and the impact are important\nall aspects of a threat model."),Object(i.b)("p",null,"This documentation can not substitute a thorough and serious threat model, yet\nit will provide some guidelines to help configure ORY Kratos in a way that makes\nit best suited for any risk assessment."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Please be aware that this chapter is still work in progress. Not all\nmitigation strategies have been implemented yet in ORY Kratos!")),Object(i.b)("h2",{id:"understanding-threats"},"Understanding Threats"),Object(i.b)("p",null,"This section examines several threat vectors in systems that manage identities."),Object(i.b)("h3",{id:"account-enumeration-attacks"},"Account Enumeration Attacks"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"Often, web applications reveal when a username exists on system, either as a\nconsequence of a misconfiguration or as a design decision. For example,\nsometimes, when we submit wrong credentials, we receive a message that states\nthat either the username is present on the system or the provided password is\nwrong. The information obtained can be used by an attacker to gain a list of\nusers on system. This information can be used to attack the web application,\nfor example, through a brute force or default username/password attack.\nDescription of the Issue"'),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://wiki.owasp.org/index.php/Testing_for_User_Enumeration_and_Guessable_User_Account_(OWASP-AT-002)"},"Source"))),Object(i.b)("h4",{id:"scenarios"},"Scenarios"),Object(i.b)("p",null,"Considering the above, an example would be for example an adult website. A\nthreat agent wants to blackmail a well known politician by checking if someone\ncan sign up at that website using the ",Object(i.b)("inlineCode",{parentName:"p"},"well-known-politician@email.com")," email."),Object(i.b)("p",null,"If the service responds with\n",Object(i.b)("inlineCode",{parentName:"p"},"Sorry, that email is already signed up here. Did you try to log in instead?"),",\nthe agent is able to proceed with some type of blackmail scheme."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://wiki.owasp.org/index.php/Testing_for_User_Enumeration_and_Guessable_User_Account_(OWASP-AT-002)#Black_Box_testing_and_example"},"OWASP defines several Black-Box tests"),"\nthat cover Account Enumeration Scenarios."),Object(i.b)("h4",{id:"mitigation"},"Mitigation"),Object(i.b)("p",null,"ORY Kratos can be configured to send an out-of-band message to the email used\nfor login, registration, account recovery, etc.:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'If an application or user tries to sign in using an unknown email address, an\nemail will be sent to that address reading "You tried to sign in at X but you\ndo not have an account yet, did you mean to sign up instead?"'),Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("h3",{id:"bruteforce-attacks"},"Bruteforce Attacks"),Object(i.b)("p",null,"Will be addressed in a future release."),Object(i.b)("h3",{id:"phishing-attacks"},"Phishing Attacks"),Object(i.b)("p",null,"Will be addressed in a future release."),Object(i.b)("h3",{id:"social-engineering-attacks"},"Social Engineering Attacks"),Object(i.b)("p",null,"Will be addressed in a future release."),Object(i.b)("h3",{id:"sms-spoofing-attacks"},"SMS Spoofing Attacks"),Object(i.b)("p",null,"Will be addressed in a future release."),Object(i.b)("h2",{id:"choosing-the-right-security-profile-and-configuration"},"Choosing the right Security Profile and Configuration"),Object(i.b)("p",null,"Will be addressed in a future release."),Object(i.b)("h3",{id:"argon2"},"Argon2"),Object(i.b)("p",null,"ORY Kratos uses Argon2 for password hashing. Argon2 is the official winner of\nthe PHC 2017. You can tweak the Argon2 configuration in your ORY Kratos\nconfiguration file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"hashers:\n  argon2:\n    memory: 1048576\n    iterations: 2\n    parallelism: 4\n    salt_length: 16\n    key_length: 32\n")),Object(i.b)("h2",{id:"digital-identity-guidelines"},"Digital Identity Guidelines"),Object(i.b)("p",null,"There is no one standard to digital identity. ORY Kratos closely follows\nemerging frameworks and guidelines such as:\n",Object(i.b)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/"},"Digital Identity Guidelines established by the National Institute of Standards and Technology (NIST)"),"\n(and a follow-up ",Object(i.b)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/"},"FAQ"),") ."),Object(i.b)("p",null,"As ORY Kratos grows, this document will continue to expand and add sections\ncovering individual security recommendations established by NIST."),Object(i.b)("h3",{id:"password-policy"},"Password Policy"),Object(i.b)("p",null,"Almost every service with a login offers some type of registration using a\npassword. Therefore, there are many strategies floating around, with many of\nthem implementing terrible and insecure patterns such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Not allowing special characters in passwords."),Object(i.b)("li",{parentName:"ul"},'Not allowing the use of password managers by disabling the "paste"\nfunctionality in password fields.'),Object(i.b)("li",{parentName:"ul"},"Requiring you to rotate your password every month."),Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("p",null,"Troy Hunt has written an\n",Object(i.b)("a",{parentName:"p",href:"https://www.troyhunt.com/passwords-evolved-authentication-guidance-for-the-modern-era/"},"excellent piece on password policies"),"\nand why they recently changed and how."),Object(i.b)("p",null,"ORY Kratos implements a password policy that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Checks if a password has previously been leaked using the\n",Object(i.b)("a",{parentName:"li",href:"https://haveibeenpwned.com/API/v2"},"HIBP API"),"; and"),Object(i.b)("li",{parentName:"ul"},"Checks if a password is too similar to one of the identifiers (in a future\nrelease ",Object(i.b)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/184"},"kratos#184"),").")),Object(i.b)("p",null,"This is a rundown of all the practices ORY Kratos implements and why. ",Object(i.b)("strong",{parentName:"p"},"Some\nthings need to be implemented by yourself")," as they must be implemented in the\nUser Interface that interfaces with ORY Kratos. You can find these in section\n",Object(i.b)("a",{parentName:"p",href:"#user-interface-guidelines"},"User Interface Guidelines"),"."),Object(i.b)("h4",{id:"password-complexity"},"Password Complexity"),Object(i.b)("p",null,"This outline and quotes are defined in the\n",Object(i.b)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/sp800-63b.html"},"NIST Digital Identity Guidelines - 5.1.1.2 Memorized Secret Verifiers"),".\nORY Kratos, unless explicitly advertised, implements these guidelines and best\npractices."),Object(i.b)("p",null,"Passwords must have a minimum length of 8 characters and all characters\n(unicode, ASCII) must be allowed:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Verifiers SHALL require subscriber-chosen memorized secrets to be at least 8\ncharacters in length. Verifiers SHOULD permit subscriber-chosen memorized\nsecrets at least 64 characters in length. All printing ASCII ","[RFC 20]","\ncharacters as well as the space character SHOULD be acceptable in memorized\nsecrets. Unicode ","[ISO/ISC 10646]"," characters SHOULD be accepted as well. To\nmake allowances for likely mistyping, verifiers MAY replace multiple\nconsecutive space characters with a single space character prior to\nverification, provided that the result is at least 8 characters in length.\nTruncation of the secret SHALL NOT be performed. For purposes of the above\nlength requirements, each Unicode code point SHALL be counted as a single\ncharacter.")),Object(i.b)("p",null,"Passwords must be checked against a database of compromised secrets such as\n",Object(i.b)("a",{parentName:"p",href:"https://haveibeenpwned.com"},"Have I Been Pwnd"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When processing requests to establish and change memorized secrets, verifiers\nSHALL compare the prospective secrets against a list that contains values\nknown to be commonly-used, expected, or compromised. For example, the list MAY\ninclude, but is not limited to:"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Passwords obtained from previous breach corpuses."),Object(i.b)("li",{parentName:"ul"},"Dictionary words."),Object(i.b)("li",{parentName:"ul"},"Repetitive or sequential characters (e.g. \u2018aaaaaa\u2019, \u20181234abcd\u2019)."),Object(i.b)("li",{parentName:"ul"},"Context-specific words, such as the name of the service, the username, and\nderivatives thereof.")),Object(i.b)("p",{parentName:"blockquote"},"If the chosen secret is found in the list, the CSP or verifier SHALL advise\nthe subscriber that they need to select a different secret, SHALL provide the\nreason for rejection, and SHALL require the subscriber to choose a different\nvalue.")),Object(i.b)("p",null,"Show the user a password-strength meter (to be implemented, see\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/136"},"#136"),"):"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Verifiers SHOULD offer guidance to the subscriber, such as a password-strength\nmeter ","[Meters]",", to assist the user in choosing a strong memorized secret. This\nis particularly important following the rejection of a memorized secret on the\nabove list as it discourages trivial modification of listed (and likely very\nweak) memorized secrets")),Object(i.b)("p",null,"Do not require mixtures of characters types or prohibiting repeated characters:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Verifiers SHOULD NOT impose other composition rules (e.g., requiring mixtures\nof different character types or prohibiting consecutively repeated characters)\nfor memorized secrets. Verifiers SHOULD NOT require memorized secrets to be\nchanged arbitrarily (e.g., periodically). However, verifiers SHALL force a\nchange if there is evidence of compromise of the authenticator.")),Object(i.b)("h4",{id:"user-interface-guidelines"},"User Interface Guidelines"),Object(i.b)("p",null,"These best practices need to be implemented in your User Interface and can not\nbe handled by ORY Kratos. All ORY-built reference and demo applications\nimplement these best practices:"),Object(i.b)("p",null,"Allow pasting of passwords:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Verifiers SHOULD permit claimants to use \u201cpaste\u201d functionality when entering a\nmemorized secret. This facilitates the use of password managers, which are\nwidely used and in many cases increase the likelihood that users will choose\nstronger memorized secrets.")),Object(i.b)("p",null,"Allow the user to show the secret in the UI:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"In order to assist the claimant in successfully entering a memorized secret,\nthe verifier SHOULD offer an option to display the secret \u2014 rather than a\nseries of dots or asterisks \u2014 until it is entered. This allows the claimant to\nverify their entry if they are in a location where their screen is unlikely to\nbe observed. The verifier MAY also permit the user\u2019s device to display\nindividual entered characters for a short time after each character is typed\nto verify correct entry. This is particularly applicable on mobile devices.")),Object(i.b)("h4",{id:"password-hints"},"Password Hints"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Memorized secret verifiers SHALL NOT permit the subscriber to store a \u201chint\u201d\nthat is accessible to an unauthenticated claimant."),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/sp800-63b.html"},"NIST Digital Identity Guidelines - 5.1.1.2 Memorized Secret Verifiers"))))}u.isMDXComponent=!0},552:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,h=d["".concat(s,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(h,o(o({ref:t},l),{},{components:n})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);