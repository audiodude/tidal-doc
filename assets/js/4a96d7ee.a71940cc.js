"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),g=a,m=u["".concat(p,".").concat(g)]||u[g]||c[g]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(3117),a=(r(7294),r(3905));const i={id:"upgrading",title:"Upgrading"},o=void 0,l={unversionedId:"getting-started/upgrading",id:"getting-started/upgrading",title:"Upgrading",description:"-----",source:"@site/docs/getting-started/Upgrading.md",sourceDirName:"getting-started",slug:"/getting-started/upgrading",permalink:"/docs/getting-started/upgrading",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/Upgrading.md",tags:[],version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1672577314,formattedLastUpdatedAt:"Jan 1, 2023",frontMatter:{id:"upgrading",title:"Upgrading"},sidebar:"docs",previous:{title:"Start Tidal",permalink:"/docs/getting-started/tidal_start"},next:{title:"Downgrading",permalink:"/docs/getting-started/downgrading"}},p={},d=[{value:"Ghc",id:"ghc",level:2},{value:"Library",id:"library",level:2},{value:"Editor plugin",id:"editor-plugin",level:2},{value:"SuperDirt",id:"superdirt",level:2}],s={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Tidal Cycles is a composite software. To upgrade it, it is ",(0,a.kt)("strong",{parentName:"p"},"highly")," recommended to upgrade everything along with the pattern library (the text editor and the SuperDirt audio engine as well). Each time a new version of ",(0,a.kt)("strong",{parentName:"p"},"Tidal")," is released, a new version of ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," will likely follow, etc..."),(0,a.kt)("h2",{id:"ghc"},"Ghc"),(0,a.kt)("p",null,"If you are using windows, you will need at least version 9.4.2 of ghc installed, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages/ghc"},"via chocolatey"),". "),(0,a.kt)("p",null,"For linux and mac, you don't need to upgrade ghc."),(0,a.kt)("h2",{id:"library"},"Library"),(0,a.kt)("p",null,"Upgrade tidal with the following from a terminal window (",(0,a.kt)("strong",{parentName:"p"},"Linux"),"/",(0,a.kt)("strong",{parentName:"p"},"MacOS"),"/",(0,a.kt)("strong",{parentName:"p"},"Windows"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cabal update\ncabal v1-install tidal\n")),(0,a.kt)("p",null,"If you originally installed tidal with 'cabal install' rather than 'cabal v1-install', you might have to run the following command instead. However this tends to be less reliable than the above method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cabal update\ncabal install tidal --lib\n")),(0,a.kt)("p",null,"If things get messed up, under linux and macos you can remove the folders ",(0,a.kt)("inlineCode",{parentName:"p"},".ghc")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".cabal")," from your home folder, and try again. Under windows, you can try the same but by deleting the ",(0,a.kt)("inlineCode",{parentName:"p"},"c:\\Users\\<user>\\AppData\\Roaming\\cabal")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"<user>")," is your username."),(0,a.kt)("h2",{id:"editor-plugin"},"Editor plugin"),(0,a.kt)("p",null,"Your text editor might refer to the Tidal Cycles plugin as an ",(0,a.kt)("em",{parentName:"p"},"extension")," or as a ",(0,a.kt)("em",{parentName:"p"},"package"),". Check the sidebar to get more information about ways to update your favorite text editor. "),(0,a.kt)("h2",{id:"superdirt"},"SuperDirt"),(0,a.kt)("p",null,"To upgrade the ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," sound synthesiser/sampler, open ",(0,a.kt)("strong",{parentName:"p"},"SuperCollider"),",\nand paste the following command in the interactive editor. Select the text and press Shift+Enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'Quarks.update("SuperDirt")\n')),(0,a.kt)("p",null,"You'll need to recompile the class library. You can do this either by simply restarting the software or via the ",(0,a.kt)("em",{parentName:"p"},"Recompile class library")," entry on the ",(0,a.kt)("em",{parentName:"p"},"Language")," top-bar menu."))}u.isMDXComponent=!0}}]);