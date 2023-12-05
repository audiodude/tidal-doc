"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=l,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(3117),l=(n(7294),n(3905));const o={title:"Randomness",id:"randomness"},r=void 0,i={unversionedId:"reference/randomness",id:"reference/randomness",title:"Randomness",description:"This page will present you all the functions that can be used to introduce some randomness in your musical patterns. Each function will be presented following the same model:",source:"@site/docs/reference/randomness.md",sourceDirName:"reference",slug:"/reference/randomness",permalink:"/docs/reference/randomness",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/randomness.md",tags:[],version:"current",lastUpdatedAt:1701804581,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"Randomness",id:"randomness"},sidebar:"reference",previous:{title:"Sampling",permalink:"/docs/reference/sampling"},next:{title:"Composition",permalink:"/docs/reference/composition"}},s={},p=[{value:"Pseudo-randomisation",id:"pseudo-randomisation",level:2},{value:"rand",id:"rand",level:3},{value:"irand",id:"irand",level:3},{value:"Perlin noise",id:"perlin-noise",level:2},{value:"perlin",id:"perlin",level:3},{value:"perlinWith",id:"perlinwith",level:3},{value:"perlin2",id:"perlin2",level:3},{value:"perlin2With",id:"perlin2with",level:3},{value:"The &quot;sometimes&quot; family",id:"the-sometimes-family",level:2},{value:"sometimes",id:"sometimes",level:3},{value:"sometimesBy",id:"sometimesby",level:3},{value:"someCycles",id:"somecycles",level:3},{value:"someCyclesBy",id:"somecyclesby",level:3},{value:"Choosing randomly",id:"choosing-randomly",level:2},{value:"choose",id:"choose",level:3},{value:"chooseby",id:"chooseby",level:3},{value:"wchoose",id:"wchoose",level:3},{value:"wchooseby",id:"wchooseby",level:3},{value:"cycleChoose",id:"cyclechoose",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page will present you all the functions that can be used to introduce some randomness in your musical patterns. Each function will be presented following the same model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,l.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,l.kt)("h2",{id:"pseudo-randomisation"},"Pseudo-randomisation"),(0,l.kt)("h3",{id:"rand"},"rand"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: rand :: Fractional a => Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rand")," is an oscillator that generates a pattern of (pseudo-)random, floating point numbers between ",(0,l.kt)("inlineCode",{parentName:"p"},"0.0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0"),". For example to randomly pan around the stereo field you can:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*8" # pan rand\n')),(0,l.kt)("p",null,"Or to enjoy a randomised speed from ",(0,l.kt)("inlineCode",{parentName:"p"},"0.5")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5"),", you can add ",(0,l.kt)("inlineCode",{parentName:"p"},"0.5")," to it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy*4" # speed (rand + 0.5)\n')),(0,l.kt)("h3",{id:"irand"},"irand"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: irand :: Num a => Int -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"irand")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"rand"),", but generates a continuous oscillator of (pseudo-)random integers between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"n-1")," inclusive. Notably used to pick random samples from a folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "amencutup*8" # n (irand 8)\n')),(0,l.kt)("h2",{id:"perlin-noise"},"Perlin noise"),(0,l.kt)("h3",{id:"perlin"},"perlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: perlin :: Pattern Double\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"perlin")," produces 1D Perlin (smooth) noise. It works like rand but smoothly moves between random values each cycle. For example, you can smoothly and randomly change speed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*32" # speed (perlin + 0.5)\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"perlin")," function produces a new random value to move to every cycle. If you want a new random value to be generated more or less frequently, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"fast")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"slow"),", respectively:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*32" # speed (fast 4 $ perlin + 0.5)\nd1 $ sound "bd*32" # speed (slow 4 $ perlin + 0.5)\n')),(0,l.kt)("h3",{id:"perlinwith"},"perlinWith"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"perlinWith")," allows you to specify a pattern as input to generate random values instead of using the default cycle count:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "arpy*32" # cutoff (perlinWith (saw * 4) * 2000)\n')),(0,l.kt)("h3",{id:"perlin2"},"perlin2"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"perlin2")," creates 2D noise by allowing you to specify a custom pattern as a second dimension (cycle number remains as the first dimension):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd*32" # speed (perlin2 (sine*4) + 1)\n')),(0,l.kt)("h3",{id:"perlin2with"},"perlin2With"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"perlin2With")," is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"perlinWith")," except allows you to provide two functions for 2D noise:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1\n $ s "[arpy*32]"\n # lpf (range 60 5000 $ perlin2With (cosine*2) (sine*2))\n # lpq 0.3\n')),(0,l.kt)("h2",{id:"the-sometimes-family"},'The "sometimes" family'),(0,l.kt)("h3",{id:"sometimes"},"sometimes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: sometimes :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sometimes")," is function, that applies another function to a pattern, around 50% of the time, at random. It takes two inputs, the function to be applied, and the pattern you are applying it to."),(0,l.kt)("p",null,"For example to distort half the events in a pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sometimes (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sometimes")," has a number of variants, which apply the function with different likelihood: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"function"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0likelihood"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"always"),(0,l.kt)("td",{parentName:"tr",align:null},"100%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"almostAlways"),(0,l.kt)("td",{parentName:"tr",align:null},"90%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"often"),(0,l.kt)("td",{parentName:"tr",align:null},"75%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sometimes"),(0,l.kt)("td",{parentName:"tr",align:null},"50%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rarely"),(0,l.kt)("td",{parentName:"tr",align:null},"25%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"almostNever"),(0,l.kt)("td",{parentName:"tr",align:null},"10%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"never"),(0,l.kt)("td",{parentName:"tr",align:null},"0%")))),(0,l.kt)("h3",{id:"sometimesby"},"sometimesBy"),(0,l.kt)("p",null,"If you want to be specific, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"sometimesBy")," and a number, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"sometimesBy 0.93 (# speed 2)\n")),(0,l.kt)("p",null,"to apply the speed control on average 93 times out of a hundred."),(0,l.kt)("h3",{id:"somecycles"},"someCycles"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"someCycles")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"sometimes"),", but instead of applying the given function to random events, it applies it to random cycles. For example the following will either distort all of the events in a cycle, or none of them:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ someCycles (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"\n')),(0,l.kt)("h3",{id:"somecyclesby"},"someCyclesBy"),(0,l.kt)("p",null,"As with ",(0,l.kt)("inlineCode",{parentName:"p"},"sometimesBy"),", if you want to be specific, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"someCyclesBy")," and a number. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"someCyclesBy 0.93 (# speed 2)\n")),(0,l.kt)("p",null,"will apply the speed control on average ",(0,l.kt)("inlineCode",{parentName:"p"},"93")," cycles out of a hundred."),(0,l.kt)("h2",{id:"choosing-randomly"},"Choosing randomly"),(0,l.kt)("h3",{id:"choose"},"choose"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: choose :: [a] -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"choose")," function emits a stream of randomly choosen values from the given list, as a continuous pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum ~ drum drum" # n (choose [0,2,3])\n')),(0,l.kt)("p",null,"As with all continuous patterns, you have to be careful to give them structure; in this case choose gives you an infinitely detailed stream of random choices. "),(0,l.kt)("h3",{id:"chooseby"},"chooseby"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: chooseBy :: Pattern Double -> [a] -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"chooseBy")," function is like choose but instead of selecting elements of the list randomly, it uses the given pattern to select elements."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'chooseBy "0 0.25 0.5" ["a","b","c","d"]\n')),(0,l.kt)("p",null,"will result in the pattern ",(0,l.kt)("inlineCode",{parentName:"p"},'"a b c" '),"."),(0,l.kt)("h3",{id:"wchoose"},"wchoose"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: wchoose :: [(a, Double)] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wchoose")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"choose"),", but allows you to 'weight' the choices, so some are more likely to be chosen than others. The following is similar to the previous example, but the ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," is twice as likely to be chosen than the ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum ~ drum drum" # n (wchoose [(0,0.25),(2,0.5),(3,0.25)])\n')),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Prior to version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0")," of ",(0,l.kt)("strong",{parentName:"p"},"Tidal"),", the weights had to add up to ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),", but this is no longer the case. ")),(0,l.kt)("h3",{id:"wchooseby"},"wchooseby"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: wchooseBy :: Pattern Double -> [(a,Double)] -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"wchooseBy")," function is like ",(0,l.kt)("inlineCode",{parentName:"p"},"wchoose")," but instead of selecting elements of the list randomly, it uses the given pattern to select elements. "),(0,l.kt)("h3",{id:"cyclechoose"},"cycleChoose"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: cycleChoose :: [a] -> Pattern a\n")),(0,l.kt)("p",null,"Similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"choose"),", but only picks once per cycle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum ~ drum drum" # n (cycleChoose [0,2,3])\n')))}m.isMDXComponent=!0}}]);