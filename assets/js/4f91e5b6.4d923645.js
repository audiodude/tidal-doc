"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1518],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,N=s["".concat(o,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7573:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(3117),r=(n(7294),n(3905));const l={title:"mi-UGens",id:"mi-ugens"},i=void 0,p={unversionedId:"reference/mi-ugens",id:"reference/mi-ugens",title:"mi-UGens",description:"Description",source:"@site/docs/reference/mi-ugens.md",sourceDirName:"reference",slug:"/reference/mi-ugens",permalink:"/docs/reference/mi-ugens",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/mi-ugens.md",tags:[],version:"current",lastUpdatedBy:"Bernard Gray",lastUpdatedAt:1672308326,formattedLastUpdatedAt:"Dec 29, 2022",frontMatter:{title:"mi-UGens",id:"mi-ugens"},sidebar:"reference",previous:{title:"Composition",permalink:"/docs/reference/composition"},next:{title:"Control Busses",permalink:"/docs/reference/control_busses"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Contents",id:"contents",level:2},{value:"Synths",id:"synths",level:2},{value:"<code>omi</code>",id:"omi",level:3},{value:"<code>braids</code>",id:"braids",level:3},{value:"<code>plaits</code>",id:"plaits",level:3},{value:"<code>tides</code>",id:"tides",level:3},{value:"Effects",id:"effects",level:2},{value:"<code>verb</code> (global)",id:"verb-global",level:3},{value:"<code>clouds</code> (global)",id:"clouds-global",level:3},{value:"<code>elements</code>",id:"elements",level:3},{value:"<code>mu</code>",id:"mu",level:3},{value:"<code>rings</code>",id:"rings",level:3},{value:"<code>ripples</code>",id:"ripples",level:3},{value:"<code>warps</code>",id:"warps",level:3}],m={toc:d};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mutable-instruments.net/"},"Mutable Instruments")," was a popular Eurorack module company from Normandy. The designer, engineer, and founder of Mutable Instruments, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pichenettes"},"\xc9milie Gillet"),", has made all of her work ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pichenettes/eurorack"},"open source"),". ",(0,r.kt)("a",{parentName:"p",href:"https://vboehm.net/"},"Volker B\xf6hm")," has taken the time to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/v7b1/mi-UGens"},"port")," some of these modules to ",(0,r.kt)("a",{parentName:"p",href:"https://supercollider.github.io/"},"SuperCollider")," under the project title ",(0,r.kt)("strong",{parentName:"p"},"mi-UGens")," (no affiliation with Mutable Instruments)."),(0,r.kt)("p",null,"Significant further work to make mi-UGens functional in Tidal was done by a large number of forum users, documented in ",(0,r.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/mutable-instruments-ugens/2730"},"this thread")," by ",(0,r.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/u/chrislo/summary"},"@chrislo")),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/mi-ugens-installation"},"Installation Method (opens a new page)")," for Windows, Mac and Linux"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/mi-ugens#synths"},"Synth Reference")," for miOmi, miBraids and miPlaits"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/mi-ugens#effects"},"Effects Reference")," for miVerb, miClouds, miRings, etc (todo)")),(0,r.kt)("h2",{id:"synths"},"Synths"),(0,r.kt)("p",null,"All mi-UGens Synth modules support the following common SynthDef parameters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Supported parameters (default value)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"freq")),(0,r.kt)("td",{parentName:"tr",align:null},"440")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sustain")),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pan")),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"begin")),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"end")),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"speed")),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accelerate")),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h3",{id:"omi"},(0,r.kt)("inlineCode",{parentName:"h3"},"omi")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),' miOmi or "Ominous Voice", an almost vibraphone-like synth, electric bass lows and tinkling highs. ',(0,r.kt)("inlineCode",{parentName:"p"},"omi")," does not take any extra parameters. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "omi" <| note "a [~ g] [c b] [g gs]" \n    # octave "<3 4 5 6 7 8>"\n    # sustain "{1 2 1}%8"\n')),(0,r.kt)("h3",{id:"braids"},(0,r.kt)("inlineCode",{parentName:"h3"},"braids")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," miBraids is a voltage-controlled monophonic digital sound source. Each algorithm is controlled by two continuously variable parameters, ",(0,r.kt)("inlineCode",{parentName:"p"},"timbre")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"color"),". ",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20200508162718/https://mutable-instruments.net/modules/braids/manual/"},"More information...")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter (def)"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"model")," (0)"),(0,r.kt)("td",{parentName:"tr",align:null},"0-47"),(0,r.kt)("td",{parentName:"tr",align:null},"48 available model selections, for details on each of the models see this ",(0,r.kt)("a",{parentName:"td",href:"https://web.archive.org/web/20200508162718/https://mutable-instruments.net/modules/braids/manual/"},"manual"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timbre")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"model specific tone control")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"model specific tone control")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "braids" <| note "a [~ g] [c b] [g gs]" \n    # octave "<3 4 5 6 7 8>"\n    # sustain "{1 2 1}%8"\n    # model (slow 48 $ run 48)\n    # timbre (slow 3 sine)\n    # color (saw)\n')),(0,r.kt)("h3",{id:"plaits"},(0,r.kt)("inlineCode",{parentName:"h3"},"plaits")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," miPlaits is the spiritual successor of ",(0,r.kt)("em",{parentName:"p"},"miBraids"),", with direct access to a large palette of easily tweakable raw sonic material, covering the whole gamut of synthesis techniques. ",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20201111233906/https://mutable-instruments.net/modules/plaits/manual/"},"More information...")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter (def)"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"engine")," (0)"),(0,r.kt)("td",{parentName:"tr",align:null},"0-15"),(0,r.kt)("td",{parentName:"tr",align:null},"16 available engine selections, the later numbers focus on noisy and percussive sounds. For details, see this ",(0,r.kt)("a",{parentName:"td",href:"https://web.archive.org/web/20201111233906/https://mutable-instruments.net/modules/plaits/manual/"},"manual"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timbre")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"engine specific tone control - sweeps the spectral content from dark/sparse to bright/dense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"harm")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"engine specific tone control - ",(0,r.kt)("strong",{parentName:"td"},"harmonics")," controls the frequency spread or the balance between the various constituents of the tone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"morph")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"engine specific tone control - explores lateral timbral variations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"level")," (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Opens the internal low-pass gate, to simultaneously control the amplitude and brightness of the output signal. Also acts as an accent control when triggering the physical or percussive models")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lpgdecay")," (0)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"adjust the ringing time of the LPG and the decay time of the internal envelope")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lpgcolour")," (0)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"adjust the response of the LPG, from VCFA to VCA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lpg d c")),(0,r.kt)("td",{parentName:"tr",align:null},"see above"),(0,r.kt)("td",{parentName:"tr",align:null},"convenience function for simultaneous ",(0,r.kt)("inlineCode",{parentName:"td"},"lpgdecay")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"lpgcolour")," control")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "plaits" <| note "a [~ g] [c b] [g gs]" \n    # octave "<3 4 5 6 7 8>"\n    # sustain "{1 2 1}%8"\n    # engine (slow 16 $ run 16)\n    # timbre (slow 3 sine)   \n    # harm (slow 4 saw)  \n    # morph (slow 9 saw)\n    # level (slow 8 sine)\n')),(0,r.kt)("h3",{id:"tides"},(0,r.kt)("inlineCode",{parentName:"h3"},"tides")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," miTides is a tidal (not, Tidal) modulator based on the concept of ",(0,r.kt)("strong",{parentName:"p"},"Flow")," (a voltage goes up) and ",(0,r.kt)("strong",{parentName:"p"},"Ebb")," (a voltage goes back to it's initial level). ",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20200918083807/https://mutable-instruments.net/modules/tides/manual/"},"More information...")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tidesshape")),(0,r.kt)("td",{parentName:"tr",align:null},"shape of the ascending and descending segments"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tidessmooth")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"waveshape transformation, 0.0-0.5 smooths edges, 0.5-1.0 adds kinks and bumps along the slope")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"slope")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"ratio between the durations of the ascending and descending segments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shift")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"mode specific control, adjusting amplitude and other parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")," (2)"),(0,r.kt)("td",{parentName:"tr",align:null},"0-3"),(0,r.kt)("td",{parentName:"tr",align:null},"different output modes. For details see the ",(0,r.kt)("a",{parentName:"td",href:"https://web.archive.org/web/20200918083807/https://mutable-instruments.net/modules/tides/manual/"},"Manual"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "tides" <| note "a [~ g] [c b] [g gs]"\n    # octave "<3 4 5 6 7 8>"\n    # sustain "{1 2 1}%8"\n    # mode "<0 1 2 3>"\n    # shift (slow 5 sine)\n    # tidesshape (slow 7 sine)\n    # tidessmooth (range 0.2 1 $ slow 8 sine)\n    # slope (slow 3 sine)\n')),(0,r.kt)("h2",{id:"effects"},"Effects"),(0,r.kt)("h3",{id:"verb-global"},(0,r.kt)("inlineCode",{parentName:"h3"},"verb")," (global)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," miVerb is a gentle reverb implemented as a global effect with a large number of tweakable parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verb w t d h")),(0,r.kt)("td",{parentName:"tr",align:null},"na"),(0,r.kt)("td",{parentName:"tr",align:null},"convenience function, combining ",(0,r.kt)("inlineCode",{parentName:"td"},"wet"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"time"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"damp"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"hp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verbgain")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"gain level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verbwet")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"dry/wet mix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verbtime")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"sustain time, be careful with feedback using values over 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verbdamp")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"suppression on the sustain, higher values suppress more quickly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verbhp")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"smaller values emulate larger chamber spaces")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verbfreeze")),(0,r.kt)("td",{parentName:"tr",align:null},"0 ","|"," 1"),(0,r.kt)("td",{parentName:"tr",align:null},"enable with ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", freezes the last reverb event allowing it to tail off completely")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verbdiff")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"new verb events interact with existing verb trails, lower values for a more pronounced effect")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "[[bd sd], linnhats*8]"\n    # verb 0.9 0.9 0.1 0.2\n')),(0,r.kt)("h3",{id:"clouds-global"},(0,r.kt)("inlineCode",{parentName:"h3"},"clouds")," (global)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," miClouds is a granular audio processor. It creates textures and soundscapes by combining multiple overlapping, delayed, transposed and enveloped segments of sound taken from an audio recording buffer. ",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20201028001939/https://mutable-instruments.net/modules/clouds/manual/"},"More information...")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clouds p s d t")),(0,r.kt)("td",{parentName:"tr",align:null},"na"),(0,r.kt)("td",{parentName:"tr",align:null},"convenience function, combining ",(0,r.kt)("inlineCode",{parentName:"td"},"pos"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"size"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"dens")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"tex"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudsblend w s f r")),(0,r.kt)("td",{parentName:"tr",align:null},"na"),(0,r.kt)("td",{parentName:"tr",align:null},"convenience function, combining ",(0,r.kt)("inlineCode",{parentName:"td"},"wet"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"spread"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"fb")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"rvb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudspos")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"selects from which part of the recording buffer the audio grains are played")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudssize")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"grain size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudspitch")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"transposition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudsdens")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"grain density")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudstex")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"grain texture, morphs through various shapes of grain envelopes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudsgain")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"gain level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudswet")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"blend wet/dry mix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudsspread")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"blend stereo spread")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudsfb")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WARNING")," values over 0.3 get dangerous - blend feedback amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudsrvb")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"blend reverberation amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudsfreeze")),(0,r.kt)("td",{parentName:"tr",align:null},"0 ","|"," 1"),(0,r.kt)("td",{parentName:"tr",align:null},"stops the recording of incoming audio, granularization is now performed on the last piece of audio")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudsmode")),(0,r.kt)("td",{parentName:"tr",align:null},"0-3"),(0,r.kt)("td",{parentName:"tr",align:null},"infamous alternate modes, 0 = normal operation, 3 = spectral processor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudslofi")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"undocumented")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "[[bd sd], [linnhats*8]]"\n    # clouds 0.1 0.5 0.05 0.1\n    # cloudsblend 1 0.2 0.33 0.8\n')),(0,r.kt)("h3",{id:"elements"},(0,r.kt)("inlineCode",{parentName:"h3"},"elements")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," todo"),(0,r.kt)("h3",{id:"mu"},(0,r.kt)("inlineCode",{parentName:"h3"},"mu")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," miMu is a low frequency distortion effect, works best on long release, low frequency sounds"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mu")),(0,r.kt)("td",{parentName:"tr",align:null},"0-5+"),(0,r.kt)("td",{parentName:"tr",align:null},"adjusts gain and applies a low frequency distortion")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "bass1:1"\n    # mu 5\n    # gain 0.7\n')),(0,r.kt)("h3",{id:"rings"},(0,r.kt)("inlineCode",{parentName:"h3"},"rings")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," miRings is a resonator effect with three families of vibrating structures simulated. ",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20201028000143/https://mutable-instruments.net/modules/rings/manual/"},"More information...")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rings f s b d p")),(0,r.kt)("td",{parentName:"tr",align:null},"na"),(0,r.kt)("td",{parentName:"tr",align:null},"convenience function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ringsfreq")," (440)"),(0,r.kt)("td",{parentName:"tr",align:null},"0-1500+"),(0,r.kt)("td",{parentName:"tr",align:null},"adjusts pitch, higher values are higher pitches, does not enjoy being patterned much")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ringsstruct")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"model specific control, see the ",(0,r.kt)("a",{parentName:"td",href:"https://web.archive.org/web/20201028000143/https://mutable-instruments.net/modules/rings/manual/"},"manual"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ringsbright")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"adjust level of higher harmonics in the signal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ringsdamp")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"controls the decay time, smaller values for shorter decay")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ringspos")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"excitation position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ringsmodel")),(0,r.kt)("td",{parentName:"tr",align:null},"0 ","|"," 1"),(0,r.kt)("td",{parentName:"tr",align:null},"toggle between modal, and sympathetic string resonators")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ringspoly")),(0,r.kt)("td",{parentName:"tr",align:null},"0 ","|"," 1"),(0,r.kt)("td",{parentName:"tr",align:null},"toggle polyphonic mode on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ringsinternal")),(0,r.kt)("td",{parentName:"tr",align:null},"0 ","|"," 1"),(0,r.kt)("td",{parentName:"tr",align:null},"undocumented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ringseasteregg")),(0,r.kt)("td",{parentName:"tr",align:null},"0 ","|"," 1"),(0,r.kt)("td",{parentName:"tr",align:null},"undocumented")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "[[bd sd], linnhats*8]"\n    # rings 100 rand 0.7 (slow 3 sine) 0.9\n    # ringsmodel "[0|1]"\n    # ringspoly "[0|1|0]"\n    # ringsinternal "[1|0|1|1]"\n')),(0,r.kt)("h3",{id:"ripples"},(0,r.kt)("inlineCode",{parentName:"h3"},"ripples")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," miRipples is an analog 4 pole filter. ",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20200422174618/https://www.mutable-instruments.net/modules/ripples/manual/"},"More information...")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ripples c r d")),(0,r.kt)("td",{parentName:"tr",align:null},"na"),(0,r.kt)("td",{parentName:"tr",align:null},"convenience function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ripplescf")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"cutoff frequency, 20Hz to 20kHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ripplesreson")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"resonance, self resonance occurs from ~0.75")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ripplesdrive")),(0,r.kt)("td",{parentName:"tr",align:null},"0-5"),(0,r.kt)("td",{parentName:"tr",align:null},"gain level")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "[[bd sd], linnhats*8]"\n    # ripplescf 0.4\n    # ripplesreson (range 0.5 1 $ slow 7 sine)\n    # ripplesdrive "{1 3 5}%2"\n')),(0,r.kt)("h3",{id:"warps"},(0,r.kt)("inlineCode",{parentName:"h3"},"warps")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),"  miWarps offers a variety of wave-shaping and cross-modulation effects. ",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20200422211642/https://www.mutable-instruments.net/modules/warps/manual/"},"More information...")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"warpsalgo")),(0,r.kt)("td",{parentName:"tr",align:null},"0-7"),(0,r.kt)("td",{parentName:"tr",align:null},"modulation algorithm. See the ",(0,r.kt)("a",{parentName:"td",href:"https://web.archive.org/web/20200918070209/https://mutable-instruments.net/modules/warps/manual/"},"manual"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"warpstimb")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"intensity of high harmonics, or algorithm tone control")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"warpsosc")),(0,r.kt)("td",{parentName:"tr",align:null},"0-3"),(0,r.kt)("td",{parentName:"tr",align:null},"internal oscillator state and waveform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"warpsfreq")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"external carrier amplitude or internal oscillator frequency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"warpsvgain")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"non-functional?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"warpseasteregg")),(0,r.kt)("td",{parentName:"tr",align:null},"0 ","|"," 1"),(0,r.kt)("td",{parentName:"tr",align:null},"undocumented")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "[[bd sd], linnhats*8]"\n    # warpstimb (slow 5 sine)\n    # warpsosc "<0 1 2 3>"\n    # warpsalgo "<0 1 2 3 4 5 6 7 6>"\n    # warpsfreq (slow 3 saw)\n    # warpseasteregg 1\n')))}s.isMDXComponent=!0}}]);