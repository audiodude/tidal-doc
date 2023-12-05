"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[461],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),h=r,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return t?a.createElement(u,o(o({ref:n},m),{},{components:t})):a.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(3117),r=(t(7294),t(3905));const i={title:"Play chords",id:"playchords"},o=void 0,l={unversionedId:"patternlib/howtos/playchords",id:"patternlib/howtos/playchords",title:"Play chords",description:"Loading the chord list",source:"@site/docs/patternlib/howtos/playchords.md",sourceDirName:"patternlib/howtos",slug:"/patternlib/howtos/playchords",permalink:"/docs/patternlib/howtos/playchords",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/howtos/playchords.md",tags:[],version:"current",lastUpdatedAt:1701804581,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"Play chords",id:"playchords"},sidebar:"docs",previous:{title:"Build Rhythms",permalink:"/docs/patternlib/howtos/buildrhythms"},next:{title:"Trigger a pattern from the start",permalink:"/docs/patternlib/howtos/startpattern"}},s={},p=[{value:"Loading the chord list",id:"loading-the-chord-list",level:2},{value:"Playing with chords",id:"playing-with-chords",level:2}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"loading-the-chord-list"},"Loading the chord list"),(0,r.kt)("p",null,"To see the list of available chords, run ",(0,r.kt)("inlineCode",{parentName:"p"},"import Sound.Tidal.Chords"),". This command will import the internal list of chords. Running ",(0,r.kt)("inlineCode",{parentName:"p"},"chordList")," will output the list of the available chords registered by ",(0,r.kt)("strong",{parentName:"p"},"Tidal"),". Here is the list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"major maj aug plus sharp5 six 6 sixNine six9 sixby9 6by9 major7 maj7 major9 maj9 add9 major11 maj11 add11 major13 maj13\n add13 dom7 dom9 dom11 dom13 sevenFlat5 7f5 sevenSharp5 7s5 sevenFlat9 7f9 nine eleven 11 thirteen 13 minor min diminish\ned dim minorSharp5 msharp5 mS5 minor6 min6 m6 minorSixNine minor69 min69 minSixNine m69 mSixNine m6by9 minor7flat5 min7f\nlat5 m7flat5 m7f5 minor7 min7 m7 minor7sharp5 min7sharp5 m7sharp5 m7s5 minor7flat9 min7flat9 m7flat9 m7f9 minor7sharp9 m\nin7sharp9 m7sharp9 m7s9 diminished7 dim7 minor9 min9 m9 minor11 min11 m11 minor13 min13 m13 one 1 five 5 sus2 sus4 seven\nSus2 7sus2 sevenSus4 7sus4 nineSus4 ninesus4 9sus4 sevenFlat10 7f10 nineSharp5 9s5 m9sharp5 m9s5 sevenSharp5flat9 7s5f9 \nm7sharp5flat9 elevenSharp 11s m11sharp m11s\n")),(0,r.kt)("h2",{id:"playing-with-chords"},"Playing with chords"),(0,r.kt)("p",null,"The list above can be combined with a root note using the ",(0,r.kt)("inlineCode",{parentName:"p"},"'")," to use with the synths in Super Dirt like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'maj e\'min" # s "supermandolin"\n')),(0,r.kt)("p",null,"Samples tuned to concert C can also be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ note "c\'maj e\'min" # s "gtr"\n')),(0,r.kt)("p",null,"Chord inversions can be achieved by appending the ",(0,r.kt)("inlineCode",{parentName:"p"},"'")," to a chord, along with one or more ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," characters. A single ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," is the first inversion (same as default with no i). A second inversion looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'major7\'ii" # s "supermandolin"\n')),(0,r.kt)("p",null,"The number of notes in a chord can be modified by appending the ",(0,r.kt)("inlineCode",{parentName:"p"},"'")," to a chord, along with an integer. 6 notes can be played in the above chord inversion like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'major7\'6" # s "supermandolin"\n')),(0,r.kt)("p",null,"An Open Voicing for a chord can be created by appending ",(0,r.kt)("inlineCode",{parentName:"p"},"'o")," to a chord. This will move the 1st and 3rd note in a chord 1 octave lower (usually Root and Fifth):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "c\'major7\'o" # s "superpiano"\n')),(0,r.kt)("p",null,"The root can be set as ",(0,r.kt)("inlineCode",{parentName:"p"},"sharp")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"flat")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "cf\'maj c\'maj cs\'maj" # s "supermandolin"\n')),(0,r.kt)("p",null,"The octave can be set with a number. The default is 5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n("c4\'maj c5\'maj c6\'maj") # s "supermandolin"\n')),(0,r.kt)("p",null,"The chords can be patterned using the ",(0,r.kt)("inlineCode",{parentName:"p"},"|+")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n ("c e f" |+ "<\'maj \'min>") # s "supermandolin"\n')),(0,r.kt)("p",null,"This will give a pattern equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"d1 $ n \"<[c'maj e'maj f'maj] [c'min e'min f'min]>\" # s \"supermandolin\"\n")))}c.isMDXComponent=!0}}]);