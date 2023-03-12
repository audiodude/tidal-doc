"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(3117),n=(a(7294),a(3905));const l={title:"Haskell",id:"haskell"},o=void 0,s={unversionedId:"innards/haskell",id:"innards/haskell",title:"Haskell",description:"haskell",source:"@site/docs/innards/haskell.md",sourceDirName:"innards",slug:"/innards/haskell",permalink:"/docs/innards/haskell",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/innards/haskell.md",tags:[],version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1678656775,formattedLastUpdatedAt:"Mar 12, 2023",frontMatter:{title:"Haskell",id:"haskell"},sidebar:"docs",previous:{title:"Course II (> 1.6)",permalink:"/docs/patternlib/tutorials/course2"},next:{title:"The meaning of $\xa0",permalink:"/docs/innards/meaning_of_dollar"}},i={},p=[{value:"General resources",id:"general-resources",level:2},{value:"Tidal-related resources",id:"tidal-related-resources",level:2}],c={toc:p};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"haskell",src:a(5231).Z,width:"312",height:"220"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tidal Cycles")," is a domain-specific language made with the ",(0,n.kt)("strong",{parentName:"p"},"Haskell")," programming language. ",(0,n.kt)("strong",{parentName:"p"},"Haskell")," is a general-purpose, statically typed and purely functional programming language. Haskell had always been used, since its creation, by researchers/teachers, industrials, finance, etc... Haskell is renowned for some of its most distinctive features: type classes, insistance on the purely-functional programming paradigm, elegant syntax. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Haskell")," can be compiled or interpreted. The ",(0,n.kt)("strong",{parentName:"p"},"Glasgow Haskell Compiler")," (a.k.a ",(0,n.kt)("strong",{parentName:"p"},"GHC"),") is the most widely used implementation. Tidal is using ",(0,n.kt)("strong",{parentName:"p"},"GHCI"),", the interpreted mode of ",(0,n.kt)("strong",{parentName:"p"},"GHC")," as a ",(0,n.kt)("strong",{parentName:"p"},"REPL")," to do ",(0,n.kt)("em",{parentName:"p"},"conversational programming")," with the ",(0,n.kt)("strong",{parentName:"p"},"Tidal")," library. The text editor you are using when playing with ",(0,n.kt)("strong",{parentName:"p"},"Tidal"),' acts as a "code-formatter" and "emitter", sending lines and statements directly to the ',(0,n.kt)("strong",{parentName:"p"},"Haskell")," interpreter."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Haskell")," is sometimes considered to be a difficult language for newcomers. In reality, the situation is more complex than it appears. ",(0,n.kt)("strong",{parentName:"p"},"Haskell")," can confuse some programmers that are accustomed to another programming paradigm: imperative, object-oriented, etc... However, if you don't know anything about programming yet, Haskell can be a wonderful language to learn."),(0,n.kt)("h2",{id:"general-resources"},"General resources"),(0,n.kt)("p",null,"Many ",(0,n.kt)("strong",{parentName:"p"},"Haskell")," tutorials are focusing on lists. They are important to learn, but are not very often used in ",(0,n.kt)("strong",{parentName:"p"},"Tidal"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/soupi/haskell-study-plan/blob/master/README.org"},"Haskell study plan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learnxinyminutes.com/docs/haskell/"},"Learn Haskell in Y minutes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://learnyouahaskell.com/"},"Learn you a Haskell for great good")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://euterpea.com/haskell-school-of-music/"},"Haskell school of expression")," book (",(0,n.kt)("a",{parentName:"li",href:"http://haskell.cs.yale.edu/wp-content/uploads/2015/03/HSoM.pdf"},".pdf of earlier version"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html"},"Functors, applicatives and monads in pictures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://haskellbook.com/"},"Haskell programming from first principles")," - an in-depth book for beginners"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.cs.nott.ac.uk/~pszgmh/pih.html"},"Programming in Haskell")," - another nice book, by Graham Hutton"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.haskell.org/How_to_read_Haskell"},"How to read Haskell")," - A primer for learning how to work out yourself 'what does this function do?'"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://haskellbook.com/"},"Haskell programming from first principles")," - by Christopher Allen and Julie Moronuki")),(0,n.kt)("h2",{id:"tidal-related-resources"},"Tidal-related resources"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kGbelVBCWDk&list=PLyEzdf4cdMMHGqVnAzLV8eDXn6Ajj46JA"},"NIL Haskell school")," - video lectures by David Ogborn (not tidal-specific but by David who among other things works on Tidal and related projects)"))}m.isMDXComponent=!0},5231:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/haskellicon-67a713eff684d0ef93428cc27cfb5981.png"}}]);