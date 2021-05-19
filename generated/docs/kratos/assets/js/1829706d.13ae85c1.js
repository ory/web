(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(8),s=(a(0),a(549)),r={id:"security",title:"Threat Models and Security Profiles"},o={unversionedId:"concepts/security",id:"version-v0.6/concepts/security",isDocsHomePage:!1,title:"Threat Models and Security Profiles",description:"Please be aware that this chapter is still work in progress. Not all mitigation",source:"@site/versioned_docs/version-v0.6/concepts/security.mdx",sourceDirName:"concepts",slug:"/concepts/security",permalink:"/kratos/docs/concepts/security",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/concepts/security.mdx",version:"v0.6",frontMatter:{id:"security",title:"Threat Models and Security Profiles"},sidebar:"version-v0.6/docs",previous:{title:"Federation",permalink:"/kratos/docs/concepts/federation"},next:{title:"Self-Service Flows",permalink:"/kratos/docs/self-service"}},c=[{value:"Account Enumeration Attacks",id:"account-enumeration-attacks",children:[{value:"Hash Timing Attack Mitigation",id:"hash-timing-attack-mitigation",children:[]},{value:"Enabling Account Enumeration Defenses",id:"enabling-account-enumeration-defenses",children:[]},{value:"Disabling Account Enumeration Defenses",id:"disabling-account-enumeration-defenses",children:[]}]},{value:"Account Takeover Defenses",id:"account-takeover-defenses",children:[]},{value:"Passwords",id:"passwords",children:[{value:"Expensive Hashing with BCrypt",id:"expensive-hashing-with-bcrypt",children:[]},{value:"Expensive Hashing with Argon2",id:"expensive-hashing-with-argon2",children:[]},{value:"Password Policy",id:"password-policy",children:[]}]},{value:"Anti-Automation",id:"anti-automation",children:[]},{value:"Bruteforce Attacks",id:"bruteforce-attacks",children:[]},{value:"Phishing Attacks",id:"phishing-attacks",children:[]},{value:"Social Engineering Attacks",id:"social-engineering-attacks",children:[]},{value:"SMS Spoofing Attacks",id:"sms-spoofing-attacks",children:[]},{value:"Account Enumeration",id:"account-enumeration",children:[]},{value:"Digital Identity Guidelines",id:"digital-identity-guidelines",children:[]}],l={toc:c};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Please be aware that this chapter is still work in progress. Not all mitigation\nstrategies have been implemented yet in Ory Kratos!"))),Object(s.b)("p",null,"Running any software that stores personal information exposes the\ndeveloper/company to risks. Analyzing which threat agents pose a risk,\nunderstanding the possible motivations for an attack, or why an agent is a\nthreat, knowing the attack surface, the likelihood, and the impact are important\nall aspects of a threat model."),Object(s.b)("p",null,"This documentation can not substitute a thorough and serious threat model, yet\nit will provide some guidelines to help configure Ory Kratos in a way that makes\nit best suited for any risk assessment."),Object(s.b)("h2",{id:"account-enumeration-attacks"},"Account Enumeration Attacks"),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"This feature is a work in progress and is tracked as\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/133"},"kratos#133"),"."),Object(s.b)("p",{parentName:"div"},"It does not yet work as documented!"))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},'"Often, web applications reveal when a username exists on system, either as a\nconsequence of a misconfiguration or as a design decision. For example,\nsometimes, when we submit wrong credentials, we receive a message that states\nthat either the username is present on the system or the provided password is\nwrong. The information obtained can be used by an attacker to gain a list of\nusers on system. This information can be used to attack the web application,\nfor example, through a brute force or default username/password attack.\nDescription of the Issue"'),Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("a",{parentName:"p",href:"https://wiki.owasp.org/index.php/Testing_for_User_Enumeration_and_Guessable_User_Account_(OWASP-AT-002)"},"Source"))),Object(s.b)("p",null,"Considering the above, an example would be for example an adult website. A\nthreat agent wants to blackmail a well known politician by checking if someone\ncan sign up at that website using the ",Object(s.b)("inlineCode",{parentName:"p"},"well-known-politician@email.com")," email."),Object(s.b)("p",null,"If the service responds with\n",Object(s.b)("inlineCode",{parentName:"p"},"Sorry, that email is already signed up here. Did you try to log in instead?"),",\nthe agent is able to proceed with some type of blackmail scheme."),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://wiki.owasp.org/index.php/Testing_for_User_Enumeration_and_Guessable_User_Account_(OWASP-AT-002)#Black_Box_testing_and_example"},"OWASP defines several Black-Box tests"),"\nthat cover Account Enumeration Scenarios."),Object(s.b)("p",null,"This attack usually makes only sense if an email address or a phone number is\ncollected during registration. For chosen usernames, this attack is much more\ndifficult, as the attacker has to know what usernames the victim is using."),Object(s.b)("p",null,"There are three common ways an attacker can figure out if a user is signed up at\na service:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'During login: "No user with this email address was found"'),Object(s.b)("li",{parentName:"ul"},'During registration or email update: "A user with this email address exists\nalready"'),Object(s.b)("li",{parentName:"ul"},'During password reset: "No user with this email address was found"')),Object(s.b)("p",null,"To mitigate this attack, the following methods need to be deployed:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'The login form should return the same message regardless of whether the\npassword is wrong or the email/username does not exist: "The provided\ncredentials are invalid."'),Object(s.b)("li",{parentName:"ul"},"The password reset form should always return a success message and send out an\nemail. If the email address is registered, a normal password reset email is\nsent. If the email address is not registered, an email is sent to the address\nindicating that no account is set up with that email address. This is helpful\nto users that have multiple email addresses and are using the wrong email\naddress for the password reset."),Object(s.b)("li",{parentName:"ul"},'The registration form should also always return a success message and send out\nan email. If the email address is not yet registered, a regular "account\nactivation" email is sent out. If the email address is registered already, a\nemail is sent out telling the user that the account is already set up, and\nlink to the login screen.')),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"If you wish to mitigate account enumeration attacks, it is important to note\nthat you cannot sign in users directly after sign up! Depending on the type of\nservice you provide, you might not care about this specific attack in which case\ndirect login after sign up would be ok."))),Object(s.b)("h3",{id:"hash-timing-attack-mitigation"},"Hash Timing Attack Mitigation"),Object(s.b)("p",null,"A timing attack against password hashing looks as follows:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Login to an existing account and measure time which takes, depending on the\nhashing configuration, between 200ms and 2s;0"),Object(s.b)("li",{parentName:"ol"},"Try out other accounts (e.g. ",Object(s.b)("inlineCode",{parentName:"li"},"alice@example.org"),"). If the account does not\nexist, password hashing does not run, hence it takes much less time for the\nserver to answer (< 100ms).")),Object(s.b)("p",null,"To protect against this attack, Ory Kratos adds a configurable delay with\nstandard deviation to login flows where the account does not exist."),Object(s.b)("h3",{id:"enabling-account-enumeration-defenses"},"Enabling Account Enumeration Defenses"),Object(s.b)("p",null,"Assuming you wish to enable account enumeration defenses, you need to configure\nOry Kratos as follows:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Collect one or more email addresses during sign up and enable email\nverification."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Do not")," enable the ",Object(s.b)("inlineCode",{parentName:"li"},"session")," post-registration workflow.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  flows:\n    verification:\n      enabled: true\n")),Object(s.b)("h4",{id:"defending-against-account-enumeration-when-using-openid-connect"},"Defending Against Account Enumeration when using OpenID Connect"),Object(s.b)("p",null,"Scenario: In some cases you might want to use the email address returned by e.g.\nthe GitHub profile to be added to your identity's account. You might also want\nto use it as an email + password identifier so that the identity is able to log\nin with a password as well. An attacker is able to exploit that by creating a\nsocial profile on another site (e.g. Google) and use the victims email address\nto set it up (this only works when the victim does not yet have an account with\nthat email at Google). The attacker can then use that \"spoofed\" social profile\nto try and sign up with your Ory Kratos installation. Because the victim's email\naddress is already known to Ory Kratos, the attacker might be able to observe\nthe behavior (e.g. seeing an error page) and come to the conclusion that the\nvictim already has an account at the website."),Object(s.b)("p",null,"Mitigation: This attack surface is rather small and requires a lot of effort,\nincluding forging an e.g. Google profile, and can fail at several stages. To\ncompletely mitigate any chance of that happening, only accept email addresses\nthat are marked as verified in your Jsonnet code:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/oidc.github.jsonnet"',title:'"contrib/quickstart/kratos/email-password/oidc.github.jsonnet"'},'local claims = {\n  email_verified: false\n} + std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      // Allowing unverified email addresses enables account\n      // enumeration attacks, especially if the value is used for\n      // e.g. verification or as a password login identifier.\n      //\n      // Therefore we only return the email if it (a) exists and (b) is marked verified\n      // by GitHub.\n      [if "email_primary" in claims && claims.email_verified then "email" else null]: claims.email_primary,\n    },\n  },\n}\n')),Object(s.b)("h3",{id:"disabling-account-enumeration-defenses"},"Disabling Account Enumeration Defenses"),Object(s.b)("p",null,"Enforcing email verification, which requires an email round trip and disrupts\nthe sign up process, is not always feasible. In these cases, you might want to\ndisable account enumeration defenses."),Object(s.b)("p",null,"If you enable the ",Object(s.b)("inlineCode",{parentName:"p"},"session")," post-registration workflow - signing the user in\ndirectly after registration - disables account enumeration defenses:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  flows:\n    registration:\n      after:\n        password:\n          - hook: session\n")),Object(s.b)("h2",{id:"account-takeover-defenses"},"Account Takeover Defenses"),Object(s.b)("p",null,"The Settings Flow implements account takeover defenses as it is not possible to\nchange the password without knowing the existing password. A good example of\nthis flow is the\n",Object(s.b)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"},"GitHub sudo mode"),"."),Object(s.b)("h2",{id:"passwords"},"Passwords"),Object(s.b)("p",null,"Password-based authentication flows are subject to frequent abuse through"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Social Engineering Attacks;"),Object(s.b)("li",{parentName:"ul"},"Password Guessing Attacks;"),Object(s.b)("li",{parentName:"ul"},"Phishing Attacks.")),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Further improvements are work in progress and are tracked on\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues?q=is%3Aopen+label%3Amodule%3Ass%2Fpassword+"},"GitHub")))),Object(s.b)("h3",{id:"expensive-hashing-with-bcrypt"},"Expensive Hashing with BCrypt"),Object(s.b)("p",null,"Ory Kratos supports BCrypt for password hashing per default. BCrypt is\nrecommended when you want hashing to take at most one second:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"hashers:\n  algorithm: bcrypt\n  bcrypt:\n    cost: 12\n")),Object(s.b)("h3",{id:"expensive-hashing-with-argon2"},"Expensive Hashing with Argon2"),Object(s.b)("p",null,"Ory Kratos supports Argon2 for password hashing. Argon2 is recommended when you\nwant hashing to take at least 2 seconds. You can tweak the Argon2 configuration\nin your Ory Kratos configuration file:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"hashers:\n  algorithm: argon2\n  argon2:\n    memory: 128MB\n    iterations: 2\n    parallelism: 4\n    salt_length: 16\n    key_length: 32\n")),Object(s.b)("p",null,"To determine the ideal parameters, head over to the\n",Object(s.b)("a",{parentName:"p",href:"../../guides/setting-up-password-hashing-parameters"},"setup guide"),"."),Object(s.b)("h3",{id:"password-policy"},"Password Policy"),Object(s.b)("p",null,"To prevent weak passwords Ory Kratos implements different measures. Users often\nchoose passwords similar to their traits. To prevent this Ory Kratos ensures\nthere is a sufficient\n",Object(s.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Levenshtein_distance"},"Levenshtein-Distance"),' (aka\n"Edit-Distance") between the identifier and the password. It also makes sure\nthat the identifier and password have a small enough longest common substring.'),Object(s.b)("p",null,"Furthermore the ",Object(s.b)("inlineCode",{parentName:"p"},"password")," method comes with a build-in check against the\n",Object(s.b)("a",{parentName:"p",href:"https://haveibeenpwned.com"},'"Have I been pwned"'),' breach database. This way Ory\nKratos makes sure your users cannot use passwords like "password", "123456" or\nany other commonly used one. To protect the value of the password the\n',Object(s.b)("a",{parentName:"p",href:"https://haveibeenpwned.com/API/v3#SearchingPwnedPasswordsByRange"},"range API")," is\nbeing used."),Object(s.b)("h4",{id:"password-policy-best-practices"},"Password Policy Best Practices"),Object(s.b)("p",null,"Almost every service with a login offers some type of registration using a\npassword. Therefore, there are many strategies floating around, with many of\nthem implementing terrible and insecure patterns such as:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Not allowing special characters in passwords."),Object(s.b)("li",{parentName:"ul"},'Not allowing the use of password managers by disabling the "paste"\nfunctionality in password fields.'),Object(s.b)("li",{parentName:"ul"},"Requiring you to rotate your password every month (passwords expire)."),Object(s.b)("li",{parentName:"ul"},"...")),Object(s.b)("p",null,"Troy Hunt has written an\n",Object(s.b)("a",{parentName:"p",href:"https://www.troyhunt.com/passwords-evolved-authentication-guidance-for-the-modern-era/"},"excellent piece on password policies"),"\nand why they recently changed and how."),Object(s.b)("p",null,"Ory Kratos implements a password policy that:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Checks if a password has previously been leaked using the\n",Object(s.b)("a",{parentName:"li",href:"https://haveibeenpwned.com/API/v2"},"HIBP API"),","),Object(s.b)("li",{parentName:"ul"},"Checks if a password is too similar to one of the identifiers (in a future\nrelease ",Object(s.b)("a",{parentName:"li",href:"https://github.com/ory/kratos/issues/184"},"kratos#184"),"),"),Object(s.b)("li",{parentName:"ul"},"Makes passwords not expire.")),Object(s.b)("p",null,"This is a rundown of all the practices Ory Kratos implements and why. ",Object(s.b)("strong",{parentName:"p"},"Some\nthings need to be implemented by yourself")," as they must be implemented in the\nUser Interface that interfaces with Ory Kratos. You can find these in section\n",Object(s.b)("a",{parentName:"p",href:"#user-interface-guidelines"},"User Interface Guidelines"),"."),Object(s.b)("h5",{id:"password-complexity"},"Password Complexity"),Object(s.b)("p",null,"This outline and quotes are defined in the\n",Object(s.b)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/sp800-63b.html"},"NIST Digital Identity Guidelines - 5.1.1.2 Memorized Secret Verifiers"),".\nOry Kratos, unless explicitly advertised, implements these guidelines and best\npractices."),Object(s.b)("p",null,"Passwords must have a minimum length of 8 characters and all characters\n(unicode, ASCII) must be allowed:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Verifiers SHALL require subscriber-chosen memorized secrets to be at least 8\ncharacters in length. Verifiers SHOULD permit subscriber-chosen memorized\nsecrets at least 64 characters in length. All printing ASCII ","[RFC 20]","\ncharacters as well as the space character SHOULD be acceptable in memorized\nsecrets. Unicode ","[ISO/ISC 10646]"," characters SHOULD be accepted as well. To\nmake allowances for likely mistyping, verifiers MAY replace multiple\nconsecutive space characters with a single space character prior to\nverification, provided that the result is at least 8 characters in length.\nTruncation of the secret SHALL NOT be performed. For purposes of the above\nlength requirements, each Unicode code point SHALL be counted as a single\ncharacter.")),Object(s.b)("p",null,"Passwords must be checked against a database of compromised secrets such as\n",Object(s.b)("a",{parentName:"p",href:"https://haveibeenpwned.com"},"Have I Been Pwnd"),":"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"When processing requests to establish and change memorized secrets, verifiers\nSHALL compare the prospective secrets against a list that contains values\nknown to be commonly-used, expected, or compromised. For example, the list MAY\ninclude, but is not limited to:"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"Passwords obtained from previous breach corpuses."),Object(s.b)("li",{parentName:"ul"},"Dictionary words."),Object(s.b)("li",{parentName:"ul"},"Repetitive or sequential characters (e.g. \u2018aaaaaa\u2019, \u20181234abcd\u2019)."),Object(s.b)("li",{parentName:"ul"},"Context-specific words, such as the name of the service, the username, and\nderivatives thereof.")),Object(s.b)("p",{parentName:"blockquote"},"If the chosen secret is found in the list, the CSP or verifier SHALL advise\nthe subscriber that they need to select a different secret, SHALL provide the\nreason for rejection, and SHALL require the subscriber to choose a different\nvalue.")),Object(s.b)("p",null,"Show the user a password-strength meter (to be implemented, see\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/136"},"#136"),"):"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Verifiers SHOULD offer guidance to the subscriber, such as a password-strength\nmeter ","[Meters]",", to assist the user in choosing a strong memorized secret. This\nis particularly important following the rejection of a memorized secret on the\nabove list as it discourages trivial modification of listed (and likely very\nweak) memorized secrets")),Object(s.b)("p",null,"Do not require mixtures of characters types or prohibiting repeated characters:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Verifiers SHOULD NOT impose other composition rules (e.g., requiring mixtures\nof different character types or prohibiting consecutively repeated characters)\nfor memorized secrets. Verifiers SHOULD NOT require memorized secrets to be\nchanged arbitrarily (e.g., periodically). However, verifiers SHALL force a\nchange if there is evidence of compromise of the authenticator.")),Object(s.b)("h5",{id:"user-interface-guidelines"},"User Interface Guidelines"),Object(s.b)("p",null,"These best practices need to be implemented in your User Interface and can not\nbe handled by Ory Kratos. All Ory-built reference and demo applications\nimplement these best practices:"),Object(s.b)("p",null,"Allow pasting of passwords:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Verifiers SHOULD permit claimants to use \u201cpaste\u201d functionality when entering a\nmemorized secret. This facilitates the use of password managers, which are\nwidely used and in many cases increase the likelihood that users will choose\nstronger memorized secrets.")),Object(s.b)("p",null,"Allow the user to show the secret in the UI:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"In order to assist the claimant in successfully entering a memorized secret,\nthe verifier SHOULD offer an option to display the secret \u2014 rather than a\nseries of dots or asterisks \u2014 until it is entered. This allows the claimant to\nverify their entry if they are in a location where their screen is unlikely to\nbe observed. The verifier MAY also permit the user\u2019s device to display\nindividual entered characters for a short time after each character is typed\nto verify correct entry. This is particularly applicable on mobile devices.")),Object(s.b)("h5",{id:"password-hints"},"Password Hints"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Memorized secret verifiers SHALL NOT permit the subscriber to store a \u201chint\u201d\nthat is accessible to an unauthenticated claimant."),Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/sp800-63b.html"},"NIST Digital Identity Guidelines - 5.1.1.2 Memorized Secret Verifiers"))),Object(s.b)("h5",{id:"password-expiry"},"Password Expiry"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Forcing password expiry carries no real benefits because:"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"the user is likely to choose new passwords that are only minor variations of\nthe old"),Object(s.b)("li",{parentName:"ul"},"stolen passwords are generally exploited immediately"),Object(s.b)("li",{parentName:"ul"},"resetting the password gives you no information about whether a compromise\nhas occurred"),Object(s.b)("li",{parentName:"ul"},"an attacker with access to the account will probably also receive the\nrequest to reset the password"),Object(s.b)("li",{parentName:"ul"},"if compromised via insecure storage, the attacker will be able to find the\nnew password in the same place")),Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("a",{parentName:"p",href:"https://www.ncsc.gov.uk/collection/passwords/updating-your-approach"},"NSCS Password administration for system owners"))),Object(s.b)("h2",{id:"anti-automation"},"Anti-Automation"),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"This feature is a work in progress and is tracked as\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/138"},"kratos#133"),"."))),Object(s.b)("p",null,"Actions that cause out-of-band communications, such as sending an activation\nlink via email or an activation code via SMS, can be abused by automated\nsystems. The goal of such an attack is to send out so many emails or SMS, that\nyour reputation worsens (spam filters) or you're faced with massive costs\n(carrier fees)."),Object(s.b)("p",null,"CAPTCHA renders these attacks either very difficult or impossible. Ory Kratos\nhas CAPTCHA support built-in. Ory Kratos will prompt the user to complete a\nCAPTCHA in the following scenarios:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The user tries to register more than one account within 72 hours."),Object(s.b)("li",{parentName:"ul"},"The user failed provide valid credentials for the third time within 12 hours."),Object(s.b)("li",{parentName:"ul"},"The user tries to recover their account for the second time within 72 hours.")),Object(s.b)("p",null,"For integration guidelines, please check the individual flow's (registration,\nlogin, account recovery) integration documentation."),Object(s.b)("h2",{id:"bruteforce-attacks"},"Bruteforce Attacks"),Object(s.b)("p",null,"Will be addressed in a future release."),Object(s.b)("h2",{id:"phishing-attacks"},"Phishing Attacks"),Object(s.b)("p",null,"Will be addressed in a future release."),Object(s.b)("h2",{id:"social-engineering-attacks"},"Social Engineering Attacks"),Object(s.b)("p",null,"Will be addressed in a future release."),Object(s.b)("h2",{id:"sms-spoofing-attacks"},"SMS Spoofing Attacks"),Object(s.b)("p",null,"Will be addressed in a future release."),Object(s.b)("h2",{id:"account-enumeration"},"Account Enumeration"),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"This feature is a work in progress and is tracked as\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/133"},"kratos#133"),"."),Object(s.b)("p",{parentName:"div"},"It does not yet work as documented!"))),Object(s.b)("h2",{id:"digital-identity-guidelines"},"Digital Identity Guidelines"),Object(s.b)("p",null,"There is no one standard to digital identity. Ory Kratos closely follows\nemerging frameworks and guidelines such as:\n",Object(s.b)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/"},"Digital Identity Guidelines established by the National Institute of Standards and Technology (NIST)"),"\n(and a follow-up ",Object(s.b)("a",{parentName:"p",href:"https://pages.nist.gov/800-63-3/"},"FAQ"),") ."),Object(s.b)("p",null,"As Ory Kratos grows, this document will continue to expand and add sections\ncovering individual security recommendations established by NIST."))}d.isMDXComponent=!0},549:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(a),p=n,h=b["".concat(r,".").concat(p)]||b[p]||u[p]||s;return a?i.a.createElement(h,o(o({ref:t},l),{},{components:a})):i.a.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var l=2;l<s;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);