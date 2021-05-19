(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),s=n(8),o=(n(0),n(200)),r=n(224),i={title:"The Graph of Relations"},c={unversionedId:"concepts/graph-of-relations",id:"version-v0.6/concepts/graph-of-relations",isDocsHomePage:!1,title:"The Graph of Relations",description:"The relation tuples of the ACL used by Ory Keto can be",source:"@site/versioned_docs/version-v0.6/concepts/graph-of-relations.mdx",sourceDirName:"concepts",slug:"/concepts/graph-of-relations",permalink:"/keto/docs/concepts/graph-of-relations",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/concepts/graph-of-relations.mdx",version:"v0.6",lastUpdatedBy:"Patrik",lastUpdatedAt:1620725654,formattedLastUpdatedAt:"5/11/2021",frontMatter:{title:"The Graph of Relations"},sidebar:"version-v0.6/docs",previous:{title:"Subjects",permalink:"/keto/docs/concepts/subjects"},next:{title:"API Overview",permalink:"/keto/docs/concepts/api-overview"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Example",id:"example",children:[]},{value:"Observations about the Graph",id:"observations-about-the-graph",children:[]}],p={toc:l};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/keto/docs/concepts/relation-tuples"},"relation tuples")," of the ACL used by Ory Keto can be\nrepresented as a graph of relations. This graph will help us to understand many\n",Object(o.b)("a",{parentName:"p",href:"/keto/docs/performance"},"implications on performance")," and\n",Object(o.b)("a",{parentName:"p",href:"/keto/docs/concepts/internal-algorithms"},"internal algorithms"),"."),Object(o.b)("h2",{id:"definition"},"Definition"),Object(o.b)("p",null,"The graph consists of three types of nodes. ",Object(o.b)("a",{parentName:"p",href:"/keto/docs/concepts/objects"},"Object")," nodes that\nrepresent application objects, intermediary\n",Object(o.b)("a",{parentName:"p",href:"/keto/docs/concepts/subjects#subject-sets"},"subject set")," nodes, and\n",Object(o.b)("a",{parentName:"p",href:"/keto/docs/concepts/subjects#subject-ids"},"subject ID")," nodes representing individuals. Edges\nare directed and represent the relation between an object and subject."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"The following example translates a view relation tuples into the corresponding\ngraph of relations."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This example omits the ",Object(o.b)("a",{parentName:"p",href:"/keto/docs/concepts/namespaces"},"namespace")," from all data to improve\nreadability. In practice, the namespace always has to be considered."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// user1 has access on dir1\ndir1#access@user1\n// Have a look on the subjects concept page if you don't know the empty relation.\ndir1#parent@(file1#)\n// Everyone with access to dir1 has access to file1. This would probably be defined\n// through a subject set rewrite that defines this inherited relation globally.\n// In this example, we define this tuple explicitly.\nfile1#access@(dir1#access)\n// Direct access on file2 was granted.\nfile2#access@user1\n// user2 is owner of file2\nfile2#owner@user2\n// Owners of file2 have access to it; possibly defined through subject set rewrites.\nfile2#access@(file2#owner)\n")),Object(o.b)("p",null,"This is represented by the following graph:"),Object(o.b)(r.a,{chart:"\ngraph TD\n    subgraph obj [Object region]\n    A[file1]\n    E[dir1] --\x3e|parent| A\n    G[file2]\n    end\n    subgraph subjID [Subject ID region]\n    F([user1])\n    C([user2])\n    end\n    A --\x3e|access| B{{dir1#access}}\n    B -. file1#access .-> F\n    E --\x3e|access| F\n    G --\x3e|access| F\n    G --\x3e|owner| C\n    G --\x3e|access| H{{file2#owner}}\n    H -. file2#access .-> C\n",mdxType:"Mermaid"}),Object(o.b)("p",null,"Solid edges represent explicitly defined relations, while dotted edges represent\nrelations inherited through a subject set."),Object(o.b)("h2",{id:"observations-about-the-graph"},"Observations about the Graph"),Object(o.b)("p",null,"Ory Keto utilizes the following key properties of the graph of relations:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Directed edges from objects to subjects"),": This implies a neat arrangement\nwith objects in one region, subject IDs in another one, and subject sets in\nbetween. Edges will always go from the object region towards the subject\nregion."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Searching for a possible path is local"),": Trying to find a path from an\nobject to a subject will always happen locally. This means that it is only\nnecessary to traverse the nodes that are successors of the object. In typical\nsetups, this means that only a small fraction of the graph has to be\nsearched, regardless of the outcome. The intuition here is that the relations\nof user1's files are irrelevant when checking access to user2's files.")),Object(o.b)("p",null,"Both of these properties are important to ensure\n",Object(o.b)("a",{parentName:"p",href:"/keto/docs/performance"},"high performance"),"."))}d.isMDXComponent=!0},224:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(243),r=n.n(o),i=n(59),c=n.n(i),l=n(242),p=n.n(l);r.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,o=Object(a.useState)(!1),i=o[0],l=o[1],d=Object(a.useState)(void 0),b=d[0],h=d[1],u=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],f=function(){return l(!i)};return Object(a.useEffect)((function(){r.a.render(u,n,(function(e){h(e)}))}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{onClick:f,className:p()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:b}}),s.a.createElement("div",{onClick:f,className:p()(c.a.overlay,c.a.pointer,c.a.graph,(t={},t[c.a.visible]=i,t))},s.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:p()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:b}})))}},251:function(e,t,n){var a={"./locale":222,"./locale.js":222};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id=251}}]);