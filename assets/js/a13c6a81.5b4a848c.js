"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,o=new Array(s);o[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[d]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(3117),l=(n(7294),n(3905));const s={title:"Control Busses",id:"control_busses"},o=void 0,r={unversionedId:"reference/control_busses",id:"reference/control_busses",title:"Control Busses",description:"This page introduces the feature known as control busses, which was",source:"@site/docs/reference/control_busses.md",sourceDirName:"reference",slug:"/reference/control_busses",permalink:"/docs/reference/control_busses",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/control_busses.md",tags:[],version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1678656775,formattedLastUpdatedAt:"Mar 12, 2023",frontMatter:{title:"Control Busses",id:"control_busses"},sidebar:"reference",previous:{title:"mi-UGens",permalink:"/docs/reference/mi-ugens"}},i={},p=[{value:"Why we need control busses",id:"why-we-need-control-busses",level:2},{value:"Using control busses",id:"using-control-busses",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Control busses and MIDI",id:"control-busses-and-midi",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page introduces the feature known as ",(0,l.kt)("em",{parentName:"p"},"control busses"),", which was\nintroduced on Tidal 1.7."),(0,l.kt)("p",null,"Control busses let you route an effect via a bus. In practice, this means you\ncan pattern the effects of a sound while it's playing."),(0,l.kt)("h2",{id:"why-we-need-control-busses"},"Why we need control busses"),(0,l.kt)("p",null,"Let's say we want to modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"sax")," sample as it's playing, applying distinct values of the ",(0,l.kt)("inlineCode",{parentName:"p"},"squiz")," effect:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax" # legato 1 # squiz "1 2 5 1.5"\n')),(0,l.kt)("p",null,"This won't work. As the structure is defined by ",(0,l.kt)("inlineCode",{parentName:"p"},'sound "sax"')," there is only one event per cycle, so ",(0,l.kt)("inlineCode",{parentName:"p"},"squiz")," will always take the first value (",(0,l.kt)("inlineCode",{parentName:"p"},"1"),")."),(0,l.kt)("p",null,"There are some workarounds we can try:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax" # legato 1 |> squiz "1 2 5 1.5"\n')),(0,l.kt)("p",null,"Now the structure is taken from the right part, so there will be ",(0,l.kt)("inlineCode",{parentName:"p"},"4")," events per cycle, each one with a different ",(0,l.kt)("inlineCode",{parentName:"p"},"squiz")," value. But the sample will be triggered ",(0,l.kt)("inlineCode",{parentName:"p"},"4")," times from the beginning. We'd like to modify ",(0,l.kt)("inlineCode",{parentName:"p"},"squiz")," as the sample is playing, not by retriggering it."),(0,l.kt)("p",null,"Another idea is using ",(0,l.kt)("inlineCode",{parentName:"p"},"chop"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chop 4 $ sound "sax" # legato 1 # squiz "1 2 5 1.5"\n')),(0,l.kt)("p",null,"This cuts the ",(0,l.kt)("inlineCode",{parentName:"p"},"sax")," sample into four pieces, and applies one of the ",(0,l.kt)("inlineCode",{parentName:"p"},"squiz")," values to each piece. As the sample doesn't last for exactly one cycle, there is a noticeable change in sound at the cut points, and sound is not smooth."),(0,l.kt)("h2",{id:"using-control-busses"},"Using control busses"),(0,l.kt)("p",null,"The above problem can be easily solved using a control bus:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax" # legato 1 # squizbus 1 "1 2 5 1.5"\n')),(0,l.kt)("p",null,"Now we are modifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"squiz")," amount while the sample is playing."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"squizbus")," is defined like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: squizbus :: Pattern Int -> Pattern Double -> ControlPattern\n")),(0,l.kt)("p",null,"The first parameters is an identification for the control bus. It needs to be unique, so if you were controlling two effects separately you would need to use different numbers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax" # legato 1 # squizbus 1 "1 2 5 1.5" # lpfbus 2 "400 2000 3000" # lpq 0.2\n')),(0,l.kt)("p",null,"This identification needs to be unique across all patterns, unless you wanted two subpatterns to be controlled from the same source. In that case, you would probably have e.g. one control pattern like ",(0,l.kt)("inlineCode",{parentName:"p"},'lpfbus 2 "1000 5000"')," and others receiving only like ",(0,l.kt)("inlineCode",{parentName:"p"},"hpfrecv 2"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax" # legato 1 # lpfbus 2 "400 2000 5000" # lpq 0.4 # pan 0\n\nd2 $ sound "sax" # legato 1 # hpfrecv 2 # pan 1\n')),(0,l.kt)("p",null,"Here, you can hear how the low pass filter and the high pass filter change as the sample plays, but using both the same values."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"hpfrecv")," is defined like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: hpfrecv :: Pattern Int -> ControlPattern\n")),(0,l.kt)("p",null,"You can even pattern that identification:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax" # legato 1 # squizbus 1 "1 2 5 1.5" # lpfbus 2 "400 2000 5000" # lpq 0.4 # pan 0\n\nd2 $ sound "sax" # legato 1 # hpfrecv "<2 1>" # pan 1\n')),(0,l.kt)("p",null,"Most effects have a ",(0,l.kt)("inlineCode",{parentName:"p"},"bus")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"recv")," function to be used this way."),(0,l.kt)("p",null,"Control busses can also be used to create LFOs on effects:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 6 $ note "c\'maj" # s "superpiano" # legato 2 # lpq 0.2 # (lpfbus 1 $ segment 512 $ fast 4 $ range 200 2000 $ sine)\n\nd1 $ slow 6 $ note "c\'maj" # s "superpiano" # legato 2 # lpq 0.2 # (lpfbus 1 $ segment 512 $ fast 4 $ smooth "200 2000")\n')),(0,l.kt)("p",null,"Note that in these examples, we use ",(0,l.kt)("inlineCode",{parentName:"p"},"segment")," to sample the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"sine")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"smooth"),", as these are continuous patterns and won't work directly."),(0,l.kt)("p",null,"Additionally, you can prepare patterns to receive control signals, and then send them from other patterns:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "ade" # panrecv 1 # lpfrecv 2\n\nonce $ slow 4 $ panbus 1 $ segment 128 $ range (-1) 1 $ fast 4 $ sine\n\nd2 $ lpfbus 2 $ segment 128 $ smooth "2000 0"\n')),(0,l.kt)("h2",{id:"limitations"},"Limitations"),(0,l.kt)("p",null,"Not all control parameters can be controlled via a bus. The following is the whole list of parameters that can't be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"midinote, note, n, octave, begin, end, sustain, legato, loop, unit, length, fadeTime, fadeInTime, speed, endSpeed, gain, overgain,\nchannel, lag, offset, sound, array, midichan, control, ccn, ccv, polyTouch, midibend, miditouch, ctlNum, frameRate, frames,\nhours, midicmd, minutes, progNum, seconds, songPtr, uid, val, timescale, timescalewin, accelerate\n")),(0,l.kt)("p",null,"Note that ",(0,l.kt)("inlineCode",{parentName:"p"},"note"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"gain")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"accelerate")," are in this list, but ",(0,l.kt)("inlineCode",{parentName:"p"},"amp")," is not."),(0,l.kt)("p",null,"If you try to use a bus on one of these parameters, you will receive an error message like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax" # nbus 1 "0 1 2"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Error in pattern: Control parameter 'n' can't be sent to a bus.\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"panbus")," will work, but in the range -1 to 1 instead of 0 to 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "sax" # panbus 1 "-1 0 1"\n')),(0,l.kt)("h2",{id:"control-busses-and-midi"},"Control busses and MIDI"),(0,l.kt)("p",null,"It is possible to map MIDI CC numbers to control busses, and use an external MIDI controller to modify parameters in real time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "<d6\'m9 g6\'dom7\'ii>" # s "superhoover" # djfbus 1 (cF 0.5 "21")\n')),(0,l.kt)("p",null,"In the above example, CC number ",(0,l.kt)("inlineCode",{parentName:"p"},"21")," is mapped to ",(0,l.kt)("inlineCode",{parentName:"p"},"djf"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"cF")," indicates that the MIDI CC value is to be treated as a float, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"0-127")," value from the MIDI signal is automatically converted to a ",(0,l.kt)("inlineCode",{parentName:"p"},"0-1")," range. ",(0,l.kt)("inlineCode",{parentName:"p"},"0.5")," is the default starting value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "<d6\'m9 g6\'dom7\'ii>" # s "superhoover" # roombus 3 ("^23")\n')),(0,l.kt)("p",null,"In this example, ",(0,l.kt)("inlineCode",{parentName:"p"},'roombus 3 ("^23")')," maps CC number ",(0,l.kt)("inlineCode",{parentName:"p"},"23")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"room")," parameter, without specifying any initial value."),(0,l.kt)("p",null,"In some cases, you'll need to adapt the default CC values range:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "<d6\'m9 g6\'dom7\'ii>" # s "superhoover" # squizbus 2 (7 * "^22" + 1)\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"squiz")," amount doesn't have a 0-1 range for its values. We need values greater or equal than ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," for this."),(0,l.kt)("p",null,"In the last example, the ",(0,l.kt)("inlineCode",{parentName:"p"},"0-1")," range is modified, getting a range from ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"8"),", which are good values for ",(0,l.kt)("inlineCode",{parentName:"p"},"squiz"),"."),(0,l.kt)("p",null,"The whole example and the resulting sound is available at ",(0,l.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/tidal-1-7-control-busses-midi-control-input/2934/1"},"this forum post")," by @cleary."))}d.isMDXComponent=!0}}]);